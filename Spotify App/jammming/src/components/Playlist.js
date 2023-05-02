import Tracklist from "./Tracklist";

function Playlist(props) {
    return (
        <div className="playlist">
            <h2>Playlist</h2>
            <ul>
            <Tracklist tracks={props.tracks} button={'-'} onButtonClick={props.onButtonClick} />
            </ul>
            <button> Save to Playlist </button>
        </div>
    );
};

export default Playlist;