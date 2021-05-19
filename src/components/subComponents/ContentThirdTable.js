import React, { Component } from 'react'

import Status1 from '../../images/status1.svg';
import Status2 from '../../images/status2.svg';
import Status4 from '../../images/status4.svg';
import Chelik1 from '../../images/4elik1.svg';
import Chelik2 from '../../images/4elik2.svg';
import Chelik3 from '../../images/4elik3.svg';
import Chelik4 from '../../images/4elik4.svg';

export default class ContentThirdTable extends Component {
    render() {
        return (
            <div>
                <div className="ui grid third-table">

            <div className="sixteen wide column third-table">
              <div className="flex1">
                  <span className="text-flex1">RECENT ORDER</span>
                  <div className="icons-flex1">
                    <i className="angle down icon four"></i>
                    <i className="close icon four"></i>
                  </div>
              </div>
              <div className="flex2">
                 <table className="table-content">
                   
                     <tr className="tr-content">
                      <th className="th-content">IMAGE</th>
                      <th className="th-content">PRODUCT NAME</th>
                      <th className="th-content">PRODUCT CODE</th>
                      <th className="th-content">STATUS</th>
                      <th className="th-content">PURCHASED IN</th>
                      <th className="th-content">PRICE</th>
                      <th className="th-content">QUANTITY</th>
                      <th className="th-content">TRACKING NO#</th>
                    </tr>
                   
                     <tr>
                       <td className="td-4eliksu"><img src={Chelik1} alt="" /></td>
                       <td className="td-product-name">Leisure Suit Casual</td>
                       <td className="td-product-code">3BSD59</td>
                       <td>
                        <img src={Status1} className="td-image1" alt="" />
                        <span className="td-status1">Paid</span>
                       </td>
                       <td className="td-purchased-on">27 Sep 2015</td>
                       <td className="td-price">$99.00</td>
                       <td className="td-quantity">2</td>
                       <td className="td-tracking-no">#BG6R9853LP</td>
                     </tr>
                     <tr>
                       <td className="td-4eliksu"><img src={Chelik2} alt="" /></td>
                       <td className="td-product-name">Cotton Fleece Casual</td>
                       <td className="td-product-code">3BH87G</td>
                       <td>
                        <img src={Status2} className="td-image2" alt="" />
                        <span className="td-status2">Pending</span>
                       </td>
                       <td className="td-purchased-on">08 Sep 2015</td>
                       <td className="td-price">$99.00</td>
                       <td className="td-quantity">2</td>
                       <td className="td-tracking-no">#368QRM83B</td>
                     </tr>
                     <tr>
                       <td className="td-4eliksu"><img src={Chelik3} alt="" /></td>
                       <td className="td-product-name">Formal Slim Fit Casual</td>
                       <td className="td-product-code">4D3GHT</td>
                       <td>
                        <img src={Status1} className="td-image3" alt="" />
                        <span className="td-status1">Paid</span>
                      </td>
                       <td className="td-purchased-on">25 Aug 2015</td>
                       <td className="td-price">$99.00</td>
                       <td className="td-quantity">2</td>
                       <td className="td-tracking-no">#AXZ6F58T3V</td>
                     </tr>
                     <tr>
                       <td className="td-4eliksu"><img src={Chelik4} alt="" /></td>
                       <td className="td-product-name">Velvet Patchwork Casual</td>
                       <td className="td-product-code">5D4H3G</td>
                       <td>
                        <img src={Status4} className="td-image4" alt="" />
                        <span className="td-status4">Failed</span>
                      </td>
                       <td className="td-purchased-on">27 Sep 2015</td>
                       <td className="td-price">$99.00</td>
                       <td className="td-quantity">2</td>
                       <td className="td-tracking-no">#SD89HK561</td>
                     </tr>
                 </table>
              </div>
            </div>

          </div>
            </div>
        )
    }
}
