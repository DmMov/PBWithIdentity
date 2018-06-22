import React from 'react';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="title">
                <h1>Контактна інформація</h1>
                <div className="hr"></div>
            </div>
            <a href="/Admin" style={{
            zIndex: '3',
            position: 'absolute',
            bottom: '0',
            right:'0'
        }}>Admin Panel</a>
        </footer>
    );
}

export default Footer;