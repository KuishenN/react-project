import React, { Component } from 'react'
// 对组件渲染之前做某些事(AOP思想)
const withCopyRight = (YourComponent) => {
  // 使用高阶组件做插入布局 可以固定每个页面的公共部分
  return class WithCopyRight extends Component {
    render() {
      console.log(this.props)
      return (
        <div>
          <YourComponent {...this.props}/>
          <div>&copy; 2019 &emsp; 哥哥出版社, 翻版必究 </div>
        </div>
      )
    }
  }

}

export default withCopyRight

