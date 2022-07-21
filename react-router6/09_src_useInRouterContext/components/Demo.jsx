import React from 'react'
import {useInRouterContext} from 'react-router-dom'

export default function Demo() {
  // 如果组件在 <Router> 的上下文中呈现，返回 true， 否则返回 false
  console.log('Demo',useInRouterContext())
  return (
    <div>demo</div>
  )
}
