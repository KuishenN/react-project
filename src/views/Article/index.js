import React, { Component } from 'react'

import { NavLink as Link, Route} from 'react-router-dom'
// import ArticleDetail  from './ArticleDetail'


export default class Article extends Component {
  render() {
    return (
      <div>
        <Link to="/article/1?from=article">文章详情1</Link>
        <Link to={{
          pathname: '/article/2',
          state: {
            y: 3
          }
        }}>文章详情2</Link>
        {/* <Route path='/article/:id' component={ArticleDetail} /> */}
      </div>
    )
  }
}
