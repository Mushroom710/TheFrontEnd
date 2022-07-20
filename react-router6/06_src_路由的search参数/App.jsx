import React from 'react';

import {NavLink,useRoutes} from 'react-router-dom'

import Header from './components/Header'
import routes from './routes'
import computedClassName from './js';

const App = () => {
  // 根据路由表生成对应的路由规则
  const element = useRoutes(routes)
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
              {/* 直接根据路由表生成对应的路由规则 */}
              {element}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
