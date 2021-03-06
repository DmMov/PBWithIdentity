import React from 'react';

const History = props => {
    const onClick = (e) => {
        props.onRemove(props.data);
    }
    return (
        <div className="history">
            <h1 className="date">{props.data.Date}</h1>
            <span className="text">{props.data.Text}</span>
            <button onClick={onClick} className="delete icon"></button>
        </div>
    );
}

export default History;