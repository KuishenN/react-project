import React, { Component } from 'react'
import { withRouter} from 'react-router-dom'

 class BackHome extends Component {
  goHome = () => {
    this.props.history.push({
      pathname: '/home',
      state: {
        a: 1
      }
    })
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.goHome}>返回首页</button>
      </div>
    )
  }
}
export default withRouter(BackHome) // 使用高阶函数withRouter解决