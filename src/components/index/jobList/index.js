import React, { Component } from 'react'
import './index.css'

let TimeId = null;

export default class JobList extends Component {
    state = {
        list: []
    };
    render() {
        return (
            <div className = "newPosition-list">
                <div className = 'more-positon'>
                    <span>最新职位</span>
                    <span className ="more">更多</span>
                </div>
                <ul className="position-list" onMouseEnter = {() => {this.Enter()}} onMouseLeave = {() => {this.Leave()}} >
                    {this.state.list.map((item, index) => {
                        return (
                            <li key={index}>
                                <span className = "position" title={item.positionName}>{item.positionName}</span>
                                <em className = "time">{item.time}</em>
                                <em className = "city">{item.city}</em>
                            </li>
                        ) 
                    })}
                </ul>
            </div>
        );
    }
    componentDidMount(){
        let obj = {
            'positionName':'阿里巴巴-前端',
            'time':'6分钟前',
            'city':'杭州'
        }
        let arr = [];
        for(let i = 0 ; i < 20 ; i ++){
            obj.aaa = i;
            arr.push(obj)
        }
        this.setState({
            list: arr
        })
        this.scroll(32);
    }
    scroll (time, top = 50) {
        let that = this;
        let UL = document.querySelector('.position-list');
        TimeId = setInterval(move, time);
        function move () {
            if ( top < -700) {
                clearInterval(TimeId);
                top = 50;
                that.scroll(32);
            } else {
                top --;
                UL.style.top = top + 'px';
            }
        }
    }
    Enter(){
        clearInterval(TimeId);
    }
    Leave(){
        let UL = document.querySelector('.position-list') ;
        let top = parseInt(UL.style.top);
        this.scroll(32, top)
    }
}