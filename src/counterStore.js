import React, { Component, createContext } from 'react'


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

export {
  CounterProvider,
  CounterConsumer,
}