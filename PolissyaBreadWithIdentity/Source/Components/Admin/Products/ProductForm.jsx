import React, { Component } from 'react';

import Title from '../Common/Title';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            name: "",
            price: "",
            packedprice: "",
            mass: 0,
            realization: "",
            categoryid: this.props.data[0].Id,
            selectCategoryName: '' 
        };
    }
    fileSelectedHandler = e =>{
        this.setState({
            selectedFile: e.target.files[0]
        });
    }
    onFieldsChange = e => {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
        [name]: value
        });
        console.log(value);
    }
    
    onSubmit = e =>{
        e.preventDefault();
        const {selectedFile, name, price, packedprice, mass, realization, categoryid} = this.state;
        console.log(categoryid)
        let pName = name.trim(), pPrice = price, pPackedPrice = packedprice, pMass = mass, pRealization = realization.trim(), pImage = selectedFile, pCategory = categoryid;
        if (!pName  || pMass<=0 || !pRealization || pImage==null) {
            return;
        }
        this.props.onProductSubmit({selectedFile: pImage, name: pName, price: pPrice, packedprice: pPackedPrice, mass: pMass, realization: pRealization, categoryid: pCategory});
        this.setState({selectedFile: null, name: "", price: "", packedprice: "", mass: 0, realization: "", categoryid: this.props.data[0].Id });
    }
    render() {
        const {name, price, packedprice, mass, realization, categoryid} = this.state;
        const {onFieldsChange} = this;
        return (
            <div className="form-wrapper">
                <Title value="Новий Продукт" />
                <form className="product-form form grid" onSubmit={this.onSubmit}>
                    <input className="field" name="name" type="text" placeholder="Назва продукту..." value={name} onChange={onFieldsChange} />
                    <input className="field" name="price" type="text" placeholder="Ціна..." value={price} onChange={onFieldsChange} />
                    <input className="field" name="mass" type="number" placeholder="Масса продукту..." value={mass} onChange={onFieldsChange} />
                    <input className="field" name="realization" type="text" placeholder="Термін реалізації..." value={realization} onChange={onFieldsChange} />
                    <input type="text" className="field" name="packedprice" placeholder="Різаний" value={packedprice} onChange={onFieldsChange} />
                    <input className="file" type="file" onChange={this.fileSelectedHandler} />
                    <select value={categoryid} name="categoryid" onChange={onFieldsChange}>
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