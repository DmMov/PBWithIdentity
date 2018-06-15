import React, { Component } from 'react';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            name: "",
            price: 0,
            packed_price: 0,
            mass: 0,
            realization: "",
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
    }
    fileSelectedHandler = e =>{
        this.setState({
            selectedFile: e.target.files[0]
        });
    }
    fileUploadHandler = () => {

    }
    //#region onChangeFields
    onChangeName = e => {
        this.setState({
            name: e.target.value
        });
    }
    onChangePrice = e =>{
        this.setState({
            name: e.target.value
        });
    }
    onChangePackedPrice = e =>{
        this.setState({
            name: e.target.value
        });
    }
    onChangeMass = e =>{
        this.setState({
            name: e.target.value
        });
    }
    onChangeRealization = e =>{
        this.setState({
            name: e.target.value
        });
    }
    //#endregion
    
    onSubmit = e =>{
        e.preventDefault();
        const {name, price, packed_price, mass, realization} = this.state;
        let pName = name.trim();
        let pPrice = price;
        let pPackedPrice = packed_price;
        let pMass = mass;
        let pRealization = realization.trim();
        if (!pName || pPrice<=0 || pPackedPrice<=0 || pMass<=0 || !pRealization) {
            return;
        }
        this.props.onCategorySubmit({ name: pName, price: pPrice, packed_price: pPackedPrice, mass: pMass, realization: pRealization});
        this.setState({name: "", price: 0, packed_price: 0, mass: 0, realization: "" });
    }
    render() {
        const {name, price, packed_price, mass, realization} = this.state;
        
        return (
            <div className="form-wrapper">
                <form className="category-form form grid" onSubmit={this.onSubmit}>
                    <input className="field" type="text" placeholder="Назва продукту..." value={name} onChange={this.onChangeName} />
                    <input className="field" type="text" placeholder="Ціна..." value={parseFloat(price)} onChange={this.onChangePrice} />
                    <input className="field" type="text" placeholder="Ціна різаного та упакованого..." value={parseFloat(packed_price)} onChange={this.onChangePackedPrice} />
                    <input className="field" type="text" placeholder="Масса продукту..." value={parseInt(mass)} onChange={this.onChangeMass} />
                    <input className="field" type="text" placeholder="Термін реалізації..." value={realization} onChange={this.onChangeRealization} />
                    <input className="field" type="file" onChange={this.fileSelectedHandler} />
                    <input type="select"/>
                    
                    <input className="btn" type="submit" value="Зберегти " />
                    <input className="btn" type="button" onClick={this.props.toggle} value="Відмінити" />
                </form>
            </div>
        );
    }

    
}

export default CategoryForm;