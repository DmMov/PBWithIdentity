import React from 'react';

const Product = props => {
    const onClick = (e) => {
        props.onRemove(props.data);
    }
    return (
        <div className="product">
            <div className="img-wrapper">
                <img src="" className="image"/>
            </div>
            <span className="name">{props.data.Name}</span>
            {props.data.Price == null ? null :<span className="price">₴{props.data.Price}</span>}
            {props.data.PackedPrice == null ? null :<span className="price packed">₴{props.data.PackedPrice}</span>}
            <span className="mass">{props.data.Mass}</span>
            <span className="realization">{props.data.Realization}</span>
            <button onClick={onClick} className="delete icon"></button>
        </div>
    );
}

export default Product;