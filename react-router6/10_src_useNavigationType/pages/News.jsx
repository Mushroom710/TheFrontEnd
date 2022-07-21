import React from 'react'
import {useNavigationType} from 'react-router-dom'

export default function News() {
  // 返回当前的导航类型（用户是如何来到当前页面的）
  // 返回值：POP、PUSH、REPLACE
  console.log('News',useNavigationType())
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
