import React from 'react';

const Product = props => {
    const onClick = (e) => {
        props.onRemove(props.data);
    }
    const path = "../../../../Built/Images/ProductsImages/";
    const {Image, Name, Price, PackedPrice, Mass, Realization, Category} = props.data;
    return (
        <div className="product">
            <div className="img-wrapper">
                <img src={path + Image} className="image"/>
            </div>
            <div className="info">
                <span className="name">{Name}</span>
                {Price === null ? null :<span className="price">₴{Price}</span>}
                {PackedPrice === null ? null :<span className="price packed">₴{PackedPrice}</span>}
                <span className="mass">{Mass} г</span>
                <span className="realization">{Realization}</span>
            </div>
            <button onClick={onClick} className="delete icon"></button>
        </div>
    );
}

export default Product;