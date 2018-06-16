import React, { Component } from 'react';

import Title from '../Common/Title';
import Panel from '../Common/Panel';
import Product from './Product';
import ProductForm from './ProductForm';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formIsOpen: false,
            products: [],
            categories: []
         };
    }
    FormToggle = () =>{
        this.setState({
            formIsOpen: !this.state.formIsOpen
        });
        console.log(this.state.formIsOpen);
    }
    onAddProduct = product => {
        if (product) {
 
            const data = new FormData();
            data.append("image", product.selectedFile ,product.selectedFile.name);
            data.append("name", product.name);
            data.append("price", product.price);
            data.append("packed_price", product.packed_price);
            data.append("mass", product.mass);
            data.append("realization", product.realization);
            
 
            let xhr = new XMLHttpRequest();
            xhr.open("post", this.props.postUrl, true);
            xhr.onload = () => ( xhr.status == 200 ? this.loadDataProducts() : null);
            xhr.send(data);
        }
        this.FormToggle();
    }
    onRemoveProduct = product =>{
        if (product) {
            const data = new FormData();
            data.append("id", product.Id);
 
            let xhr = new XMLHttpRequest();
            xhr.open("delete", this.props.deleteUrl, true);
            xhr.onload = () => ( xhr.status == 200 ? this.loadDataProducts() : null );
            xhr.send(data);
        }
    }
    loadDataProducts() {
        let xhr = new XMLHttpRequest();
        xhr.open("get", this.props.getUrl, true);
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);
            this.setState({ products: data });
        };
        xhr.send();
    }

    loadDataCategories() {
        let xhr = new XMLHttpRequest();
        xhr.open("get", this.props.getCategoriesUrl, true);
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);
            this.setState({ categories: data });
        };
        xhr.send();
    }

    componentDidMount() {
        this.loadDataProducts();
        this.loadDataCategories();
    }
    render() {
        const {products, categories, formIsOpen} = this.state;
        const remove = this.onRemoveProduct;
        return (
            formIsOpen ? <ProductForm data={categories} onProductSubmit={this.onAddProduct} onRemove={this.onRemoveProduct} toggle={this.FormToggle} /> :
            <div className="products list">
                <Title value="Продукція" />
                <Panel uniqueClass="products" btnValue="Новий продукт" toggle={this.FormToggle}/>
                <div className="scroll products-box">
                    {
                        products.map((v)=>{
                            return <Product key={v.Id} data={v} onRemove={remove}/>
                        })
                    }
                </div>  
            </div>
        );
    }
}

export default ProductsList;