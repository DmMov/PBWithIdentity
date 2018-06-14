import React, { Component } from 'react';

import DescriptionsData from '../../../StaticData/Descriptions';

import Descriptions from './Descriptions';
import SliderBtn from './SliderBtn';

class DescriptionSlider extends Component {
    constructor(props) {
        super(props);
        this.state= {
            currentIndex: 0,
        }
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        
    }

    prevSlide(){
        let index = this.state.currentIndex;
        index === 0 ? index = DescriptionsData.length - 1 : index--;
        this.setState({
            currentIndex: index
        });
    }
    
    nextSlide(){
        let index = this.state.currentIndex;
        index === DescriptionsData.length - 1 ? index = 0 : index++;
        this.setState({
            currentIndex: index
        });
    }

    render() {
        const {currentIndex} = this.state;
        return (
            <div className="description-slider relative">
                <SliderBtn btnDirection="left" clickFunc={this.prevSlide} />
                <div className="slider-title">
                    <span className="value">
                        Традиції Збережено
                    </span>
                    <div className="br"></div>
                </div>
                <Descriptions slides={DescriptionsData} multiplier={currentIndex}/>
                <SliderBtn btnDirection="right" clickFunc={this.nextSlide}/>
            </div>
        );
    }
}

export default DescriptionSlider;