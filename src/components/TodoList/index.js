import React, { Component } from 'react'
import PropTypes from 'prop-types'

import TodoItem from './TodoItem'

export default class TodoList extends Component {
  static propTypes = {
    todos: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      isCompleted: PropTypes.bool.isRequired
    })).isRequired
  }
  render() {
    const {todos, onCompleted} = this.props
    return (
      <ul> 
        {
          todos.map(todo => {
            return <TodoItem
               key={todo.id} {...todo}
               onCompleted={onCompleted}
              />
          })
        }
      </ul>
    )
  }
}
