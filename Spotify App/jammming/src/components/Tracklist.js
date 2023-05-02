import Track from "./Track";

function Tracklist(props) {
    return (
        props.tracks.map((el, ind) => 
                        <li key={ind}> 
                        <Track songName={el.songName} artist={el.artist} album={el.album}/> <button onClick={() => props.onButtonClick(el)}> {props.button} </button> 
                        </li>)
    );
};

export default Tracklist;