import React from 'react'

import Input from './Input.js'
import Locations from './Locations.js'
import Map from './Map.js'
import StartingLocationInput from './StartingLocationInput.js'

import update from 'immutability-helper'

import "../styles/app.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        {
          location: "",
          num: 0,
          coordinates: {
            lat: null,
            long: null
          }
        }
      ],
      startingLocation: {
        location: "",
        coordinates: {
          lat: null,
          long: null
        }
      }
    }
    this.addInput = this.addInput.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
    this.updateStartingLocation = this.updateStartingLocation.bind(this)
  }

  addInput = () => {
    var newNum = this.state.locations[this.state.locations.length - 1].num + 1
    var newLocation = {
      location: "",
      num: newNum
    }
    this.setState(prevState => ({
      locations: prevState.locations.concat(newLocation)
    }))
  }

  getLocationCoordinates = (location) => {
    var locationCoordinates = {
      lat: location.autocomplete.getPlace().geometry.location.lat(),
      long: location.autocomplete.getPlace().geometry.location.lng()
    }
    return locationCoordinates
  }

  getLocationIndex = (num) => {
    for (var i = 0; i < this.state.locations.length; i++) {
      if (this.state.locations[i].num === num) {
        return i
      }
    }
    return -1
  }

  updateLocation = (location, num) => {
    var locationNum = this.getLocationIndex(num)
    var locationCoordinates = this.getLocationCoordinates(location)
    var locationData = update(this.state.locations[locationNum], { location: { $set: location.autocomplete.getPlace().name }, coordinates: { $set: locationCoordinates } })
    var newLocation = update(this.state.locations, {
      $splice: [[locationNum, 1, locationData]]
    });
    this.setState(prevState => ({
      locations: newLocation
    }))
  }

  updateStartingLocation = (location) => {
    var locationCoordinates = this.getLocationCoordinates(location)
    var newStartingLocation = update(this.state.startingLocation, { location: { $set: location.autocomplete.getPlace().name }, coordinates: { $set: locationCoordinates } })
    this.setState(prevState => ({
      startingLocation: newStartingLocation
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="main">
        <StartingLocationInput>
          <Input num={null} onDropdownSelect={this.updateStartingLocation} />
        </StartingLocationInput>
        <Locations locations={this.state.locations} addInput={this.addInput}>
          {this.state.locations.map((location, i) => {
            return <Input key={i} num={location.num} onDropdownSelect={this.updateLocation} />
          })}
        </Locations>
      </div>
    )
  }
}
