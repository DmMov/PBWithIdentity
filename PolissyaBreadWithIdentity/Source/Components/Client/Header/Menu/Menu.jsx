import React, { Component } from 'react';

import Link from '../../../Shared/Link';
import Image from '../../../Shared/Image';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const links = [
            "історія",
            "продукція",
            "запорука успіху",
            "традиції збережено",
            "контакти",
            "новини"
        ];
        return (
            <nav className="menu grid">
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