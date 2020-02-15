// createContext是react提供的一个用于跨组件传值的方法
import React, {Component, createContext} from 'react'
import ReactDOM from 'react-dom'

console.log(createContext())

// createContext这个方法的结果是一个对象,里面有两个组件Provider和Consumer
// Provider用与提供数据
// Consumer用于接收(消费)数据

const {
  Provider,
  Consumer: CounterConsumer //结构出来的值重新赋值
 } = createContext()

// 封装一个基本的Provider 因为直接使用Provider， 不方便我们对状态的扩展
class CounterProvider extends Component {
 constructor () {
   super()
   // 这里定义的状态是共享的，任何CounterProvider的后代组件都可以通过通过Consumer接收这些数据
   this.state = {
     count: 200
   }
 }

 incrementCount = () => {
   this.setState({
    count: this.state.count + 1
   })
 }
 decrementCount = () => {
  this.setState({
    count: this.state.count - 1
   })
 }
 render() {
   return (
    //  Provider中包含的所有子组件的后数据都是共享的, 它必须又一个value值，这个值可以传递任何数据，一般是一个对象比较合理
     <Provider value={{
        count: this.state.count,
        incrementCount: this.incrementCount,
        decrementCount: this.decrementCount
      }}>
      {/* {包含的所有后代组件对value中的数据都可以使用} */}
       {this.props.children}
     </Provider>
   )
 }
}

class Counter extends Component {
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

class CounterBtn extends Component {
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

class App extends Component {
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

ReactDOM.render(
<CounterProvider>
  {/* {组件及后代组件数据透视共享提供者的value数据} */}
   <App />
</CounterProvider>, document.getElementById('root') )
