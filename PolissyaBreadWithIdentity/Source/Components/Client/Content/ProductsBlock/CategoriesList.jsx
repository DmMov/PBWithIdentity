import React, { Component } from 'react';
import Category from './Category';

export default class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories: []
        };
    }
    render() {
        return (
            <div className="categories-list grid">
                <button className={`category ${this.props.active === "All"? "active" : ""}`} name="All" onClick={this.props.toggle}>
                    <span className="name">
                        Вся продукція
                    </span>
                </button>
                {
                    this.state.categories.map((v)=>{
                        return v.Products.length == 0? null : <Category active={this.props.active} toggle={this.props.toggle} key={v.Id} data={v} />
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
            this.setState({categories: data});
        };
        xhr.send();
    }


    componentDidMount() {
        this.loadData();
    }
}