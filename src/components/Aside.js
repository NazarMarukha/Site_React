import React, { Component } from 'react';
import AsideProfile from './subComponents/AsideProfile';
import AsideSidebar from './subComponents/AsideSidebar';

export default class Aside extends Component {
    render() {
        
        return (
            <div>
                <div className="aside">
                    <AsideProfile />
                    <AsideSidebar />
                </div>
            </div>
        )
    }
}
