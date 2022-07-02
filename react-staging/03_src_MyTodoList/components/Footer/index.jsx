import React, { Component } from 'react'

import './index.css'

export default class index extends Component {

  handlerCheckAll = (event)=>{
    this.props.handlerCheckAll(event.target.checked)
  }

  handlerDeleteDoneAll = ()=>{
    this.props.handlerDeleteDoneAll()
  }

  render() {
    const { todos } = this.props
    const doneCount = todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)
    const total = todos.length

    return (
        <div className="todo-footer">
            <label>
          <input type="checkbox" checked={doneCount === total && total !== 0 ? true : false} onChange={this.handlerCheckAll} />
            </label>
            <span>
            <span>已完成{ doneCount }</span> / 全部 {total}
            </span>
            <button className="btn btn-danger" onClick={this.handlerDeleteDoneAll}>清除已完成任务</button>
        </div>
    )
  }
}
