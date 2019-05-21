import React, { Component } from 'react';
import { Element } from 'react-faux-dom';
import * as d3 from 'd3';


class BarComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            "data": []
        };
        fetch('https://api.spotify.com/v1/me/top/tracks?limit=50',
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + props.accessToken,
                }
            })
            .then((response) => {
                response.json().then((data) => {
                    var url = "https://api.spotify.com/v1/audio-features?ids=" + data.items[0].id;
                    for (let item of data.items) {
                        url += "%2C" + item.id;
                    }
                    fetch(url, {
                        method: 'GET',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + props.accessToken,
                        }
                    }).then((response) => {
                        response.json().then((data) => {
                            var danceability = 0.0;
                            var energy = 0.0;
                            var accousticness = 0.0;
                            var instrumentalness = 0.0;
                            var liveness = 0.0;
                            var speechiness = 0.0;
                            for (let item of data.audio_features) {
                                danceability += item.danceability * 100;
                                energy += item.energy * 100;
                                accousticness += item.accousticness * 100;
                                instrumentalness += item.instrumentalness * 100;
                                liveness += item.liveness * 100;
                                speechiness += item.speechiness * 100;
                            }
                            var data = [
                                {
                                    "attribute": "danceability",
                                    "value": danceability / 51
                                },{
                                    "attribute": "energy",
                                    "value": energy / 51
                                },{
                                    "attribute": "accousticness",
                                    "value": accousticness / 51
                                },{
                                    "attribute": "instrumentalness",
                                    "value": instrumentalness / 51
                                },{
                                    "attribute": "liveness",
                                    "value": liveness / 51
                                },{
                                    "attribute": "speechiness",
                                    "value": speechiness / 51
                                }
                            ]
                            this.setState({"data":data});
                        })
                    })
                });

            }).catch((error) => {
                console.error(error);
            });

    }
    plot(chart, width, height, data) {
        console.log(data);
        const xScale = d3.scaleBand()
            .domain(data.map(d => d.attribute))
            .range([0, width]);
        const yScale = d3.scaleLinear()
            .domain([0, d3.max(data, d => d.value)])
            .range([height, 0]);
        const colorScale = d3.scaleOrdinal(d3.schemeCategory10);

        chart.selectAll('.bar')
            .data(data)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('x', d => xScale(d.attribute))
            .attr('y', d => yScale(d.value))
            .attr('height', d => (height - yScale(d.value)))
            .attr('width', d => xScale.bandwidth())
            .style('fill', (d, i) => colorScale(i));

        const xAxis = d3.axisBottom()
            .scale(xScale);

        chart.append('g')
            .classed('x axis', true)
            .attr('transform', `translate(0,${height})`)
            .call(xAxis);

        const yAxis = d3.axisLeft()
            .ticks(5)
            .scale(yScale);

        chart.append('g')
            .classed('y axis', true)
            .attr('transform', 'translate(0,0)')
            .call(yAxis);

        chart.select('.x.axis')
            .append('text')
            .attr('x', width / 2)
            .attr('y', 60)
            .attr('fill', '#fff')
            .style('font-size', '20px')
            .style('text-anchor', 'middle')
            .text('Attribute');

        chart.select('.y.axis')
            .append('text')
            .attr('x', 0)
            .attr('y', 0)
            .attr('transform', `translate(-50, ${height / 2}) rotate(-90)`)
            .attr('fill', '#fff')
            .style('font-size', '20px')
            .style('text-anchor', 'middle')
            .text('Value');

        const yGridlines = d3.axisLeft()
            .scale(yScale)
            .ticks(5)
            .tickSize(-width, 0, 0)
            .tickFormat('')

        chart.append('g')
            .call(yGridlines)
            .classed('gridline', true);
    }

    drawChart(data) {
        const width = 800;
        const height = 450;

        const el = new Element('div');
        const svg = d3.select(el)
            .append('svg')
            .attr('id', 'chart')
            .attr('width', width)
            .attr('height', height);

        const margin = {
            top: 60,
            bottom: 100,
            left: 80,
            right: 40
        };

        const chart = svg.append('g')
            .classed('display', true)
            .attr('transform', `translate(${margin.left},${margin.top})`);

        const chartWidth = width - margin.left - margin.right;
        const chartHeight = height - margin.top - margin.bottom
        this.plot(chart, chartWidth, chartHeight, data);

        return el.toReact();
    }

    render() {
        return this.drawChart(this.state.data);
    }

}

export default BarComponent;