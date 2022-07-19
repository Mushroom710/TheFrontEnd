import React from 'react';

import {NavLink,Routes,Route,Navigate} from 'react-router-dom'

import Header from './components/Header'
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
  // 通过函数自定义高亮效果
  // nav 在 public/index.html 文件中
  function computedClassName({ isActive }) { 
    return isActive ? 'list-group-item nav' : 'list-group-item'
  }
  return (
    <div>
      <div className="row">
        <div className="col-xs-offset-2 col-xs-8">
          <Header />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-2">
          <div className="list-group">
            {/* 路由链接 */}
            <NavLink className={computedClassName} to="/home">Home</NavLink>
            <NavLink className={computedClassName} to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/' element={<Navigate to='/home' />}/>
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
