import React, { Component } from 'react'

import withCopyRight  from './withCopyRight'
@withCopyRight
class Another extends Component {
  render() {
    return (
      <div>
        下面的是another组件中渲染的部分 {this.props.name}
      </div>
    )
  }
}

export default Another
