import React, { Component } from 'react'

import AquaBlock from '../../images/aqua-block.svg';
import OrangeBlock from '../../images/orange-block.svg';
import GrLine from '../../images/GrLine.svg';
import GrLine2 from '../../images/GrLine2.svg';

export default class ContentBottomCharts extends Component {
    render() {
        return (
            <div>
                <div className="ui two column grid">

                        <div className="column one">
                        <div className="ui grid">
                            <div className="sixteen wide column">
                            <div className="flex1">
                                <span className="text-flex1">SITE VISITS</span>
                                <div className="icons-flex1">
                                <a className="" href=""><i className="redo icon"></i></a>
                                <i className="angle down icon five"></i>
                                <i className="close icon five"></i>
                                </div>
                            </div>
                            <div className="flex2">

                                <div className="over-graph2">

                                <div className="over-row1">
                                    <img src={AquaBlock} alt="" />
                                    <span className="text1-graph2">New Visitors</span>
                                </div>

                                <div className="over-row2">
                                    <img src={OrangeBlock} alt="" />
                                    <span className="text2-graph2">Old Visitors</span>
                                </div>
                                
                                </div>

                                <div className="graph2">
                                <canvas id="barChart" className="chartBar"></canvas>      
                                </div>

                                <div className="under-graph2">
                                <div className="under1">
                                    <img src={GrLine} alt="" className="under1-photo" />
                                    <span className="under1-text1">New Visitor</span>
                                    <span className="under1-text2">12,202</span>
                                </div>
                                <div className="under2">
                                    <img src={GrLine2} alt="" className="under2-photo" />
                                    <span className="under2-text1">Old Visitor</span>
                                    <span className="under2-text2">25,051</span>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>

                        <div className="column two">
                        <div className="ui grid">
                            <div className="sixteen wide column">
                            <div className="flex1">
                                <span className="text-flex1">MARKETING CAMPAIGN</span>
                                <div className="icons-flex1">
                                <a href="" className=""><i className="redo icon"></i></a>
                                <i className="angle down icon six"></i>
                                <i className="close icon six"></i>
                                </div>
                            </div>
                            <div className="flex2">
                                <div className="packaging">
                                <span className="packaging-text1">Packaging</span>
                                <span className="packaging-text2">8%</span>
                                </div>
                                <div className="product-design">
                                <span className="product-design-text1">Product Design</span>
                                <span className="product-design-text2">13%</span>
                                </div>
                                <div className="research">
                                <span className="research-text1">Research</span>
                                <span className="research-text2">62%</span>
                                </div>
                                <div className="information">
                                <span className="information-text1">Information</span>
                                <span className="information-text2">17%</span>
                                </div>
                                <div className="graph1">
                                <canvas id="doughnut-pie"></canvas>
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
