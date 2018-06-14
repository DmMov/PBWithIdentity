import React from 'react';

const DescriptionElement = props => {
    return (
        <li className="content-slide" style={{
            transform: `translate(-${props.translate * 100}%)`
        }}>
            <p className="ptsans">{ props.slideValue }</p>
        </li>
    );
}

export default DescriptionElement;