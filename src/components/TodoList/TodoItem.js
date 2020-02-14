import React, { Component } from 'react'
const noop = () => {}
export default class TodoItem extends Component {
  handleChangeClick = () => {
    const {
      onCompleted = noop,
      id
    } = this.props
    onCompleted(id)
  }
  render() {
    return (
        <li>
          <input type="checkbox" checked={this.props.isCompleted} onChange={this.handleChangeClick} /> <span> {this.props.title} {this.props.isCompleted ? '已完成': '未完成'}</span>
        </li>
    )
  }
}
