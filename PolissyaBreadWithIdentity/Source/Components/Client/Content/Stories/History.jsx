import React from 'react';

const History = props => (
        <div className="history">
            <h1 className="date">{props.data.Date}</h1>
            <span className="text">{props.data.Text}</span>
        </div>
);

export default History;