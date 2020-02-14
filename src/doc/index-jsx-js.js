import React from 'react'
import ReactDOM from 'react-dom'


// 组件的嵌套  组件的类型是函数或者类
// const Header = () => <h1>类组件</h1>

// 虚拟DOM构建,
// const appVDom = {
//    tag: 'div',
//    attrs: {
//       className: 'app',
//       id: 'appRoot'
//    },
//    children: [
//       {
//          tag: 'h1',
//          attrs: {
//             className: 'title'
//          },
//          children: ['JSX原理']
//       },
//       {
//          tag: 'p',
//          attrs: null,
//          children: ['类组件是react的基础组件']
//       }
//    ]
// }
// 使用类的方式编写jsx语法 这种方式不能直接运行于浏览器，需要进行为可执行的js
// class App extends React.Component {
//    render() {
//       return (
//          <div className="app" id="appRoot">
//             <h1 className="title">JSX原理</h1>
//             <p>类组件是react的基础组件</p>
//          </div>
//       )
//    }
// }

// 编译成js执行的原理: 使用React.createElement的方法，进行编译成可执行的js代码
/**
 * 第一个参数：标签元素
 * 第二个参数: 标签元素的属性
 * 剩余元素都是子元素
 */
class App  extends React.Component {
   render() {
      return (
         React.createElement(
            'div',
            {
               className: 'app',
               id: 'appRoot1'
            },
            React.createElement(
               'h1',
               {
                  className: 'title'
               },
               'JSX原理'
            ),
            React.createElement(
               'p',
               null,
               '类组件是react的基础组件'
            )
         )
      )
   }

}

// react jsx编译成js的编译过程

ReactDOM.render(<App />, document.getElementById('root'))