import React, { Component } from 'react'
import LocationAutocomplete from 'location-autocomplete'

const Input = (props) => (
  <LocationAutocomplete
    name="venue"
    placeholder="Venue Name"
    googleAPIKey="AIzaSyCcMNB423hp9o_GHn9FEEyBtEHu8ZGjYS0"
    onChange={(e) => { console.log(e.target.value) }}
    onDropdownSelect={(location) => { props.onDropdownSelect(location, props.num) }}
  />
)

export default Input

  // < input type = "text" onChange = { props.updateLocation.bind(this, props.num) } />
