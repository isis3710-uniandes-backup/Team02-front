var express = require('express'); // Express web server framework
var router = express.Router();
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');

var client_id = '71c72374958f467eb800a9c42c35fc98'; // Your client id
var client_secret = '18c278187b574429bc40bce632093364';
var redirect_uri = 'http://localhost:3001/callback';

var access_token = undefined;
var refresh_token = undefined;
/**
 * Generates a random string containing numbers and letters
 * @param  {number} length The length of the string
 * @return {string} The generated string
 */
var generateRandomString = function (length) {
    var text = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
router.get('/start', (req, res) => {
    res.send("OK");
});

router.get('/login', function (req, res) {

    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = 'streaming user-read-birthdate user-read-private user-read-email playlist-read-private playlist-read-collaborative user-read-recently-played user-modify-playback-state user-read-playback-state';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

router.get('/callback', function (req, res) {

    // your application requests refresh and access tokens
    // after checking the state parameter

    var code = req.query.code || null;
    var state = req.query.state || null;
    var storedState = req.cookies ? req.cookies[stateKey] : null;

    if (state === null || state !== storedState) {
        res.redirect('/#' +
            querystring.stringify({
                error: 'state_mismatch'
            }));
    } else {
        res.clearCookie(stateKey);
        var authOptions = {
            url: 'https://accounts.spotify.com/api/token',
            form: {
                code: code,
                redirect_uri: redirect_uri,
                grant_type: 'authorization_code'
            },
            headers: {
                'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
            },
            json: true
        };

        request.post(authOptions, function (error, response, body) {
            if (!error && response.statusCode === 200) {

                access_token = body.access_token;
                refresh_token = body.refresh_token;

                var options = {
                    url: 'https://api.spotify.com/v1/me',
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true
                };

                // use the access token to access the Spotify Web API
                request.get(options, function (error, response, body) {
                    //console.log(body);
                });

                // we can also pass the token to the browser to make requests from there
                res.redirect('/menu?' + querystring.stringify({
                    access_token: access_token,
                    refresh_token: refresh_token
                }));

            } else {
                res.redirect('/error/' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});
router.get('/menu', function (req, res) {
    res.send(access_token);
});
router.get('/menu/playlists', function (req, res) {
    var options = {
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };
    request.get(options, function (error, response, body) {
        res.send(body);
    });
});
router.get('/menu/playlists/:idPlaylist/tracks', function (req, res) {
    var options = {
        url: `https://api.spotify.com/v1/playlists/${req.params.idPlaylist}`,
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };
    request.get(options, function (error, response, body) {
        res.send(body);
    });
});
router.get('/play/tracks/:trackId', (req, res) => {
    var trackId = req.params.trackId;
    var deviceId = req.params.deviceId;
    var optionsFirstRequest = {
        url: `https://api.spotify.com/v1/me/player/devices`,
        headers: { 'Authorization': 'Bearer ' + access_token },
        json: true
    };
    request.get(optionsFirstRequest, function (error, response, body) {
        for (let device of body.devices) {
            if (device.name === 'Playlist Maker') {
                var optionsPlayRequest = {
                    url: `https://api.spotify.com/v1/me/player/play?device_id=${device.id}`,
                    headers: { 'Authorization': 'Bearer ' + access_token },
                    json: true,
                    body: {'uris': [`spotify:track:${trackId}`]}
                }
                request.put(optionsPlayRequest, function(error, response, body){
                    console.log(response);
                    //console.log(error);
                    //console.log(body);
                    res.send("Playing");
                });
            }
        }
    });
});

router.get('/refresh_token', function (req, res) {

    // requesting access token from refresh token
    refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
});
var stateKey = 'spotify_auth_state';




module.exports = router;