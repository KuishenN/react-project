## react学习章节

 1. 类组件和函数式组件

 2. jsx原理

 3. 组件中的样式 `classnames styled-components`
   - classnames: 使用类名动态组件样式的
   - styled-components: 设置组件的样式
   
 4. 组件中文件组织管理
    - src
      - index.js app.js components
        - index.js + 
          - TodoHeader>index.js

  5. 组件外部数据挂载`props` (受控组件)
      - `prop-types` 检验数据函数组件和类组件


  6. 内部组件数据 `state` (非受控组件)


  7. props向下传递的技巧 `设置dangerouslySetInnerHTML`
     
  8. `setState`设置变量的两种方式

  9. 事件
    - bind的形式
    - 子组件向父组件传递数据的形式, `父组件生命数据定义函数，通过props在子组件真正的执行`
  10. ref及键盘事件, 完成todoList


  11. 声明周期
     - 函数式组件没有生命周期
       - 挂载 `render constructor(bind state)`
         -  获取状态数据返回对象`getDerivedStateFromProps`
         -  获取真实的DOM: `componentDidMount(获取ajax), 为了尽快渲染页面`

       - 触发组件的更新 `props发生变化 state发生变化 forceUpdate`
       - 卸载 `componentWillUnmount`
     - component和PureComponent的区别
       - `PureComponent` 在生命周期shouldComponentUpdate中做了一层浅比较

  12. 跨组件通信 `context` 适用于小型项目
     
  
  13. HOC: 高阶组件(Hight-Order Component)
       - 函数式组件 (函数柯理化(闭包实现), AOP 函数式编程)， 可以实现组件劫持
       - 使用装饰器 对webpack进行扩展 `react-app-rewired`, 在package.json中scripts配置'react-app-rewired'
       - 使用装饰器默认` customize-cra`, 然后使用customize-cra中的override方法进行配置, '@babel/plugin-proposal-decorators'
       - Vue更加官方化(vue的配置都是webpack的官方API), React更加社区化(React的使用的插件更多的是社区提供的)

  14. 状态管理(redux)

     - MVC
     - redux原理
  
  15 路由(react-router)

    - Router 只有一个 HashRouter BrowserRouter
    - Route 单个组件路由表  exact render函数渲染(主要用于组件传递参数)
       - 路由传参的方式 1. query(?拼接路径)  2. 动态理由 match.params  3 state 隐式传参 在location.search
          - 埋点方式 1. ajax 2. img地址带参数  3.sendBeacon 4. 路由 state传递参数
         
    - Link Route的路径匹配
    - redirect 重定向
    - Switch 路由匹配
    - withRouter 只用使用Route渲染的组件才具有路由的一些API, 其他的组件我们使用
    - withRouter高阶组件来渲染

  16. ReactHooks源码实现

  17. React源码实现

  18. ReactRouter源码实现

  19. Redux实现


