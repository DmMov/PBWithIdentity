import React from 'react';

const History = props => {
    return (
        <div className="history">
            <h1 className="date">{props.data.Date}</h1>
            <span className="text">{props.data.Text}</span>
            <button className="delete"></button>
            <button className="edit"></button>
        </div>
    );
}

export default History;