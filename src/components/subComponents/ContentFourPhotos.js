import React, { Component } from 'react'

import RamkaBlock from '../../images/ramka-block.svg';
import Forma1 from '../../images/Forma1.svg';
import Forma2 from '../../images/Forma2.svg';
import Forma3 from '../../images/Forma3.svg';
import Forma4 from '../../images/Forma4.svg';

export default class ContentFourPhotos extends Component {
    render() {
        return (
            <div>
                <div className="ui four column grid">

                        <div className="column">

                            <div className="ui grid first">
                                <div className="sixteen wide column">
                                    <img src={RamkaBlock} alt="" className="ramka-block" />
                                    <span className="text-block1">Visitors</span>
                                
                                    <div className="first-flex">
                                        <img src={Forma1} alt="" className="forma1-block1" />
                                    </div>
                                    <div className="second-flex">
                                        <i className="long arrow alternate up icon"></i>
                                        <span className="text2-block1">125 K</span>
                                        <span className="text3-block1">(+0.50%)</span>
                                    </div>
                                </div>
					  	    </div>

                        </div>
                        
                        <div className="column">

                            <div className="ui grid second">
                                <div className="sixteen wide column">

                                    <img src={RamkaBlock} alt="" className="ramka-block" />
                                    <span className="text-block2">New Order</span>
                                
                                    <div className="first-flex">
                                        <img src={Forma2} alt="" className="forma2-block2" />
                                    </div>
                                    <div className="second-flex">
                                        <span className="text2-block2">28 K</span>
                                    </div>
                                </div>
					  	    </div>

                        </div>
                        
                        <div className="column">
                            <div className="ui grid third">
                                <div className="sixteen wide column">

                                    <img src={RamkaBlock} alt="" className="ramka-block" />
                                    <span className="text-block3">Sales</span>
                                
                                    <div className="first-flex">
                                        <img src={Forma3} alt="" className="forma3-block3" />
                                    </div>
                                    <div className="second-flex">
                                        <span className="text2-block3">25 K</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                        
                        <div className="column">
                            <div className="ui grid fourth">
                                <div className="sixteen wide column">
                                    
                                    <img src={RamkaBlock} alt="" className="ramka-block" />
                                    <span className="text-block4">Shipping</span>
                                    
                                    <div className="first-flex">
                                        <img src={Forma4} alt="" className="forma4-block4" />
                                    </div>
                                    <div className="second-flex">
                                        <span className="text2-block4">12 K</span>
                                    </div>

                                </div>
					  	    </div>
                        </div>
                    
                    </div>
            </div>
        )
    }
}
