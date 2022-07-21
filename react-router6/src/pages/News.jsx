import React from 'react'
import {useResolvedPath} from 'react-router-dom'
export default function News() {
  // 给定一个 URL 值，解析其中的 path、search、hash 值
  console.log(useResolvedPath('/user?id=001&name=zhangsan'))
  return (
    <ul>
      <li>news001</li>
      <li>news002</li>
      <li>news003</li>
    </ul>
  )
}
