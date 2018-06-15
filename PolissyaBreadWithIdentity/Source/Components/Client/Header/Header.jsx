import React from 'react';

//#region Components
import Menu from './Menu/Menu';
import HeaderContent from './HeaderContent';
//#endregion 

const Header = () => (
    <header className="header container grid">
        <Menu />
        <a href="/Admin" style={{
            zIndex: '3',
            position: 'absolute',
        }}>Admin Panel</a>
        
        <HeaderContent />
        
    </header>
);

export default Header;