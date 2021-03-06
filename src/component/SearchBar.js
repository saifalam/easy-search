import React, {Component} from 'react';

class SearchBar extends Component {

    state= {term: ''};

    onInputChnage = (e) => {
        this.setState({
            term: e.target.value
        });
        console.log (this.state.term);
    }

    onFormSubmit(e) {
        e.preventDefault();
        console.log ("EVENT " + this.state.term);
        this.props.onSubmit(this.state.term);
    }
    render() {
        return (
            <div className="ui segment Search-bar">
                <form onSubmit={event => this.onFormSubmit(event)} className="ui form">
                    <div className="field">
                        <label>Search Image</label>
                        <input className="" value={this.state.term} type="text" onChange={this.onInputChnage}/>
                    </div>
                </form> 
            </div>
        );
    }
}

export default SearchBar;