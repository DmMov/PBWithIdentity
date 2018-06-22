import React from 'react';

const Category = props => {
    return (
        <button className={`category ${props.active === props.data.Name? "active" : ""}`} name={props.data.Name} onClick={props.toggle}>
            <span className="name">
                {
                    props.data.Name
                }
            </span>
        </button>
    );
}

export default Category;