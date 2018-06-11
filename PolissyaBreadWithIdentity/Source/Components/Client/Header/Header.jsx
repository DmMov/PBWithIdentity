import React from 'react';

//#region Components
import Menu from './Menu/Menu';
//#endregion 

const Header = () => (
    <header className="header bg">
        <Menu />
        <a href="/Admin" style={{
            zIndex: '3',
            position: 'absolute',
        }}><button >AP</button></a>
    </header>
);

export default Header;