function Track(props) {
    return (
        <div className="track">
            <h2>{props.type === 'Track' ? props.songName : props.artist}</h2>
            <h3>{props.type === 'Artist' ? '' : props.artist + ' | ' + props.album}</h3>
        </div>
    );
};

export default Track;