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
          location: "",
          num: 0
        }
      ]
    }
    this.addInput = this.addInput.bind(this)
  }

  addInput = () => {
    var newNum = 0
    if (this.state.locations[this.state.locations.length - 1].num === 0) {
      newNum = this.state.locations[this.state.locations.length - 1].num + 1
    }
    var newLocation = {
      location: "",
      num: newNum
    }
    this.setState({
      locations: this.state.locations.concat(newLocation)
    })
  }

  render() {
    console.log(this.state)
    return (
      <div className="main-wrapper">
        <Locations locations={this.state.locations} addInput={this.addInput}>
          {this.state.locations.map((location, i) => {
            return <Input key={i} num={location.num}/>
          })}
        </Locations>
      </div>
    )
  }
}
