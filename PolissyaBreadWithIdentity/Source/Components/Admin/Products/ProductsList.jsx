import React, { Component } from 'react';

import Title from '../Common/Title';
import Panel from '../Common/Panel';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="products list">
                <Title value="Продукція" />
                <Panel uniqueClass="products" btnValue="Новий продукт"/> 
            </div>
        );
    }
}

export default ProductsList;