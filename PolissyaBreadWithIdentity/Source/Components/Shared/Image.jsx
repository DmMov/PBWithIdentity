import React from 'react';

const Image = props => (
    <div className="img-wrapper">
        <img src={props.full_path} />
    </div>
);

export default Image;