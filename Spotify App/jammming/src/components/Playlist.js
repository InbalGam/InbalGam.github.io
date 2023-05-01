import Tracklist from "./Tracklist";

function Playlist(props) {
    return (
        <div className="playlist">
            <h2>Playlist</h2>
            <ul>
            <Tracklist tracks={props.chosen} button={'-'}/>
            </ul>
            <button> Save to Playlist </button>
        </div>
    );
};

export default Playlist;