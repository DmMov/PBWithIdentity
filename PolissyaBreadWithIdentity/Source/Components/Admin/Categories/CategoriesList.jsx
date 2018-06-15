import React, { Component } from 'react';

//#region Components
import Title from '../Common/Title';
import Panel from '../Common/Panel';
import Category from './Category';
import CategoryForm from './CategoryForm';
//#endregion

class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            categories: [],
            formIsOpen: false
        };
    }
    render() {
        const {formIsOpen, categories} = this.state;
        const remove = this.onRemoveCategory;
        
        return (
            formIsOpen ? <CategoryForm onCategorySubmit={this.onAddCategory} toggle={this.FormToggle} /> :
            <div className="categories list">
                <Title value="Категорії" />
                <Panel uniqueClass="categories" btnValue="Нова категорія" toggle={this.FormToggle}/>
                <div className="scroll categories-box">
                    {
                        categories.map((v)=>{
                            return <Category key={v.Id} data={v} onRemove={remove}/>
                        })
                    }
                </div> 
            </div>
        );
    }

    FormToggle = () => {
        this.setState({
            formIsOpen: !this.state.formIsOpen
        });
    }
    onAddCategory = category => {
        if (category) {
 
            let data = new FormData();
            data.append("name", category.name);
 
            let xhr = new XMLHttpRequest();
            xhr.open("post", this.props.postUrl, true);
            xhr.onload = () => ( xhr.status == 200 ? this.loadData() : "error");
            xhr.send(data);
        }
        this.FormToggle();
    }
    onRemoveCategory = category => {
        if (category) {
            let data = new FormData();
            data.append("id", category.Id);
 
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
            this.setState({ categories: data });
        };
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }
}

export default CategoriesList;