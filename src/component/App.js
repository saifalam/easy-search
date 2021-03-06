import React from 'react';
import SearchBar from './SearchBar';
import DispalyImage from './DisplayImage';

class App extends React.Component {
    render() {
        return (
            <div className="ui container app">
                <SearchBar />
                <hr />
                <DispalyImage />
            </div>
        );
    }
}

export default App;