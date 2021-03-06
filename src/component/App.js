import React from 'react';
import SearchBar from './SearchBar';
import DispalyImage from './DisplayImage';
import unsplash from '../api/unsplash';

class App extends React.Component {
    state = {images: []}

     onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}   
        });
        this.setState({images: response.data.results});
    }
    render() { 
        return (
            <div className="ui container app" style={{ marginTop: '40px'}}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                Found: {this.state.images.length} images
                <hr />
                <DispalyImage images={this.state.images}/>
            </div>
        );
    }
}

export default App;