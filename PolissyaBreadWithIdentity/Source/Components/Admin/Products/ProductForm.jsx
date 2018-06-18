import React, { Component } from 'react';

import Title from '../Common/Title';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            name: "",
            price: "",
            packed_price: "",
            mass: 0,
            realization: "",
            category: this.props.data[0].Name 
        };
    }
    fileSelectedHandler = e =>{
        this.setState({
            selectedFile: e.target.files[0]
        });
    }
    onChangeSelect = e =>{
        this.setState({
            category: e.target.value
        });
    }
    onFieldsChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
    }
    
    onSubmit = e =>{
        e.preventDefault();
        const {selectedFile, name, price, packed_price, mass, realization, category} = this.state;
        console.log(category.type)
        let pName = name.trim(), pPrice = price, pPackedPrice = packed_price, pMass = mass, pRealization = realization.trim(), pImage= selectedFile, pCategory = category.Name;
        if (!pName  || pMass<=0 || !pRealization || pImage==null) {
            return;
        }
        this.props.onProductSubmit({selectedFile: pImage, name: pName, price: pPrice, packed_price: pPackedPrice, mass: pMass, realization: pRealization, category: pCategory});
        this.setState({selectedFile: null, name: "", price: "", packed_price: "", mass: 0, realization: "", category: this.props.data[0].Name});
    }
    render() {
        const {name, price, packed_price, mass, realization, category} = this.state;
        const {onFieldsChange} = this;
        return (
            <div className="form-wrapper">
                <Title value="Новий Продукт" />
                <form className="product-form form grid" onSubmit={this.onSubmit}>
                    <input className="field" name="name" type="text" placeholder="Назва продукту..." value={name} onChange={onFieldsChange} />
                    <input className="field" name="price" type="text" placeholder="Ціна..." value={price} onChange={onFieldsChange} />
                    <input className="field" name="packed_price" type="text" placeholder="Ціна різаного та упакованого..." value={packed_price} onChange={onFieldsChange} />
                    <input className="field" name="mass" type="number" placeholder="Масса продукту..." value={mass} onChange={onFieldsChange} />
                    <input className="field" name="realization" type="text" placeholder="Термін реалізації..." value={realization} onChange={onFieldsChange} />
                    <input className="file" type="file" onChange={this.fileSelectedHandler} />
                    <select value={category} name="category" onChange={onFieldsChange}>
                        {
                            this.props.data.map((v)=>{
                                return <option key={v.Id} value={v.Id}>{v.Name}</option>
                            })
                        }
                    </select>
                    <input className="btn" type="submit" value="Зберегти " />
                    <input className="btn" type="button" onClick={this.props.toggle} value="Відмінити" />
                </form>
            </div>
        );
    }

    
}

export default CategoryForm;