import React, { Component } from 'react';

import ProductsList from './ProductsList';
import CategoriesList from './CategoriesList';
export default class ProductsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {

            products: []
        };
    }
    
    
    render() {
        return (
            <div className="product-block container grid">
                <div className="title">
                    <h1>Продукція</h1>
                    <div className="hr"></div>
                </div>
                <CategoriesList getUrl="Home/GetCategories"/>
                <ProductsList getUrl="Home/GetProducts" />
            </div>
        );
    }

    
}