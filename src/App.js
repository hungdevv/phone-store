import React, { Component } from 'react';
import Header from './components/Header';
import Message from './components/Message';
import Cart from './components/Cart';
import Footer from './components/Footer';
import ProductContainer from './containers/ProductContainer';

class App extends Component {

    render() {
        return (
            <div>
                <Header />
                <main id="mainContainer">
                    <div className="container">
                        <ProductContainer />
                        <Message />
                        <Cart />
                        <Footer />
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
