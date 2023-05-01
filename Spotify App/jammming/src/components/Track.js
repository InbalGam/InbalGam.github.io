function Track(props) {
    return (
        <div className="track">
            <h2>{props.songName}</h2>
            <h3>{props.artist} | {props.album}</h3>
        </div>
    );
};

export default Track;