import React, { useState } from 'react'
import { Link, Outlet,useNavigate } from 'react-router-dom'

export default function Message() {
  const [message] = useState([
    { id: '001', title: '消息1', content: '天气' },
    { id: '002', title: '消息2', content: '凉爽' },
    { id: '003', title: '消息3', content: '炎热' }
  ])
  // 编程式路由导航
  const navigate = useNavigate()
  // 只能写 state 参数
  function showDetail(m) {
    navigate('detail', {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content:m.content
      }
    }
    )
  }
  
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
                <button onClick={()=>showDetail(m)}>查看详情</button>
              </li>
            )
          })
        }
      </ul>
      <Outlet/>
    </div >
  )
}
