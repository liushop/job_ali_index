import React, { Component } from 'react'
import './index.css'
import Header from '../../components/common/header'
import Footer from '../../components/common/footer'
import Main from '../../components/index/main'
import Work from '../../components/index/works'

export default class Index extends Component {
    render() {
        return (
            <div>
                <Header />
                <Main />
                <Work />
                <Footer />
            </div>
        )
    }
}