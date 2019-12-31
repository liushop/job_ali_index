import React,{ Component } from 'react'
import './index.css'

export default class Main extends Component {
    state = {
        hotSearch: [
            {
                id: 1,
                keyword: 'JAVA'
            },
            {
                id: 2,
                keyword: 'IOS'
            },
            {
                id: 3,
                keyword: '数据'
            },
            {
                id: 4,
                keyword: '安全'
            },
            {
                id: 5,
                keyword: '搜索'
            },
            {
                id: 6,
                keyword: '算法'
            },
            {
                id: 7,
                keyword: '运营'
            },
            {
                id: 8,
                keyword: '视觉'
            },
            {
                id: 9,
                keyword: '交互'
            },
            {
                id: 10,
                keyword: '前端'
            }
        ]
    }
    render () {
        return (
            <div className="main">
                <img src="https://img.alicdn.com/tfs/TB14TEEm7CWBuNjy0FaXXXUlXXa-1440-478.png" alt="img" />
                <div className="null-box"></div>
                <div className="form">
                    <form>
                        <div className="text">
                            <p>If not now, when?</p>
                            <p>If not me, who?</p>
                            <p>此时此刻，非我莫属！</p>
                            <div className="search">
                                <div className = "search-ipt-bg"></div>
                                <input type="text" className="search-ipt" placeholder="请输入职位关键词" />
                                <button className="search-btn">搜索</button>
                            </div>
                            <div className="hot">
                                热门搜索： 
                                {this.state.hotSearch.map((item)=>{
                                    return (
                                        <a key={item.id} href="https://job.alibaba.com/zhaopin/index.htm">{item.keyword}</a>
                                    )
                                })}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}