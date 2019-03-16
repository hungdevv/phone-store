import React, { Component } from 'react'

export default class CartResult extends Component {
  showTotalAmount = (cart) => {
    var result = 0;
    for(var i = 0; i < cart.length; i++) {
      result += cart[i].product.price * cart[i].quantity;
    }
    return result;
  }
  render() {
    var {cart} = this.props;
    console.log(cart);
    return (
        <tr>
        <td colSpan={3} />
        <td>
          <h4>
            <strong>Tổng Tiền</strong>
          </h4>
        </td>
        <td>
          <h4>
            <strong>{this.showTotalAmount(cart)}$</strong>
          </h4>
        </td>
        <td colSpan={3}>
          <button type="button" className="btn btn-primary waves-effect waves-light">Complete purchase
            <i className="fa fa-angle-right right" />
          </button>
        </td>
      </tr>
    )
  }
}
