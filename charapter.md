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
     
  
  13. HOC: 高阶组件
       - 函数式组件 (函数柯理化(闭包实现), AOP 函数式编程)， 可以实现组件劫持

  14. 状态管理(redux)

     - MVC
     - redux原理

