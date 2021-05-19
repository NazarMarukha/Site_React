import React, { Component } from 'react'

export default class ContentFirstTable extends Component {
    render() {
        return (
            <div>
                <div className="ui grid first-table">

                        <div className="sixteen wide column first-table">

                            <div className="flex1">
                                <span className="text-flex1">EARNING GRAPH OVERVIEW</span>
                                    <div className="icons-flex1">
                                        <a href=""><i className="redo icon"></i></a>
                                        <i className="angle down icon one"></i>
                                        <i className="close icon one"></i>
                                    </div>
                            </div>
                            <div className="flex2">
                                <div className="graph2">
                                    <canvas id="canvas"></canvas>
                                </div>
                            </div>
                            <div className="flex3">
                                <div className="flex3-canvas1">
                                    <span className="canvas1-numbers">$13,234</span>
                                    <span className="canvas1-text">Revenue</span>
                                </div>
                                <div className="flex3-canvas2">
                                    <span className="canvas2-numbers">2,35,090</span>
                                    <span className="canvas2-text">Order</span>
                                </div>
                                <div className="flex3-canvas3">
                                    <span className="canvas3-numbers">$1,34,900</span>
                                    <span className="canvas3-text">Tax</span>
                                </div>
                                <div className="flex3-canvas4">
                                    <span className="canvas4-numbers">$1,134</span>
                                    <span className="canvas4-text">Shipment</span>
                                </div>
                            </div>

                        </div>
                    </div>
            </div>
        )
    }
}
