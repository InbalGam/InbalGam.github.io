import { useState } from 'react';
import searchSpotify from '../Spotify';
import Select from 'react-select'

function SearchBar(props) {
    const [text, setText] = useState('');
    const [searchType, setSearchType] = useState('track');
    const options = [{value: 'track', label: 'Track name'}, {value: 'artist', label: 'Artist name'}];

    function handleTextChange(e) {
        setText(e.target.value);
    };


    async function search(event) {
       event.preventDefault();
       const results = await searchSpotify(text, searchType);
       props.getTracks(results);
    };


    function handleSelectChange(choice) {
        setSearchType(choice.value);
    };


    return (
        <div className="search-bar">
            <form onSubmit={search}>
                <label for='search'>Search for music </label>
                <input id='search' type='text' value={text} onChange={handleTextChange} name='search' />
                <Select defaultValue={options[0]} options={options} onChange={handleSelectChange} />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SearchBar;