import React from 'react';

const Category = props => {
    const onClick = (e) => {
        props.onRemove(props.data);
    }
    return (
        <div className="category">
            <span className="name">{props.data.Name}</span>
            <button onClick={onClick} className="delete icon"></button>
        </div>
    );
}

export default Category;