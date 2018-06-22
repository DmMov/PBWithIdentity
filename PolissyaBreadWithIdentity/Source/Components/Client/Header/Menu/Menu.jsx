import React, { Component } from 'react';

import Link from '../../../Shared/Link';
import Image from '../../../Shared/Image';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            active: "",
            isFixed: false,
        };
    }
    
    FixedToggle = () =>{
        
        this.setState({
            isFixed: window.pageYOffset >= 40 ? true : false
        })
    }

    componentDidMount = () =>{
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount = () => {
        window.removeEventListener('scroll', this.handleScroll);
    }
    
    handleScroll = event => {
        let scrollTop = window.scrollY;
        
        this.setState({
          isFixed: scrollTop >= 40? true: false
        });
    }
    render() {
        const links = [
            "продукція",
            "історія",
            "традиції збережено",
            "запорука успіху",
            "погляд у майбутнє",
            "контакти",
            "новини"
        ];
        const {active, isFixed} = this.state;
        return (
            <nav className={`menu grid ${isFixed ? "fixed" : "absolute"}`}>
                <div className="menu-images grid">
                    <Image full_path="../../../../../Built/Images/clear.png" />
                    <Image full_path="../../../../../Built/Images/firm.png" />
                </div>
                
                <ul className="links-box grid">
                    {
                        links.map((v, i)=>{
                            return <Link key={i} value={v.toUpperCase()} />
                        })
                    }
                </ul>
            </nav>
        );
    }
}

export default Menu;