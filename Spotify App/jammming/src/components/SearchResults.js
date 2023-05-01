import Tracklist from "./Tracklist";

function Results() {
    let resList = [{songName:"bla bla", artist:"Beatles", album:"123"}, {songName:"bla bla doo doo", artist:"Britney", album:"hello"}];

    return (
        <div className="search-results">
            <h2>Results</h2>
            <ul>
            <Tracklist tracks={resList} button={'+'}/>
            </ul>
        </div>
    );
};

export default Results;