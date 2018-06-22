import React from 'react';

import Stories from './Stories/Stories';
import Success from './Success/Success';
import Traditions from './Traditions/Traditions';
import ProductsBlock from './ProductsBlock/ProductsBlock';
import Future from './Future/Future';
const Content = () => {
    return (
        <main className="content">
            <ProductsBlock />
            <Stories getUrl="home/GetStories"/>
            <Traditions />
            <Success  />
            <Future />
        </main>
    );
}

export default Content;