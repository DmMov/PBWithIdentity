import React, { Component, Fragment } from 'react';

import History from './History';

class StoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stories: [],
        };
    }
    render() {
        const {stories} = this.state;
        return (
            <div className="stories container">
                <div className="title">
                    <h1>Історія</h1>
                    <div className="hr"></div>
                </div>
                <div className="stories-box grid">
                    {
                        stories.map((v)=>{
                            return <History key={v.Id} data={v}/>
                        })
                    }
                </div>
            </div>
        );
    }
    loadData() {
        let xhr = new XMLHttpRequest();
        xhr.open("get", this.props.getUrl, true);
        xhr.onload = () => {
            let data = JSON.parse(xhr.responseText);
            this.setState({ stories: data });
        };
        xhr.send();
    }
    componentDidMount() {
        this.loadData();
    }
}

export default StoriesList;