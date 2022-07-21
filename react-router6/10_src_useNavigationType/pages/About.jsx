import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import computedClassName from '../js';

const About = () => {
  return (
    <div>
      <h3>我是About的内容</h3>
      <div>
        <ul className="nav nav-tabs">
          <li>
            <NavLink className={computedClassName} to="news">News</NavLink>
          </li>
          <li>
            <NavLink className={computedClassName} to="message">Message</NavLink>
          </li>
        </ul>
        {/* 匹配上路由的组件渲染在这 */}
        <Outlet/>
      </div>
    </div>
    
  );
}

export default About;
