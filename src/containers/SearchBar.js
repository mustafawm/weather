import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchWeather } from '../actions'


const mapDispatchToProps = dispatch => {
  return bindActionCreators( { fetchWeather }, dispatch )
}
  


class SearchBar extends React.Component {
  state = {
    term: ''
  }

  onInputChange = (e) => this.setState({term: e.target.value})
  

  onFormSubmit = (e) => {
    e.preventDefault()
    this.props.fetchWeather(this.state.term)
    this.setState({term: ''})
  }

  render () {
    return (
      <form className='input-group'
        onSubmit={this.onFormSubmit}
      >
        <input placeholder='Get 5-day forecast for your city'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit'
            className='btn btn-default'
          >
            Search
          </button>
        </span>
      </form>
    )
  }
}

export default connect(null, mapDispatchToProps)(SearchBar)