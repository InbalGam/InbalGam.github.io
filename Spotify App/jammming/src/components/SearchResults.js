import Tracklist from "./Tracklist";

function Results(props) {
    return (
        <div className="search-results">
            <h2>Results</h2>
            <ul>
            <Tracklist tracks={props.resList} button={'+'}/>
            </ul>
        </div>
    );
};

export default Results;