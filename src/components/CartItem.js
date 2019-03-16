import React, { Component } from 'react';
import * as Message from './../constants/Message';

export default class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: 1
    }
  }
  
  onUpdateQuantity = (product, quantity) => {
    var {onUpdateProduct, onChangeMessage} = this.props;
    if(quantity > 0) {
      this.setState({
        quantity: quantity
      });
      onUpdateProduct(product, quantity);
      onChangeMessage(Message.MSG_ADD_TO_CART_SUCCESS)
    }
  }

  showSubTotal = (price, quantity) => {
    return price *quantity;
  }
  onDelete = (product) => {
    this.props.onDeleteProduct(product);
    this.props.onChangeMessage(Message.MSG_DELETE_TO_CART_SUCCESS);
  }
  render() {
    var {item} = this.props;
    var {quantity} = item.quantity > 0 ? item : this.state;
    console.log(quantity);
    return (
        <tr>
        <th scope="row">
          <img src={item.product.image} className="img-fluid z-depth-0" />
        </th>
        <td>
          <h5>
            <strong>{item.product.name}</strong>
          </h5>
        </td>
        <td>{item.product.price}$</td>
        <td className="center-on-small-only">
          <span className="qty">{quantity} </span>
          <div className="btn-group radio-group" data-toggle="buttons">
            <label 
            onClick={() => this.onUpdateQuantity(item.product,item.quantity - 1)}
            className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light">
              <a>—</a>
            </label>
            <label 
            onClick={() => this.onUpdateQuantity(item.product,item.quantity + 1)}
            className="btn btn-sm btn-primary
                                        btn-rounded waves-effect waves-light">
              <a>+</a>
            </label>
          </div>
        </td>
        <td>{ this.showSubTotal(item.quantity,item.product.price)}$</td>
        <td>
          <button type="button"
                  className="btn btn-sm btn-primary waves-effect waves-light" 
                  data-toggle="tooltip" 
                  data-placement="top"
                  onClick={() => this.onDelete(item.product)} >
            X
          </button>
        </td>
      </tr>
    )
  }
}
