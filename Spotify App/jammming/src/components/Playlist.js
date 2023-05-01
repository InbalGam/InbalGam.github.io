import Tracklist from "./Tracklist";

function Playlist() {
    let chosen = [{songName:"blues", artist:"Griddy", album:"123sss"}, {songName:"bla bla doo doo", artist:"Britney", album:"hello"}];

    return (
        <div className="playlist">
            <h2>Playlist</h2>
            <ul>
            <Tracklist tracks={chosen} button={'-'}/>
            </ul>
            <button> Save to Playlist </button>
        </div>
    );
};

export default Playlist;