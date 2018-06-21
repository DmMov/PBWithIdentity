import React from 'react';

const Category = props => {
    return (
        <div className="category">
            <span className="name">
                {
                    props.data.Name
                }
            </span>
        </div>
    );
}

export default Category;