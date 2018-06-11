import React from 'react';

//#region Components
import Header from './Client/Header/Header';
import Content from './Client/Content/Content';
import Footer from './Client/Footer/Footer';
//#endregion

const App = () =>
    (
        <div className="app">
            <Header />
            <Content />
            <Footer />
        </div>
    );

export default App;