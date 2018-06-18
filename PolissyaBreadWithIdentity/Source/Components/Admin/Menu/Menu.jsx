import React, { Component } from 'react';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        const links = [
            {
                name: 'stories',
                value: 'Історії'
            },
            {
                name: 'categories',
                value: 'Категорії'
            },
            {
                name: 'products',
                value: 'Продукція'
            },
        ];
        return (
            <nav className="menu grid">
                <a href="Home">
                    <div className="menu-images grid">
                        <div className="image-wrapper">
                            <img src="../../../../Built/Images/clear.png" />
                        </div>
                        <div className="image-wrapper">
                            <img src="../../../../Built/Images/firm.png" />
                        </div>
                    </div>
                </a>
                
                <ul className="btn-box grid">
                    {
                        links.map((v, i)=>{
                            return <button key={i} name={v.name} onClick={this.props.toggle}>{v.value}</button>
                        })
                    }
                    <button onClick={this.props.logOff}>Вийти</button>
                </ul>
            </nav>
        );
    }
}

export default Menu;