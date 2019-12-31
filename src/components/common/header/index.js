import React,{ Component } from 'react'
import './index.css'

export default class Header extends Component {
    state = {
        menuList: [
            {
                id: 1,
                url: '',
                text: '首 页'
            },
            {
                id: 2,
                url: '',
                text: '社会招聘'
            },
            {
                id: 3,
                url: '',
                text: '校园招聘'
            },
            {
                id: 4,
                url: '',
                text: '了解阿里'
            },
            {
                id: 5,
                url: '',
                text: '个人中心'
            }
        ],
        menuValue: 1
    }
    render () {
        return (
            <header>
                <div className="head">
                    <div className="head-inner">
                        <a className="logo" href="https://job.alibaba.com/zhaopin/index.htm">
                            <img src ="https://img.alicdn.com/tfs/TB1Zv8_lxSYBuNjSspjXXX73VXa-390-63.png" alt="img" />
                        </a>
                        <i className="line-y">|</i>
                        <i className="dec">社招官网</i>
                        <ul>
                            {this.state.menuList.map((item)=>{
                                return (
                                    <li key={item.id}>
                                        <a className={["nav", this.state.menuValue === item.id ? "active" : ''].join(' ')} href="https://job.alibaba.com/zhaopin/index.htm">{item.text}</a>
                                    </li>
                                )
                            })}
                            <div className="login">                               
						        欢迎来到阿里巴巴集团招聘！
                                <a href="https://job.alibaba.com/zhaopin/index.htm">登录</a>
                                &nbsp;|&nbsp;
                                <a href="https://job.alibaba.com/zhaopin/index.htm">注册</a>
                            </div>
                        </ul>
                    </div>
                </div>
            </header>    
        )
    }
}