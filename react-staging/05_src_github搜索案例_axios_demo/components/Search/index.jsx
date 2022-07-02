import React, { Component } from 'react'
import axios from 'axios'

export default class Search extends Component {

    search = () => {
        // 解构方法
        const { keyWordElement: { value: keyWord } } = this
        // 发送请求前
        this.props.updateAppState({isFirst:false,isLoading:true})
        // 这里使用 模板 字符串
        axios.get(`http://localhost:3000/api/search/users222?q=${keyWord}`,).then(
            response => {
                this.props.updateAppState({isLoading:false,users:response.data.items})
            },
            error => {
                this.props.updateAppState({isLoading:false,err:error.message})
            }
        )
    }

    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input ref={c => this.keyWordElement = c} type="text" placeholder="enter the name you search" />&nbsp;
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}
