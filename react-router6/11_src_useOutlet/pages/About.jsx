import React from 'react';
import { NavLink, Outlet ,useOutlet} from 'react-router-dom';

import computedClassName from '../js';

const About = () => {
  // 用来呈现当前组件中渲染的嵌套路由
  // 嵌套路由没有挂载，返回 null
  // 否则输出嵌套的路由对象
  console.log(useOutlet())

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
