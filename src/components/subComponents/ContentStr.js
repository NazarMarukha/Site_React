import React, { Component } from 'react'

export default class ContentStr extends Component {
    render() {
        return (
            <div>
                <div className="stroka">

                    <div className="ui breadcrumb">
                        <div className="active section">Dashboard</div>
                        <div className="divider"> / </div>
                        <a href='home' className="section">Home</a>
                        <div className="divider"> / </div>
                        <a href='all-site-view' className="section">All Site View</a>
                    </div>
                    <span className="stroka-text">Reporting Period</span>
                    <div className="stroka-right-button">
                        <a className="stroka-submenu">Last 30 Day's <i className="caret down icon"></i></a>
                        <ul className="sub-menu">
                            <li className="one"><a href="">Last 7 Day's</a></li>
                            <li className="two"><a href="">Last 15 Day's</a></li>
                            <li className="three"><a href="">Last 40 Day's</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        )
    }
}
