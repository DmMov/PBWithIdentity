import React, { Component } from 'react';

import Descriptions from './Descriptions';
import SliderBtn from './SliderBtn';

class DescriptionSlider extends Component {
    constructor(props) {
        super(props);
        this.state= {
            currentIndex: 0,
            descriptions : [
                "   Розширене та модернізоване виробництво багатьох сортів хліба, булочних та кондитерськіх виробів, а також реалізація цієї продукції оптом та вроздріб.",
                "   Високопрофесійний колектив технологів, досвідчених пекарів, які забезпечують безперервний цикл виробництва.",
                "   Поєднання сучасних технологій зі збереженням українських традицій.",
                "   Спрямованість у майбутнє, яка дозволяє ТДВ \"Поліссяхліб\" залишатися лідером на ринку харчової промисловості Рівненщини."    
            ]
        }
        this.prevSlide = this.prevSlide.bind(this);
        this.nextSlide = this.nextSlide.bind(this);
        
    }
//#region Next Prev Slide Func
    prevSlide(){
        const {currentIndex, descriptions} = this.state;
        let i = currentIndex;
        i == 0 ? i = descriptions.length - 1 : i--;
        this.setState({
            currentIndex: i
        });
    }
    
    nextSlide(){
        const {currentIndex, descriptions} = this.state;
        let i = this.state.currentIndex;
        i == descriptions.length - 1 ? i = 0 : i++;
        this.setState({
            currentIndex: i
        });
    }
//#endregion
    
    render() {
        const {currentIndex, descriptions} = this.state;
        return (
            <div className="description-slider relative">
                <SliderBtn btnDirection="left" clickFunc={this.prevSlide} />
                <Descriptions slides={descriptions} multiplier={currentIndex}/>
                <SliderBtn btnDirection="right" clickFunc={this.nextSlide}/>
            </div>
        );
    }
}

export default DescriptionSlider;