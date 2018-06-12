import React, { Component, Fragment } from 'react';

import Title from '../Common/Title';
import Panel from '../Common/Panel';
import HistoryForm from './HistoryForm';
import History from './History';

class StoriesList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stories: [],
            formIsOpen: false 
        };

        this.FormToggle = this.FormToggle.bind(this);
        this.onAddHistory = this.onAddHistory.bind(this);
    }
    render() {
        const {formIsOpen, stories} = this.state;
        return (
            formIsOpen ? <HistoryForm onHistorySubmit={this.onAddHistory}/> :
            <div className="stories list">
                <Title value="Історія" />
                <Panel uniqueClass="stories" btnValue="Нова історія" toggle={this.FormToggle}/> 
                <div className="scroll stories-box">
                    {
                        stories.map((v)=>{
                            return <History key={v.Id} data={v}/>
                        })
                    }
                </div>
            </div>
        );
    }

    FormToggle(){
        this.setState({
            formIsOpen: !this.state.formIsOpen
        });
    }
    onAddHistory(history) {
        if (history) {
 
            let data = new FormData();
            data.append("date", history.date);
            data.append("text", history.text);
 
            let xhr = new XMLHttpRequest();
            xhr.open("post", this.props.postUrl, true);
            xhr.onload = () => ( xhr.status == 200 ? this.loadData() : null);
            xhr.send(data);
        }
        this.FormToggle();
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