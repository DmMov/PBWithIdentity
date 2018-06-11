import React from 'react';

const Panel = props => {
    return (
        <div className={`${props.uniqueClass} panel grid`}>
            <input type="search" placeholder="Пошук..." />
            <button>{props.btnValue.toUpperCase()}</button>
        </div>
    );
}

export default Panel;