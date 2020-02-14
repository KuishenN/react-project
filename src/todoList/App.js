// 应用的根组件
import React, { Component } from 'react'

import { 
  TodoHeader,
  TodoInput, 
  TodoList,
  Like
 }  from './components'

export default class App extends Component {

  constructor () {
    super()
    this.state = {
      title: '待办事项列表',
      desc: '今日事今日做2',
      todos: [
        {id: 1, title: '吃饭', isCompleted: true},
        {id: 2, title: '睡觉', isCompleted: false},
      ]
    }
  }

  addTodo = (title) => {
    this.setState({
      todos: [...this.state.todos, {id: Math.random(), title, isCompleted: false}]
    })
  }

  onCompleted = (id) => {
    console.log('onCompleted', id)
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted
        }
        return todo
      })
    })
   
  }

  render() {
    return (
      <>
        <TodoHeader desc={this.state.desc}>
          {this.state.title}
        </TodoHeader>
        <TodoInput addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} onCompleted={this.onCompleted}/>
        <Like/>
      </>
    )
  }
}
