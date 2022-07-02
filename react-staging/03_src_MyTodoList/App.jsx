import React, { Component } from 'react'

import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'

import './App.css'

export default class App extends Component {

    state = {
        todos: [
            { id: '001', name: '吃饭', done: true },
            { id: '002', name: '睡觉', done: true },
            { id: '003', name: '打代码', done: false },
            { id: '004', name: '逛街', done: false }
        ]
    }

    addTodo = (todoObj) => {
        const todos = this.state.todos
        const newTodos = [todoObj, ...todos]
        this.setState({todos:newTodos})
    }

    updateTodo = (id,done)=>{
        const todos = this.state.todos
        const newTodos = todos.map((todoObj)=>{
            if (todoObj.id === id) return { ...todoObj, done }
            else return todoObj
        })

        this.setState({todos:newTodos})
    }

    deleteTodo = (id)=>{
        const { todos } = this.state
        const newTodos = todos.filter((todoObj)=>{
            return todoObj.id !== id
        })

        this.setState({todos:newTodos})
    }

    handlerCheckAll = (done)=>{
        const { todos } = this.state
        const newTodos = todos.map((todoObj)=>{
            return {...todoObj,done}
        })
        this.setState({todos:newTodos})
    }

    handlerDeleteDoneAll = ()=>{
        const { todos } = this.state
        const newTodos = todos.filter((todoObj)=>{
            return !todoObj.done
        })
        this.setState({todos:newTodos})
    }

    render() {
        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo} />
                    <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
                    <Footer todos={this.state.todos} handlerCheckAll={this.handlerCheckAll} handlerDeleteDoneAll={this.handlerDeleteDoneAll} />
                </div>
            </div>
        )
    }
}
