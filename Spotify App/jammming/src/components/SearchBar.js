import { useState } from 'react';
import searchSpotify from '../Spotify';

function SearchBar(props) {
    const [text, setText] = useState('');

    function handleTextChange(e) {
        setText(e.target.value);
    };


    async function search(event) {
       event.preventDefault();
       const tracks = await searchSpotify(text);
       props.getTracks(tracks);
    };


    return (
        <div className="search-bar">
            <form onSubmit={search}>
                <label for='search'>Search for music </label>
                <input id='search' type='text' value={text} onChange={handleTextChange} name='search' />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SearchBar;