import React from 'react';

import Stories from './Stories/Stories';
import Success from './Success/Success';
import Traditions from './Traditions/Traditions';
import ProductsBlock from './ProductsBlock/ProductsBlock';
const Content = () => {
    return (
        <main>
            <ProductsBlock />
            <Stories getUrl="home/GetStories"/>
            <Traditions />
            <Success  />

        </main>
    );
}

export default Content;