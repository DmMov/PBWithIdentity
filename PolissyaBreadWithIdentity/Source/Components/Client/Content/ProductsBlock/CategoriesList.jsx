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
                {
                    this.state.categories.map((v)=>{
                        console.log(v);
                        return <Category key={v.Id} data={v} />
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