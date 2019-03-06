import React, { Component } from 'react';
import { connect} from 'react-redux';
import Products from '../components/Products';
import Product from '../components/Product';

class ProductContainer extends Component {
    showProducts(products) {
        var result = null;
        if(products.length > 0) {
            result = products.map((product, index) => {
                return <Product key = {index} product={product}/>
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

export default connect(mapStateToProps, null)(ProductContainer)
