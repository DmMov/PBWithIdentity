import React, { Component } from 'react';
import Product from './Product';
export default class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            products: []
        };
    }
    render() {
        return (
            <div className="products-list grid">
                {
                    this.state.products.map((v)=>{
                        console.log(v);
                        return <Product key={v.Id} data={v} />
                    })
                }
            </div>
        );
    }

    loadData() {
        let xhr = new XMLHttpRequest();
        xhr.open("get", this.props.getUrl, true);
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);
            this.setState({products: data});
        };
        xhr.send();
    }


    componentDidMount() {
        this.loadData();
    }
}