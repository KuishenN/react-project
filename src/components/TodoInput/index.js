import React, { Component, createRef } from 'react'
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
    this.inputDom = createRef()
  }
    // 3. 最好的实现方式, 父组件定义 子组件传参的方式
    handleAddClick = () => {
      // this中函数的执行为什么指向undefined
      if (this.state.inputValue.trim() ==  '') {
        return 
      }
      this.props.addTodo(this.state.inputValue)
      this.setState((prevState) => {
        return {
          inputValue: ''
        }
      }, ()=> {
        this.inputDom.current.focus()
      })
    }
  render() {
    return (
      <div>
      <input type="text"
        value={this.state.inputValue} //设置值
        onChange={this.handleInputChange}
        onKeyUp={this.handleKeyClick}
        ref={this.inputDom}
      />
      <button onClick={this.handleAddClick}>{this.props.btnText}</button>
      </div>
    )
  }
  handleInputChange = (e) => {
    this.setState({ // 获取值
      inputValue: e.currentTarget.value
    })
  }
  handleKeyClick = (e) => {
    if (e.keyCode === 13) {
      this.handleAddClick()
    }
  }
  /**
   *  // 1. 传递匿名函数的方式
   * onClick={() => {
        this.handleAddClick()
      }}
      // 2. bind传递参数的形式
      onClick={this.handleAddClick.bind(this, 123)}
   */
}
