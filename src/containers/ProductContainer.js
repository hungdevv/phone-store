import React, { Component } from 'react';
import { connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';
import {actAddCart, actChangeMessage} from '../actions/index';
import PropTypes from 'prop-types';

class ProductContainer extends Component {
    showProducts(products) {
        var result = null;
        var {onAddToCart, onChangeMessage} = this.props;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product 
                        key = {index} 
                        product={product}
                        onAddToCart={onAddToCart}
                        onChangeMessage={onChangeMessage}/>
            });
        }
        return result;
    }
    render() {
        var { products } = this.props;
        return (
            <Products>
                {this.showProducts(products)}        
            </Products>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        products: state.products
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddCart(product, 1))
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer)
