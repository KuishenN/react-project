import React, { Component } from 'react'

import { CounterBtn, Counter } from './components'

export default class App extends Component {
  render () {
    return (
      <div>
        <CounterBtn>-</CounterBtn>
          <Counter></Counter>
        <CounterBtn>+</CounterBtn>
      </div>
    )
  }
}
