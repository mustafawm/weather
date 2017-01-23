import React from 'react'
import { connect } from 'react-redux'

import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

const mapStateToProps = ({ weather }) => ({
  weather
})

class WeatherList extends React.Component {

  renderWeather = weatherData => {
    const name = weatherData.city.name
    const { lat, lon }  = weatherData.city.coord

    const temps = weatherData.list.map(item => item.main.temp)
    const pres  = weatherData.list.map(item => item.main.pressure)
    const hums  = weatherData.list.map(item => item.main.humidity)

    return (
      <tr key={name}>
        <td> <GoogleMap lng={lon} lat={lat} /> </td>
        <td> <Chart data={temps} color='orange' unit="C"/> </td>
        <td> <Chart data={pres} color='blue' unit="hPa"/> </td>
        <td> <Chart data={hums} color='brown' unit="%"/> </td>
      </tr>
    )
  }
    

  render() {
    const { weather } = this.props

    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temp.</th>
            <th>Pres.</th>
            <th>Hum.</th>
          </tr>
        </thead>
        <tbody>
          {weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

export default connect(mapStateToProps, null)(WeatherList)