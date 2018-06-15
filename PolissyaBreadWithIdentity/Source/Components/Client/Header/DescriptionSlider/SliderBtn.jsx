import React from 'react';

const SliderBtn = props => {
    return (
        <div className={`slider-btn-wrapper btn-${props.btnDirection}-wrapper`} onClick={props.clickFunc}>
            <div className={`slider-btn btn-${props.btnDirection}`} ></div>
        </div>
    );
}

export default SliderBtn;