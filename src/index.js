// createContext是react提供的一个用于跨组件传值的方法
import React from 'react'
import ReactDOM from 'react-dom'

import { CounterProvider } from './counterStore'
import App from './App'
// createContext这个方法的结果是一个对象,里面有两个组件Provider和Consumer
// Provider用与提供数据
// Consumer用于接收(消费)数据


ReactDOM.render(
<CounterProvider>
  {/* {组件及后代组件数据透视共享提供者的value数据} */}
   <App />
</CounterProvider>, document.getElementById('root') )
