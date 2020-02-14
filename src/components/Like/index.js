import React, { Component } from 'react'

import PropTypes from 'prop-types'

export default class Like extends Component {
  static propTypes = {
    x: PropTypes.number
  }
  static defaultProps = {
    x: 1
  }
  constructor () {
    super()
    this.state = {
      isLike: false
    }
  }
  handleLikeClick = () => {
    // 第一种直接设置state的状态
    // this.setState是异步执行的, 接收两个参数第一个是任何类型, 第二个是一个回调函数, 而且setState是异步执行的，
    // setState的实现原理
    // this.setState({
    //   isLike: !this.state.isLike
    // }, () => {
    //   console.log(this.state.isLike, '内部执行')
    // })

    // 第二种方式 使用函数的形式, 
    // 上次的state中的数据状态
    this.setState((prevProps, props) => {
      // 使用函数包裹可以写特定的代码逻辑AOP, 包含获取的默认状态
      console.log(props)
      return {
        isLike : !prevProps.isLike
      }
    }, () => {
      // 这里才能拿到真正改变后的数据
      console.log(this.state.isLike)
    })
    console.log('这是外部部设置, 会不会先执行呢')
  }
  render() {
    return (
      <>
        <span onClick={this.handleLikeClick}>
          {this.state.isLike ? 'Like': 'Unlike'}
        </span>
      </>
    )
  }
}
