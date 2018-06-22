import React from 'react';
import PBox from './Price';
const Product = props => {
    const path = '../../../../../Built/Images/ProductsImages/';
    const { Image, Name, Price, PackedPrice, Mass, Realization, Category } = props.data;
    return (
        <div className="product-wrapper">
            <div className="product">
                <div className="img-wrapper">
                    <img src={path + Image} />
                </div>
                <div className="info">
                    <div className="name">
                        <span className="text">
                            {
                                Name
                            }
                        </span>
                    </div>
                    <PBox uniqueClass="simple" label="Ціна" value={Price} />
                    <PBox uniqueClass="packed" label="Упакований" value={PackedPrice} />
                    <div className="mass">
                        <span className="text">{Mass} <span className="unit">г</span></span>
                    </div>
                    <div className="realization">
                        <span className="label">Термін реалізації:</span>
                        <div className="value-wrapper">
                            <span className="value">{Realization}</span>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Product;