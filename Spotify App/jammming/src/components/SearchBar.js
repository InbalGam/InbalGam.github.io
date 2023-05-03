import searchSpotify from '../Spotify'

function SearchBar() {
    return (
        <div className="search-bar">
            <label for='search'>Search for music </label>
            <input id='search' type='text' />
            <input type="submit" value="Submit"/>
        </div>
    );
};

export default SearchBar;