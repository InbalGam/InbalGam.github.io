import Tracklist from "./Tracklist";

function Results(props) {
    return (
        <div className="search-results">
            <h2>Results</h2>
            <ul>
            <Tracklist tracks={props.tracks} button={'+'} onButtonClick={props.onButtonClick} />
            </ul>
        </div>
    );
};

export default Results;