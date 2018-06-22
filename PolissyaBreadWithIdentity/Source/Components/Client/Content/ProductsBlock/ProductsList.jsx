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
                    this.props.active === "All"?
                    this.state.products.map((v)=>{
                        console.log(v);
                        return <Product key={v.Id} data={v} />
                    }):
                    this.state.products.map((v)=>{
                        console.log(v.Category);
                        return this.props.active === v.Category ?<Product key={v.Id} data={v} /> : null;
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