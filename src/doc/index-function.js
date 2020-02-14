import React, { Component } from 'react'
import ReactDOM from 'react-dom'
// 组件入口, 这种方式可以理解为创建了一个简单的react元素

// const app = <h1>hello world!!!</h1>

// 箭头函数是react创建的方式1
// const createApp = (props) => {
//   return (
//     <div>
//       {/**jsx语法中使用一个花括号编写我们的js代码 */}
//       <h1>Welcome {props.title}</h1>
//       <p>优秀的{props.title}</p>
//     </div>
//   )
// }
  // 函数式组件的实现原理
// const app = createApp({
//   title: 'React 16.8'
// })

const App = (props) => {
  return (
    <div>
      {/**jsx语法中使用一个花括号编写我们的js代码 */}
      <h1 title={props.title}>Welcome {props.title}</h1>
      <p>优秀的{props.title}</p>
      <h1></h1>
    </div>
  )
}

ReactDOM.render(
  <App title="React" /> ,document.getElementById('root'))