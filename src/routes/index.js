var express = require('express'); // Express web server framework
var router = express.Router();
var request = require('request'); // "Request" library
var cors = require('cors');
var querystring = require('querystring');

var client_id = '71c72374958f467eb800a9c42c35fc98'; // Your client id
var client_secret = '18c278187b574429bc40bce632093364';
var redirect_uri = 'http://localhost:3001/callback';

const corsOptions = {
    origin: 'http://localhost:3000'
}
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
router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
router.get('/login', cors(corsOptions), function (req, res) {

    var state = generateRandomString(16);
    res.cookie(stateKey, state);

    // your application requests authorization
    var scope = 'streaming user-read-birthdate user-read-private user-read-email  playlist-modify-public playlist-modify-private playlist-read-private playlist-read-collaborative user-read-recently-played user-modify-playback-state user-read-playback-state';
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: client_id,
            scope: scope,
            redirect_uri: redirect_uri,
            state: state
        }));
});

router.get('/callback', cors(corsOptions), function (req, res) {

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
                res.redirect('http://localhost:3000/menu/' + body.access_token);

            } else {
                res.redirect('/error/' +
                    querystring.stringify({
                        error: 'invalid_token'
                    }));
            }
        });
    }
});

router.get('/menu/:accesstoken/playlists', cors(corsOptions), function (req, res) {
    var options = {
        url: 'https://api.spotify.com/v1/me/playlists',
        headers: { 'Authorization': 'Bearer ' + req.params.accesstoken },
        json: true
    };
    request.get(options, function (error, response, body) {
        res.send(body);
    });
});
router.get('/menu/:accesstoken/playlists/:idPlaylist/tracks', cors(corsOptions), function (req, res) {
    var options = {
        url: `https://api.spotify.com/v1/playlists/${req.params.idPlaylist}`,
        headers: { 'Authorization': 'Bearer ' + req.params.accesstoken },
        json: true
    };
    request.get(options, function (error, response, body) {
        res.send(body);
    });
});
router.get('/play/:accesstoken/tracks/:trackId', cors(corsOptions), (req, res) => {
    var trackId = req.params.trackId;
    var accesstoken = req.params.accesstoken;
    var optionsFirstRequest = {
        url: `https://api.spotify.com/v1/me/player/devices`,
        headers: { 'Authorization': 'Bearer ' + accesstoken },
        json: true
    };
    request.get(optionsFirstRequest, function (error, response, body) {
        for (let device of body.devices) {
            if (device.name === 'Playlist Maker') {
                var optionsPlayRequest = {
                    url: `https://api.spotify.com/v1/me/player/play?device_id=${device.id}`,
                    headers: { 'Authorization': 'Bearer ' + accesstoken },
                    json: true,
                    body: { 'uris': [`spotify:track:${trackId}`] }
                }
                request.put(optionsPlayRequest, function (error, response, body) {
                });
            }
        }
    });
});

router.get('/refresh_token', cors(corsOptions), function (req, res) {

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

router.post('/menu/:accesstoken/create', cors(corsOptions), function (req, res) {
    var accesstoken = req.params.accesstoken;
    var getUserOptions = {
        url: `https://api.spotify.com/v1/me`,
        headers: { 'Authorization': 'Bearer ' + accesstoken },
        json: true
    }
    request.get(getUserOptions, function (error, response, body){
        var postOptions = {
            url: `https://api.spotify.com/v1/users/${body.id}/playlists`,
            headers: { 'Authorization': 'Bearer ' + accesstoken },
            json: true,
            body: req.body
        }
        request.post(postOptions, function(error, response, body){
            if(response.statusCode != 201){
                res.send("Missing Field");
            }
            else{
                res.send(body.id);
            }
        });
    });
 
});

var stateKey = 'spotify_auth_state';




module.exports = router;