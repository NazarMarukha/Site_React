import React, { Component } from 'react'
import LeftNav from './subComponents/LeftNav.js';
import RightNav from './subComponents/RightNav.js';


export default class TopNav extends Component {
    render() {
        return (
            <div>
                <div className="top-nav">
                    <LeftNav />
                    <RightNav />
                </div>
            </div>
        )
    }
}
