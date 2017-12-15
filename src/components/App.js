import React from 'react'

import Input from './Input.js'
import Locations from './Locations.js'
import Map from './Map.js'

import "../styles/app.scss"

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      locations: [
        {
          location: ""
        }
      ]
    }
    this.addLocationInput = this.addLocationInput.bind(this)
  }

  addLocationInput = () => {
    var newLocation = {
      location: ""
    }
    this.setState({
      locations: this.state.locations.concat(newLocation)
    })
  }

  render() {
    return (
      <div className="main-wrapper">
        <Locations locations={this.state.locations} addLocationInput={this.addLocationInput}>
          {this.state.locations.map((locations) => {
            return <Input />
          })}
        </Locations>
      </div>
    )
  }
}
