import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import Cart from '../components/Cart';
import  * as Message from '../constants/Message';
import CartItem from '../components/CartItem';
import CartResult from '../components/CartResult';
import { actDeleteProduct, actChangeMessage } from '../actions';



class CartContainer extends Component {
    showCartItem = (cart) =>{
        var result = Message.MSG_CART_EMPTY;
        var {onDeleteProduct, onChangeMessage} = this.props
        if(cart.length > 0) {
             result =  cart.map((item, index)=> {
                return(
                    <CartItem
                        key={index}
                        item={item}
                        index={index}
                        onDeleteProduct={onDeleteProduct}
                        onChangeMessage={onChangeMessage}
                    />
                )
            })
        }
        return result

    }
    showTotalAmount = (cart) => {
        var result = null;
        if(cart.length > 0) {
            result = <CartResult
            cart={cart}
            />
        }
        return result;
    }
    render() {
        var {cart} = this.props;
        return (
            <Cart>
                { this.showCartItem(cart)}
                { this.showTotalAmount(cart)}
            </Cart>
        )
    }
    
}
        CartContainer.propTypes = {
            cart: PropTypes.arrayOf(
                PropTypes.shape({
                    product: PropTypes.shape({
                        id: PropTypes.number.isRequired,
                        name: PropTypes.string.isRequired,
                        image: PropTypes.string.isRequired,
                        description: PropTypes.number.isRequired,
                        price: PropTypes.number.isRequired,
                        inventory: PropTypes.number.isRequired,
                        rating: PropTypes.number.isRequired
                    }).isRequired,
                    quantity: PropTypes.number.isRequired
                })
            ).isRequired
        }

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onDeleteProduct: (product) => {
            dispatch(actDeleteProduct(product))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)
