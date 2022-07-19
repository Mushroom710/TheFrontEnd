import React,{useState} from 'react';
import {Navigate} from 'react-router-dom'

const About = () => {
  const [sum,setSum] = useState(1)
  return (
    <div>
      <h3>我是About的内容</h3>
      {sum === 2 ? <Navigate to='/home' /> : <h4>当前sum值为：{sum}</h4>}
      <button onClick={()=>setSum(2)}>点我将sum变为2</button>
    </div>
    
  );
}

export default About;
