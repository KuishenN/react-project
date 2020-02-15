import React, { Component } from 'react'
import { 
  Route,
  NavLink as Link,
  Redirect, 
  Switch
} from 'react-router-dom'

import {
  Article,
  Home,
  Users,
  ArticleDetail,
  NotFound
} from './views'

export default class App extends Component {
  state = {
    isLogin: false
  }
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/home">首页</Link></li>
          <li><Link to="/article">文章</Link></li>
          <li><Link to="/users">用户</Link></li>
        </ul>
        <Switch>
          <Route render={(routeProps)=> {
            //render函数用于组件传递参数必须是一个函数 带有一个参数 这个参数是包含路由的所有信息 不能和component连用
            return <Home {...routeProps} x={1} />
          }} path="/home" ></Route>
          <Route component={Article} path="/article" exact ></Route>
          <Route component={ArticleDetail} path="/article/:id"></Route>
          <Route render={(routeProps)=> {
            // 用于某页面权限的限制比较好用
            return this.state.isLogin ? <Users {...routeProps} /> : <div>请登录</div>
          }} path="/users"></Route>
          <Route component={NotFound} path="/404"></Route>
          <Redirect to="/home"  from="/" exact />
          <Redirect to="/404" />
        </Switch>
      </div>
    )
  }
}
