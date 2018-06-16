import React from 'react';

const Product = props => {
    const onClick = (e) => {
        props.onRemove(props.data);
    }
    const path = "";
    const {Image, Name, Price, PackedPrice, Mass, Realization} = props.data;
    return (
        <div className="product">
            <div className="img-wrapper">
                <img src={path + Image} className="image"/>
            </div>
            <span className="name">{Name}</span>
            {Price == null ? null :<span className="price">₴{Price}</span>}
            {PackedPrice == null ? null :<span className="price packed">₴{PackedPrice}</span>}
            <span className="mass">{Mass}</span>
            <span className="realization">{Realization}</span>
            <button onClick={onClick} className="delete icon"></button>
        </div>
    );
}

export default Product;