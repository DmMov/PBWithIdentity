import React, { Component } from 'react';

import Title from '../Common/Title';
import Panel from '../Common/Panel';

class ProductsList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            formIsOpen: false,
            products: []
         };
    }
    FormToggle = () =>{
        this.setState({
            formIsOpen: !this.state.formIsOpen
        });
    }
    onAddProduct = product => {
        if (product) {
 
            const data = new FormData();
            data.append("date", product.name);
            data.append("text", product.price);
 
            let xhr = new XMLHttpRequest();
            xhr.open("post", this.props.postUrl, true);
            xhr.onload = () => ( xhr.status == 200 ? this.loadData() : null);
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
            xhr.onload = () => ( xhr.status == 200 ? this.loadData() : null );
            xhr.send(data);
        }
    }
    loadData() {
        let xhr = new XMLHttpRequest();
        xhr.open("get", this.props.getUrl, true);
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);
            this.setState({ products: data });
        };
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }
    render() {
        const {products} = this.state;
        return (
            <div className="products list">
                <Title value="Продукція" />
                <Panel uniqueClass="products" btnValue="Новий продукт"/>
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