import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Detail() {
  // 使用 state 传递参数
  // 连续解构赋值
  const {state:{id,title,content}} = useLocation()
  
  return (
    <ul>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  )
}
