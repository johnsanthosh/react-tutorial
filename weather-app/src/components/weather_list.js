import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from './chart';
import GoogleMap from './google_map';

class WeatherList extends Component {

    render() {
        return (
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>City</th>
                    <th>Temperature (K)</th>
                    <th>Pressure (hPa) </th>
                    <th>Humidity (%) </th>
                </tr>
                </thead>
                <tbody>
                {this.props.weather.map((city) => {

                    const name = city.city.name;
                    const temps = city.list.map(weather => weather.main.temp);
                    const humidities = city.list.map(weather => weather.main.humidity);
                    const pressures = city.list.map(weather => weather.main.pressure);
                    const {lon, lat} = city.city.coord;

                    return (
                        <tr key={city.city.id}>
                            <td><GoogleMap lon={lon} lat={lat}/></td>
                            <td>
                                <Chart data={temps} color="orange" units="K"/>
                            </td>
                            <td>
                                <Chart data={pressures} color="yellow" units="hPa"/>
                            </td>
                            <td>
                                <Chart data={humidities} color="green" units="%"/>
                            </td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}) {
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);