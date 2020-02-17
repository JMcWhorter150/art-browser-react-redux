import React from 'react';

export default class ArtSearch extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            search: ""
        }
    }
    render () {
        return (
                <form onSubmit={this._handleSubmit}>
                    <input onChange={this._handleChange} value={this.state.search}></input>
                    <button type='submit'>Submit</button>
                </form>
        );
    }

    _handleChange = (event) => {
        this.setState({
            search: event.target.value
        })
    }

    _handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.search);
    }
}