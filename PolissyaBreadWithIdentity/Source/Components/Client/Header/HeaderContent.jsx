import React from 'react';
import DescriptionSlider from './DescriptionSlider/DescriptionSlider';
const HeaderContent = () => {
    return (
        <div className="header-content ">
            <div className="header-title">
                <span className="value">Традиції Збережено</span>
            </div>
            <DescriptionSlider />
            <div className="pr-wrapper">
                <a className="our-pr" href="#product-block">переглянути продукцію</a>
            </div>
        </div>
    );
}

export default HeaderContent;