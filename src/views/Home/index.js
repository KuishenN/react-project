import React, { Component } from 'react'

export default class Home extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        Home {this.props.x}
      </div>
    )
  }
}
