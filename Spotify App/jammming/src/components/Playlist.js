import Tracklist from "./Tracklist";
import { useState } from "react";
import {addToPlaylist, createPlaylist} from '../Spotify';

function Playlist(props) {
    const [text, setText] = useState('Playlist Name');

    function handleTextChange(e) {
        setText(e.target.value);
    };


    async function saveTracks(event) {
        let savedTracks = [];
        savedTracks = props.tracks.map((el) => el.uri);
        let playlistID = await createPlaylist(text, props.token);
        addToPlaylist(savedTracks, playlistID, props.token);
        props.reset();
    };


    return (
        <div className="playlist">
            <input id='playlistName' type='text' name='playlist' value={text} onChange={handleTextChange} />
            <ul>
            <Tracklist tracks={props.tracks} button={'-'} onButtonClick={props.onButtonClick} />
            </ul>
            <button onClick={saveTracks}> Save to Playlist </button>
        </div>
    );
};

export default Playlist;