import React, { Component } from 'react';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ""
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }
    render() {
        return (
            <div className="form-wrapper">
                <form className="category-form form grid" onSubmit={this.onSubmit}>
                    <input className="field" type="text" placeholder="Назва типу..." value={this.state.name} onChange={this.onChangeName} />
                    <input className="btn" type="submit" value="Зберегти" />
                    <input className="btn" type="button" onClick={this.props.toggle} value="Відмінити" />
                </form>
            </div>
        );
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        });
    }

    onSubmit(e){
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