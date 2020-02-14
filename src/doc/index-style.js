import React from 'react'
import ReactDOM from 'react-dom'

import classname from 'classnames'
import styled from "styled-components";

class App extends React.Component {
   render () {
      console.log(this.props)
      const style = {color: 'aqua'}
      // 使用styled添加style样式
      const Title = styled.h1` 
        color: red
      `
      return (
         <div style={style}>
            <Title>元素的样式</Title>
            <ol>
               <li>{this.props.desc}</li>
               <li className={classname('a', {'b': true, 'c': false})}>使用classnames添加我们的样式</li>
               <li>使用styled-components添加我们的样式</li>
           </ol>
         </div>
        
      )
   }
}

ReactDOM.render(<App desc="元素的样式为题" />, document.getElementById('root'))