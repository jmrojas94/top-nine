import React from 'react'

import Input from './Input.js'
import Locations from './Locations.js'
import Map from './Map.js'

import update from 'immutability-helper'

import "../styles/app.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        {
          location: "",
          num: 0
        }
      ]
    }
    this.addInput = this.addInput.bind(this)
    this.updateLocation = this.updateLocation.bind(this)
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

  getLocationIndex = (num) => {
    for (var i = 0; i < this.state.locations.length; i++) {
      if (this.state.locations[i].num === num) {
        return i
      }
    }
    return -1
  }

  updateLocation = (num, e) => {
    var locationNum = this.getLocationIndex(num)
    var location = update(this.state.locations[locationNum], { location: { $set: e.target.value } })
    var newLocation = update(this.state.locations, {
      $splice: [[locationNum, 1, location]]
    });
    this.setState(prevState => ({
      locations: newLocation
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div className="main-wrapper">
        <Locations locations={this.state.locations} addInput={this.addInput}>
          {this.state.locations.map((location, i) => {
            return <Input key={i} num={location.num} updateLocation={this.updateLocation} />
          })}
        </Locations>
      </div>
    )
  }
}
