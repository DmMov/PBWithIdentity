import React from 'react';

import Stories from './Stories/Stories';
import Success from './Success/Success';
import Traditions from './Traditions/Traditions';
const Content = () => {
    return (
        <main>
            <Stories getUrl="Home/GetStories" />
            <Success />
            <Traditions />
        </main>
    );
}

export default Content;