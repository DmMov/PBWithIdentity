import React, { Component } from 'react';

class CategoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null,
            name: "",
            price: "",
            packed_price: "",
            mass: "",
            realization: "",
            category: "default"
        };
    }
    fileSelectedHandler = e =>{
        this.setState({
            selectedFile: e.target.files[0]
        });
    }

    onCategoryChange = e =>{
        this.setState({
            category: e.target.value
        });
    }
    //#region onChangeFields
    onChangeName = e => {
        this.setState({
            name: e.target.value
        });
    }
    onChangePrice = e =>{
        this.setState({
            price: e.target.value
        });
    }
    onChangePackedPrice = e =>{
        this.setState({
            packed_price: e.target.value
        });
    }
    onChangeMass = e =>{
        this.setState({
            mass: e.target.value
        });
    }
    onChangeRealization = e =>{
        this.setState({
            realization: e.target.value
        });
    }
    //#endregion
    
    onSubmit = e =>{
        e.preventDefault();
        const {selectedFile, name, price, packed_price, mass, realization} = this.state;
        let pName = name.trim();
        let pPrice = price;
        let pPackedPrice = packed_price;
        let pMass = mass;
        let pRealization = realization.trim();
        let pImage= selectedFile;
        if (!pName  || pMass<=0 || !pRealization || pImage==null) {
            return;
        }
        this.props.onProductSubmit({selectedFile: pImage, name: pName, price: pPrice, packed_price: pPackedPrice, mass: pMass, realization: pRealization});
        this.setState({selectedFile: null, name: "", price: "", packed_price: "", mass: "", realization: "" });
    }
    render() {
        const {name, price, packed_price, mass, realization} = this.state;
        
        return (
            <div className="form-wrapper">
                <form className="product-form form grid" onSubmit={this.onSubmit}>
                    <input className="field" type="text" placeholder="Назва продукту..." value={name} onChange={this.onChangeName} />
                    <input className="field" type="text" placeholder="Ціна..." value={price} onChange={this.onChangePrice} />
                    <input className="field" type="text" placeholder="Ціна різаного та упакованого..." value={packed_price} onChange={this.onChangePackedPrice} />
                    <input className="field" type="text" placeholder="Масса продукту..." value={mass} onChange={this.onChangeMass} />
                    <input className="field" type="text" placeholder="Термін реалізації..." value={realization} onChange={this.onChangeRealization} />
                    <input className="field" type="file" onChange={this.fileSelectedHandler} />
                    <select name="" id="" onChange={this.onCategoryChange}>
                        {
                            this.props.data.map((v)=>{
                                return <option key={v.Id} value={v.Name}>{v.Name}</option>
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