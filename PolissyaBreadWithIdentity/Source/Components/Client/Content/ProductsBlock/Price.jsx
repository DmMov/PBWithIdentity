import React from 'react';

const Price = props => {
    return (
        props.value === null? 
        <div className={`price ${props.uniqueClass}`}>
            <span className="label null">{props.label}:</span>
            <div className={`value-wrapper ${props.uniqueClass}`}>
                <span className="value null">₴0.00</span>
            </div>
        </div>
        :
        <div className={`price ${props.uniqueClass}`}>
            <span className="label">{props.label}:</span>
            <div className={`value-wrapper ${props.uniqueClass}`}>
                <span className="value">₴
                    {
                        props.value
                    }
                </span>
            </div>
        </div>
    );
}

export default Price;