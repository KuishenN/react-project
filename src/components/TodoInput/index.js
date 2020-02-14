import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TodoInput extends Component {
  static propTypes = {
    btnText: PropTypes.string
  }
  static defaultProps = {
    btnText: '添加TODO'
  }
  constructor () {
    super()
    this.state = {
      inputValue: ''
    }
  }

  render() {
    return (
      <div>
      <input type="text"
      onChange={this.handleInputChange}
      /><button onClick={() => {
        this.handleAddClick()
      }}>{this.props.btnText}</button>
      </div>
    )
  }
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.currentTarget.value
    })
  }
  /**
   *  // 1. 传递匿名函数的方式
   * onClick={() => {
        this.handleAddClick()
      }}
      // 2. bind传递参数的形式
      onClick={this.handleAddClick.bind(this, 123)}
   */
  // 3. 最好的实现方式, 父组件定义 子组件传参的方式
  handleAddClick = () => {
    // this中函数的执行为什么指向undefined
    this.props.addTodo(this.state.inputValue)
    
  }
}
