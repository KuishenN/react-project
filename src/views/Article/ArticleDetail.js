import React, { Component } from 'react'

import { BackHome } from '../../components'

export default class ArticleDetail extends Component {
  render() {
    console.log(this.props) // 使用在Router渲染下的组件都会有路由的一些属性
    return (
      <div>
        文章详情 {this.props.match.params.id}
        <BackHome />
      </div>
    )
  }
}
