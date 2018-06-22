import React, { Component } from 'react';

import ProductsList from './ProductsList';
import CategoriesList from './CategoriesList';
export default class ProductsBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            activeCategory: 'All'
        };
    }
    
    ActiveToggle = e =>{
        this.setState({
            activeCategory: e.target.name
        });
        console.log(this.state.activeCategory);
    }
    render() {
        return (
            <div className="product-block container grid" >
                <a name="product-block"></a>
                <div className="title">
                    <h1>Продукція</h1>
                    <div className="hr"></div>
                </div>
                <CategoriesList active={this.state.activeCategory} toggle={this.ActiveToggle} getUrl="Home/GetCategories"/>
                <ProductsList active={this.state.activeCategory} getUrl="Home/GetProducts" />
            </div>
        );
    }

    
}