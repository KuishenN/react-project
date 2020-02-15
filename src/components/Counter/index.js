import React, { Component } from 'react'

import { CounterConsumer } from '../../counterStore'


export default class Counter extends Component {
  render () {
    return (
      // 使用CounterConsumer接收count
    <CounterConsumer>
      {/* {Consumer的children必须是一个方法, 这个方法有一个参数, 这个参数就是Provider的value值} */}
      {({count,incrementCount }) => { // 消费者包含的必须是一个函数
        return <span>{count}</span>
      }}
    </CounterConsumer>
    )
  }
}
