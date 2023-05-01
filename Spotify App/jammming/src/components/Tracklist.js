import Track from "./Track";

function Tracklist(props) {
    // props => [track1 = {songname: "", artist: "", album: ""}, track2]

    return (
        props.tracks.map((el, ind) => 
                        <li key={ind}> 
                        <Track songName={el.songName} artist={el.artist} album={el.album}/> <button> {props.button} </button> 
                        </li>)
    );
};

export default Tracklist;