// React Hooks是react 16.8 新增的特性，它可以让你在不编写class的情况使用state以及其他特性
import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom'


// 函数式组件渲染
const Counter = () => {
  // useState是一个方法，这个方法的参数就是一个默认值，结果是一个数组,数组的第一个参数是state, 数组的第二个参数是setState
  const [count, setCount] = useState(20)
  useEffect(() => {
    // 相当于类组件的componentDidMount执行一次和 componentDidMount执行修改多次
    console.log('更新了')
    document.title = `当前的数量 ${count}`
  })
  
  return (
    <div>
      {`当前的数量 ${count}`}
      {/* 这里就是useState所生成的方法, 和setState不一样地方在于参数, 这里的参数是一个新的值即可 */}
      <button onClick={()=>setCount(count - 1)}>-</button>
      {/* 获取的是useState的第一个值 */}
        <span>{count}</span>
      <button onClick={()=>setCount(count + 1)}>+</button>
    </div>
  )
}

ReactDOM.render(<Counter />, document.getElementById('root'))
