import React from 'react';
import ReactDOM from 'react';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDOINkx_jm67rKuenerXI2vBlKK8uLpipk';

const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

ReactDOM.render(<App />, document.querySelector('.container'));
