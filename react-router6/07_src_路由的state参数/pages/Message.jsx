import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Message() {

  const [message] = useState([
    { id: '001', title: '消息1', content: '天气' },
    { id: '002', title: '消息2', content: '凉爽' },
    { id: '003', title: '消息3', content: '炎热' }
  ])
  return (
    <div>
      <ul>
        {
          message.map((m) => {
            return (
              // 路由链接
              <li key={m.id}>
                <Link 
                  to='detail' 
                  state={{
                    id:m.id,
                    title:m.title,
                    content:m.content
                  }}
                >{m.title}</Link>
              </li>
            )
          })
        }
      </ul>
      <Outlet/>
    </div >
  )
}
