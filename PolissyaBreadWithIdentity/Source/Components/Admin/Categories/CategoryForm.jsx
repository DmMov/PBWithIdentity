import React, { Component } from 'react';

import Title from '../Common/Title';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };
    }
    render() {
        return (
            <div className="form-wrapper">
                <Title value="Нова Категорія" />
                <form className="category-form form grid" onSubmit={this.onSubmit}>
                    <input className="field" type="text" placeholder="Назва типу..." value={this.state.name} onChange={this.onChangeName} />
                    <input className="btn" type="submit" value="Зберегти" />
                    <input className="btn" type="button" onClick={this.props.toggle} value="Відмінити" />
                </form>
            </div>
        );
    }

    onChangeName = e =>{
        this.setState({
            name: e.target.value
        });
    }

    onSubmit = e =>{
        e.preventDefault();
        let categoryName = this.state.name.trim();
        if (!categoryName) {
            return;
        }
        this.props.onCategorySubmit({ name: categoryName});
        this.setState({name: ""});
    }
}

export default CategoryForm;