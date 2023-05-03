import Tracklist from "./Tracklist";
import { useState } from "react";

function Playlist(props) {
    const [text, setText] = useState('');
    function handleTextChange(e) {
        setText(e.target.value);
    };


    return (
        <div className="playlist">
            <label htmlFor="playlistName">Playlist</label>
            <input id='playlistName' type='text' name='playlist' value={text} onChange={handleTextChange} />
            <ul>
            <Tracklist tracks={props.tracks} button={'-'} onButtonClick={props.onButtonClick} />
            </ul>
            <button> Save to Playlist </button>
        </div>
    );
};

export default Playlist;