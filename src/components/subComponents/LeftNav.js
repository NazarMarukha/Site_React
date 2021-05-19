import React, { Component } from 'react'
import Search from '../../images/search.svg';
import MenuNav from '../../images/menu-nav.svg';

export default class LeftNav extends Component {
    render() {
        return (
            <div>
                <div className="left-nav">

                        <div className="search">
                            <button id="button" className="search-button"><img src={Search} alt="" className="left-nav-search" /></button> 
                        </div>
                        <div id="fn" className="search-input" hidden>
                            <input type="text" id="text"></input>         
                        </div>
                        <div className="button-menu">
                            <button className="menu-nav openButton"><img src={MenuNav} alt="" /></button>
                        </div>

                    </div>
            </div>
        )
    }
}
