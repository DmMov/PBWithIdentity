import React from 'react';

import Stories from './Stories/Stories';

const Content = () => {
    return (
        <main>
            <Stories getUrl="Home/GetStories" />
        </main>
    );
}

export default Content;