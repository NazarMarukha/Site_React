import React, { Component } from 'react'
import Gauge from '../../images/gauge.svg';
import ButtonDashboardLayouts from '../../images/button-dashboard-layouts-pages.svg';
import Monitor from '../../images/monitor.svg';
import Folder from '../../images/folder.svg';
import Invoice from '../../images/Invoice.svg';
import Snippets from '../../images/snippets.svg';
import UiWidgets from '../../images/ui-widgets.svg';
import Pencil from '../../images/pencil.svg';
import Components from '../../images/componnets.svg';
import Plugin from '../../images/plugin.svg';
import Email from '../../images/email.svg';
import openPoints from '../../jsSrc/drop-down.js';
// import NewPage from '../NewPage.js';
// import ContentMain from '../ContentMain.js';
// import { Route } from 'react-router-dom';
export default class AsideSidebar extends Component {
    render() {
        return (
            <div>
                <div id="sidebar">

                    {/* done */}<div className="item">

                        <div className="over_item1">
                            <div className="name">
                                <div className="general-text">
                                    GENERAL
                                    </div>
                            </div>
                        </div>

                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item" onClick={openPoints}>
                            <div className="name-border"></div>
                            <div className="name">
                                <div className="image">
                                    <img src={Gauge} alt="" className="dashboard-gauge" />
                                </div>
                                <div className="dashboard-text">
                                    Dashboard
                                    </div>
                            </div>
                            <div className="arrow">
                                <img src={ButtonDashboardLayouts} alt="" className="foto-button" />
                            </div>
                        </div>
                        
                        <div className="under_item">
                            <div className="subitem">
                                <a href='/dashboard1' className="a-sideLink">
                                    <i className="circle outline icon one"></i>
                                    <p className="subitem-text">Dashboard1</p>
                                </a>
                            </div>

                            <div className="subitem">
                                <a href='/dashboard2' className="a-sideLink">
                                    <i className="circle outline icon two"></i>
                                    <p className="subitem-text">Dashboard2</p>
                                </a>
                            </div>
                            <div className="subitem">
                                <a href='/comming-soon' className="a-sideLink">
                                    <i className="circle outline icon three"></i>
                                    <p className="subitem-text">Comming Soon</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item" onClick={openPoints}>
                            <div className="name-border"></div>
                            <div className="name">
                                <div className="image">
                                    <img src={Monitor} alt="" className="layouts-monitor" />
                                </div>
                                <div className="layouts-text">
                                    Layouts
                                    </div>
                            </div>
                            <div className="arrow">
                                <img src={ButtonDashboardLayouts} alt="" className="foto-button" />
                            </div>
                        </div>

                        <div className="under_item">
                            <div className="subitem">
                                <a href='/dashboard1' className="a-sideLink">
                                    <i className="circle outline icon one"></i>
                                    <p className="subitem-text">Dashboard1</p>
                                </a>
                            </div>
                            <div className="subitem">
                                <a href='/dashboard2' className="a-sideLink">
                                    <i className="circle outline icon two"></i>
                                    <p className="subitem-text">Dashboard2</p>
                                </a>
                            </div>
                            <div className="subitem">
                                <a href='/comming-soon' className="a-sideLink">
                                    <i className="circle outline icon three"></i>
                                    <p className="subitem-text">Comming Soon</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item" onClick={openPoints}>
                            <div className="name-border"></div>
                            <div className="name">
                                <div className="image">
                                    <img src={Folder} alt="" className="pages-folder" />
                                </div>
                                <div className="pages-text">
                                    Pages
                                    </div>
                            </div>
                            <div className="arrow">
                                <img src={ButtonDashboardLayouts} alt="" className="foto-button" />
                            </div>
                        </div>

                        <div className="under_item">
                            <div className="subitem">
                                <a href='/dashboard1' className="a-sideLink">
                                    <i className="circle outline icon one"></i>
                                    <p className="subitem-text">Dashboard1</p>
                                </a>
                            </div>
                            <div className="subitem">
                                <a href='/dashboard2' className="a-sideLink">
                                    <i className="circle outline icon two"></i>
                                    <p className="subitem-text">Dashboard2</p>
                                </a>
                            </div>
                            <div className="subitem">
                                <a href='/comming-soon' className="a-sideLink">
                                    <i className="circle outline icon three"></i>
                                    <p className="subitem-text">Comming Soon</p>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item2">
                            <div className="name">
                                <div className="elements-text">
                                    ELEMENTS
                                    </div>
                            </div>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item next">
                            <a href='/invoice' className="a-sideLink">
                                <div className="name-border"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={Invoice} alt="" className="invoice-foto" />
                                    </div>
                                    <div className="invoice-text">
                                        Invoice
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item next">
                            <a href='/snippets' className="a-sideLink">
                                <div className="name-border"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={Snippets} alt="" className="pages-folder" />
                                    </div>
                                    <div className="snippets-text">
                                        Snippets
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item next">
                            <a href='/ui-widgets' className="a-sideLink">
                                <div className="name-border"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={UiWidgets} alt="" className="pages-folder" />
                                    </div>
                                    <div className="ui-widgets-text">
                                        UI Widgets
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item next">
                            <a href='/forms' className="a-sideLink">
                                <div className="name-border"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={Pencil} alt="" className="pages-folder" />
                                    </div>
                                    <div className="forms-text">
                                        Forms
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item next">
                            <a href='/components' className="a-sideLink">
                                <div className="name-border"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={Components} alt="" className="pages-folder" />
                                    </div>
                                    <div className="componnents-text">
                                        Components
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item next">
                            <a href='/plugin' className="a-sideLink">
                                <div className="name-border"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={Plugin} alt="" className="pages-folder" />
                                    </div>
                                    <div className="plugin-text">
                                        Plugin
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* done */}<div className="item">
                        <div className="over_item next">
                            <a href='/email' className="a-sideLink">
                                <div className="name-border"></div>
                                <div className="name">
                                    <div className="image">
                                        <img src={Email} alt="" className="pages-folder" />
                                    </div>
                                    <div className="email-text">
                                        Email
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>

                </div>{/* sidebar */}

            </div>
        )
    }
}
