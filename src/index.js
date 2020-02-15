import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route} from 'react-router-dom'


import App from './App'



ReactDOM.render(
  <Router>
    {/* {后代组件中用路由中除了Router以外的组件} */}
    <Route component={App}/>
  </Router>, document.getElementById('root'))