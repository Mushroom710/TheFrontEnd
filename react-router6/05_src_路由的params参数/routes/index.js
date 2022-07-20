import { Navigate } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

//  路由表
const routes = [
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/about',
    element: <About />,
    children: [
      {
        path: 'news',
        element:<News/>
      },
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail/:id/:title/:content',
            element:<Detail/>
          }
        ]
      }
    ]
  },
  {
    path: '/',
    element: <Navigate to='/home' />
  }
] 

export default routes