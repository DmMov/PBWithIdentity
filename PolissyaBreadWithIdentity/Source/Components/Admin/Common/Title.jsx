import React from 'react';

const Title = props => (
    <div className="title">
        <h1>{props.value}</h1>
        <div className="hr"></div>
    </div>
);

export default Title;