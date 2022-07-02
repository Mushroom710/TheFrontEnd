import React, { Component } from 'react'

import './index.css'

export default class index extends Component {

    state = {mouse:false}//标记鼠标移入移出状态

    handlerMouse = (flag)=>{
        return ()=>{
            this.setState({mouse:flag})
        }
    }

    handlerUpdate = (id)=>{
        return (event)=>{
            this.props.updateTodo(id,event.target.checked)
        }
    }

    handlerDelete = (id)=>{
        if (window.confirm('确定删除吗？')) {
            this.props.deleteTodo(id)
        }
    }

    render() {
        const {id, name, done } = this.props
        const {mouse} = this.state
        return (
            <li style={{backgroundColor:mouse ? '#ddd' : 'white'}} onMouseEnter={this.handlerMouse(true)} onMouseLeave={this.handlerMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handlerUpdate(id)} />
                    <span>{name}</span>
                </label>
                <button onClick = {() => this.handlerDelete(id)} className="btn btn-danger" style={{ display: mouse ? 'block' : 'none' }}>删除</button>
            </li>
        )
    }
}
