import React from 'react';

//#region Components
import Menu from './Menu/Menu';
import HeaderContent from './HeaderContent';
//#endregion 

const Header = () => (
    <header className="header container grid">
        <Menu />
        <HeaderContent />
    </header>
);

export default Header;