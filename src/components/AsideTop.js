import React, { Component } from 'react';
import Shape from '../images/Shape.svg';

export default class AsideTop extends Component {
    render() {
        return (
            <div>
                <div className="aside-top">

                <p className="shopper-aside-top">Shoppér</p>
                <p className="bwh-aside-top">Buy with happiness</p>
                <img src={Shape} alt="" className="shape-aside-top" />

                </div>
            </div>
        )
    }
}
