import React, { Component } from 'react'
import Typa8 from '../../images/typa8.svg';
import Dzvinok from '../../images/dzvinok.svg';
import Typa3 from '../../images/typa3.svg';
import Po4ta from '../../images/po4ta.svg';
import Rectangle from '../../images/Rectangle.svg';
import Icon from '../../images/icon.svg';
import Trump from '../../images/DonaldTrump.svg';

export default class RightNav extends Component {
    render() {
        return (
            <div>
                <div className="right-nav">

                    <div className="right-nav-foto1">
                        <img src={Typa8} alt="" className="typa8-first" />
                        <a className="call" ><img src={Dzvinok} alt="" className="foto-nav1" /></a>
                        <ul className="call-submenu">
                            <li className="one"><span>You have 8 Reminders</span></li>
                            <li className="two">
                                <div className="call-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">1 hours ago</span>
                                    <span className="block-text-three">Visited your profile.</span>
                                </div>
                            </li>
                            <li className="three">
                                <div className="call-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">3 hours ago</span>
                                    <span className="block-text-three">Liked your photo.</span>
                                </div>
                            </li>
                            <li className="four">
                                <div className="call-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">4 hours ago</span>
                                    <span className="block-text-three">Sent you video.</span>
                                </div>
                            </li>
                            <li className="five">
                                <a className="call-five-text"><span>Show All Reminders</span></a>
                                <ul className="call-submenu-two">
                                    <li className="two">
                                        <div className="call-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">1 hours ago</span>
                                            <span className="block-text-three">Visited your profile.</span>
                                        </div>
                                    </li>
                                    <li className="three">
                                        <div className="call-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">3 hours ago</span>
                                            <span className="block-text-three">Liked your photo.</span>
                                        </div>
                                    </li>
                                    <li className="four">
                                        <div className="call-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">7 hours ago</span>
                                            <span className="block-text-three">Liked your post.</span>
                                        </div>
                                    </li>
                                    <li className="five">
                                        <div className="call-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">7 hours ago</span>
                                            <span className="block-text-three">Retweeted your post.</span>
                                        </div>
                                    </li>
                                    <li className="six">
                                        <div className="call-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">9 hours ago</span>
                                            <span className="block-text-three">Is online now.</span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="right-nav-foto2"> 
                        <img src={Typa3} alt="" className="typa3-first" />
                        <a className="mail"><img src={Po4ta} alt="" className="foto-nav2" /></a>
                        <ul className="mail-submenu">
                            <li className="one"><span>You have 3 Messages</span></li>
                            <li className="two">
                                <div className="mail-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">2 hours ago</span>
                                    <span className="block-text-three">Lorem ipsum dolor sit amet.</span>
                                </div>
                            </li>
                            <li className="three">
                                <div className="mail-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">2 hours ago</span>
                                    <span className="block-text-three">Lorem ipsum dolor sit amet.</span>
                                </div>
                            </li>
                            <li className="four">
                                <div className="mail-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">2 hours ago</span>
                                    <span className="block-text-three">Lorem ipsum dolor sit amet.</span>
                                </div>
                            </li>
                            <li className="five">
                                <a className="mail-five-text"><span>View All Messages</span></a>
                            </li>
                        </ul>
                        <ul className="mail-submenu-two">
                            <li className="no-messages"><span>You don't have any messages</span></li>
                        </ul>
                    </div>

                    <div className="right-nav-foto3">
                        <img src={Typa8} alt="" className="typa8-second" />
                        <a className="rectangle"><img src={Rectangle} alt="" className="foto-nav3" /></a>
                        <ul className="rectangle-submenu">
                            <li className="one"><span>You have 8 Reminders</span></li>
                            <li className="two">
                                <div className="rectangle-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">1 hours ago</span>
                                    <span className="block-text-three">Visited your profile.</span>
                                </div>
                            </li>
                            <li className="three">
                                <div className="rectangle-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">3 hours ago</span>
                                    <span className="block-text-three">Liked your photo.</span>
                                </div>
                            </li>
                            <li className="four">
                                <div className="rectangle-block">
                                    <div className="foto-block">
                                        <img src={Trump} alt="" className="foto-trump" />
                                    </div>
                                    <span className="block-text-one">Donald Trump</span>
                                    <span className="block-text-two">4 hours ago</span>
                                    <span className="block-text-three">Sent you video.</span>
                                </div>
                            </li>
                            <li className="five">
                                <a className="rectangle-five-text"><span>Show All Reminders</span></a>
                                <ul className="rectangle-submenu-two">
                                    <li className="two">
                                        <div className="rectangle-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">1 hours ago</span>
                                            <span className="block-text-three">Visited your profile.</span>
                                        </div>
                                    </li>
                                    <li className="three">
                                        <div className="rectangle-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">3 hours ago</span>
                                            <span className="block-text-three">Liked your photo.</span>
                                        </div>
                                    </li>
                                    <li className="four">
                                        <div className="rectangle-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">7 hours ago</span>
                                            <span className="block-text-three">Liked your post.</span>
                                        </div>
                                    </li>
                                    <li className="five">
                                        <div className="rectangle-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">7 hours ago</span>
                                            <span className="block-text-three">Retweeted your post.</span>
                                        </div>
                                    </li>
                                    <li className="six">
                                        <div className="rectangle-block">
                                            <div className="foto-block">
                                                <img src={Trump} alt="" className="foto-trump" />
                                            </div>
                                            <span className="block-text-one">Donald Trump</span>
                                            <span className="block-text-two">9 hours ago</span>
                                            <span className="block-text-three">Is online now.</span>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>

                    <div className="right-nav-men">
                        <div className="foto-men"></div>
                        <p className="text-men">Jisan</p>
                        <a className="sub-men" ><img src={Icon} alt="" className="icon-foto" /></a>
                        <ul className="sub-men-menu">
                            <li className="one"><a href="">+ Add new user</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
