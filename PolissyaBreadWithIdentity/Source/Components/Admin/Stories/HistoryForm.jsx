import React, { Component } from 'react';

class HistoryForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: "", 
            text: ""  
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangeText = this.onChangeText.bind(this);
    }
    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type="text" placeholder="Дата..." value={this.state.date} onChange={this.onChangeDate} />
                <input type="text"  placeholder="Історія..." value={this.state.text} onChange={this.onChangeText} />
                <input className="btn" type="submit" value="Зберегти" />
            </form>
        );
    }

    onChangeDate(e){
        this.setState({
            date: e.target.value
        });
    }
    onChangeText(e){
        this.setState({
            text: e.target.value
        });
    }

    onSubmit(e){
        e.preventDefault();
        var historyDate = this.state.date.trim();
        var historyText = this.state.text.trim();
        if (!historyDate || !historyText) {
            return;
        }
        this.props.onHistorySubmit({ date: historyDate, text: historyText});
        this.setState({date: "", text: "" });
    }
}

export default HistoryForm;