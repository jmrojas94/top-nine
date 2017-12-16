import React from 'react'

export default class Locations extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return ( 
      <div>
        <div>
          {this.props.children}
          <button onClick={this.props.addInput.bind(this)}>Add Location</button>
        </div>
      </div>
    )
  }
}
