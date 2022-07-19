import React from 'react';

import {NavLink,Routes,Route} from 'react-router-dom'

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

            {/* 原生html中，靠<a>跳转不同的页面 */}
            {/* <a className="list-group-item" href="./about.html">About</a>
							<a className="list-group-item active" href="./home.html">Home</a> */}

            {/* 在React中靠路由链接实现切换组件--编写路由链接 */}
            <NavLink className="list-group-item" to="/home">Home</NavLink>
            <NavLink className="list-group-item" to="/about">About</NavLink>
          </div>
        </div>
        <div className="col-xs-6">
          <div className="panel">
            <div className="panel-body">
              {/* 注册路由 */}
              <Routes>
                <Route path="/home" element={<Home></Home>} />
                <Route path="/about" element={<About></About>} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
