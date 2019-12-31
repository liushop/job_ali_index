import React,{ Component } from 'react'
import './index.css'
import JobList from '../jobList/index';

export default class Work extends Component {
    
    render () {
        return (
            <div className="works-box">
                <div className="works">
                        <div className="job-list">
                            <JobList />
                        </div>
                    <div className="right">
                        <a className="aliyun" href="https://job.alibaba.com/zhaopin/index.htm">
                            <img src="https://img.alicdn.com/tfs/TB1Z7JvoxGYBuNjy0FnXXX5lpXa-358-136.png" alt="img"/>
                        </a>
                        <a className="intelligent" href="https://job.alibaba.com/zhaopin/index.htm">
                            <img src ="https://img.alicdn.com/tfs/TB18tFCCH2pK1RjSZFsXXaNlXXa-240-34.svg" alt="img"/>
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}