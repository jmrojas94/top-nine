import React, { Component } from 'react'
import LocationAutocomplete from 'location-autocomplete'

import Input from './Input.js'

const StartingLocationInput = (props) => {
  return (
    <div>
      <h1>Starting Location</h1>
      {props.children}
    </div>
  )
}

export default StartingLocationInput
