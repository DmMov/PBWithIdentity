import React, { Component } from 'react';

import Title from '../Common/Title';
import Panel from '../Common/Panel';

class StoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="stories list">
                <Title value="Історія" />
                <Panel uniqueClass="stories" btnValue="Нова історія"/> 
            </div>
        );
    }
}

export default StoriesList;