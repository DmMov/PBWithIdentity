import React from 'react';
import DescriptionElement from './DescriptionElement';

const Descriptions = props => {
    return (
            <ul className="slides-box grid">
                {
                    props.slides.map((v, i)=>{
                        return <DescriptionElement key={i} slideValue={v} translate={props.multiplier}/>
                    })
                }
            </ul>
    );
}

export default Descriptions;