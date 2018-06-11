import React, { Component } from 'react';

import Title from '../Common/Title';
import Panel from '../Common/Panel';

class CategoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div className="categories list">
                <Title value="Категорії" />
                <Panel uniqueClass="categories" btnValue="Нова категорія"/> 
            </div>
        );
    }
}

export default CategoriesList;