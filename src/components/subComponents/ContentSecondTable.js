import React, { Component } from 'react'

import Plus from '../../images/plus.svg';
import Minus from '../../images/minus.svg';
import America from '../../images/america.svg';
import UK from '../../images/uk.svg';
import Bangladesh from '../../images/bangladesh.svg';
import Canada from '../../images/canada.svg';
import Russia from '../../images/russia.svg';
import BlueElips from '../../images/blue-elips.svg';
import Graphic1 from '../../images/graphic1.svg';
import Graphic2 from '../../images/graphic2.svg';
import AquaElips from '../../images/aqua-elips.svg';
import OrangeElips from '../../images/orange-elips.svg';
import Graphic3 from '../../images/graphic3.svg';
import GreenElips from '../../images/green-elips.svg';
import Graphic4 from '../../images/graphic4.svg';
import RedElips from '../../images/red-elips.svg';
import Graphic5 from '../../images/graphic5.svg';

export default class ContentSecondTable extends Component {
    render() {
        return (
            <div>
                <div className="ui grid second-table">

                        <div className="ten wide column second-table">
                            <div className="ui grid column-second-table1">
                                <div className="sixteen wide column second-table1">

                                    <div className="flex1">
                                        <span className="text-flex1">TOP SEARCH</span>
                                        <div className="icons-flex1">
                                            <a href="" className=""><i className="redo icon"></i></a>
                                            <i className="angle down icon two"></i>
                                            <i className="close icon two"></i>
                                        </div>
                                    </div>
                                    <div className="flex2">
                                        <div className="map-icons">
                                            <button className="map-icons-plus">
                                                <img src={Plus} alt="" className="plus-image" />
                                            </button>
                                            <button className="map-icons-minus">
                                                <img src={Minus} alt="" className="minus-image" />
                                            </button>
                                        </div>
                                        <div className="map">
                                            <svg id="my_dataviz" width="400" height="300"></svg>
                                        </div>

                                    <div className="aside-map">

                                        <div className="aside-map-america">
                                            <div className="photo">
                                                <img src={America} alt="" className="america" />
                                            </div>
                                            <div className="country-name">
                                                <span className="country-text1">America</span>
                                                <span className="country-text2">46%</span>
                                            </div>
                                        </div>

                                        <div className="aside-map-uk">
                                            <div className="photo">
                                                <img src={UK} alt="" className="uk" />
                                            </div>
                                            <div className="country-name">
                                                <span className="country-text1">U.Kingdom</span>
                                                <span className="country-text2">24%</span>
                                            </div>
                                        </div>

                                        <div className="aside-map-bangladesh">
                                            <div className="photo">
                                                <img src={Bangladesh} alt="" className="bangladesh" />
                                            </div>
                                            <div className="country-name">
                                                <span className="country-text1">Bangladesh</span>
                                                <span className="country-text2">18%</span>
                                            </div>
                                        </div>
                                    
                                        <div className="aside-map-canada">
                                            <div className="photo">
                                                <img src={Canada} alt="" className="canada" />
                                            </div>
                                            <div className="country-name">
                                                <span className="country-text1">Canada</span>
                                                <span className="country-text2">12%</span>
                                            </div>
                                        </div>

                                        <div className="aside-map-russia">
                                            <div className="photo">
                                                <img src={Russia} alt="" className="russia" />
                                            </div>
                                            <div className="country-name">
                                                <span className="country-text1">Russia</span>
                                                <span className="country-text2">10%</span>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                                </div>
                            </div>
                        </div>

                        <div className="six wide column second-table">
                            <div className="ui grid column-second-table2">
                                <div className="sixteen wide column second-table2">

                                    <div className="flex1">
                                        <span className="text-flex1">TRAFFIC SOURCES</span>
                                        <div className="icons-flex1">
                                        
                                            <i className="angle down icon three"></i>
                                            <i className="close icon three"></i>
                                        </div>
                                    </div>

                                    <div className="flex2-rows">
                                        <div className="flex2-row1">

                                                <div className="flex2-row1-photo-1-1">
                                                    <img src={BlueElips} className="row1-blue-elips" alt="" />
                                                    <span className="row1-photo-text">Direct</span>
                                                </div>
                                                <div className="flex2-row1-text">
                                                    <span className="row1-text">1200</span>
                                                </div>
                                                <div className="flex2-row1-photo-1-2">
                                                    <img src={Graphic1} alt="" className="row1-graphic" />
                                                </div>

                                        </div>
                                        <div className="flex2-row2">

                                            <div className="flex2-row2-photo-2-1">
                                                <img src={AquaElips} className="row2-aqua-elips" alt="" />
                                                <span className="row2-photo-text">Refore</span>
                                            </div>
                                            <div className="flex2-row2-text">
                                                <span className="row2-text">1150</span>
                                            </div>
                                            <div className="flex2-row2-photo-2-2">
                                                <img src={Graphic2} alt="" className="row2-graphic" />
                                            </div>

                                        </div>
                                        <div className="flex2-row3">
                                            
                                            <div className="flex2-row3-photo-3-1">
                                                <img src={OrangeElips} className="row3-orange-elips" alt="" />
                                                <span className="row3-photo-text">Social</span>
                                            </div>
                                            <div className="flex2-row3-text">
                                                <span className="row3-text">980</span>
                                            </div>
                                            <div className="flex2-row3-photo-3-2">
                                                <img src={Graphic3} alt="" className="row3-graphic" />
                                            </div>

                                        </div>
                                        <div className="flex2-row4">
                                            
                                            <div className="flex2-row4-photo-4-1">
                                                <img src={GreenElips} className="row4-green-elips" alt="" />
                                                <span className="row4-photo-text">Search</span>
                                            </div>
                                            <div className="flex2-row4-text">
                                                <span className="row4-text">720</span>
                                            </div>
                                            <div className="flex2-row4-photo-4-2">
                                                <img src={Graphic4} alt="" className="row4-graphic" />
                                            </div>

                                        </div>
                                        <div className="flex2-row5">
                                            
                                            <div className="flex2-row5-photo-5-1">
                                                <img src={RedElips} className="row5-red-elips" alt="" />
                                                <span className="row5-photo-text">Internal</span>
                                            </div>
                                            <div className="flex2-row5-text">
                                                <span className="row5-text">600</span>
                                            </div>
                                            <div className="flex2-row5-photo-5-2">
                                                <img src={Graphic5} alt="" className="row5-graphic" />
                                            </div>

                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
            </div>
        )
    }
}
