import React from 'react';

import {NavLink,Routes,Route,Navigate} from 'react-router-dom'

import Header from './components/Header'
import About from './pages/About';
import Home from './pages/Home';

const App = () => {
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
            <NavLink className="list-group-item" to="/home">Home</NavLink>
            <NavLink className="list-group-item" to="/about">About</NavLink>
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
