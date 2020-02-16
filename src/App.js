import React, { Component } from 'react'

import withCopyRight from './withCopyRight'
import Another from './Another'

@withCopyRight
class App extends Component {
  render() {
    return (
      <div>
        App
        <Another name="anan" />
      </div>
    )
  }
}
// 实现组件的劫持， 使用高阶函数劫持APP的渲染
export default App