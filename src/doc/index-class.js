import React from 'react'
import {render} from 'react-dom'

// 定义组件的第二种方式,使用类
class App extends React.Component {
  render() {
     console.log(this.props)
    return (
      <>
        <h1>类组件!!!</h1>
        <p>{this.props.desc}</p>
      </>
    )
  }
}

// 类组件实现的基本原理
const app = new App({
   desc: '类组件继承React.Component基础组件1'
}).render()

// React16以前创建类组件的方式
// const App1 = React.createClass({
//    render () {
//       return <h1>小明哥哥说</h1>
//    }
// })


// render是react-dom的一个方法，这个方法通常只会调用一次
render(app, document.getElementById('root'))

