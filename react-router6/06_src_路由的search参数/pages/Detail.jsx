import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Detail() {
  // useSearchParams 是一个数组，需要解构数组拿到数据
  // 第一个元素可以拿数据，第二个可以改变拿到的数据
  const [message,setMessage] = useSearchParams()
  const id = message.get('id')
  const title = message.get('title')
  const content = message.get('content')
  return (
    <ul>
      <li><button onClick={()=> setMessage('id=007&title=kk&content=更改')}>点我更改search参数</button></li>
      <li>消息编号：{id}</li>
      <li>消息标题：{title}</li>
      <li>消息内容：{content}</li>
    </ul>
  )
}
