import React, { Component } from 'react'

import { CounterConsumer } from '../../counterStore'

export default class CounterBtn extends Component {
  render () {
    return (
      <CounterConsumer>
        {/* {提供者提交的数据 通过消费者函数的模式接收} */}
        {({incrementCount, decrementCount}) => {
          const handler = this.props.children === '-' ? decrementCount : incrementCount
          return <button onClick={handler}>{this.props.children}</button>
        }}
      </CounterConsumer>
    )
  }
}