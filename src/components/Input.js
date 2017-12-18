import React, { Component } from 'react'

const Input = (props) => (
  <input type="text" onChange={props.updateLocation.bind(this, props.num)} />
) 

export default Input
