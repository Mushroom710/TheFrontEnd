import React, { Component } from 'react'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

import './index.css'

export default class index extends Component {

  //对接收的props进行：类型、必要性的限制
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handlerKeyUp = (event) => {
    const { target, keyCode } = event
    if (keyCode !== 13) return
    if (target.value === '') {
      alert('输入不能为空')
      return
    }
    const todoObj = { id: nanoid(), name: target.value, done: false }
    this.props.addTodo(todoObj)
  }

  render() {
    return (
      <div className="todo-header">
        <input onKeyUp={this.handlerKeyUp} type="text" placeholder="请输入你的任务名称，按回车键确认" />
      </div>
    )
  }
}
