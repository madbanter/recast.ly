import YOUTUBE_API_KEY from '../config/youtube.js';
import searchYouTube from '../lib/searchYouTube.js';
// import App from './App.js';

var Search = () => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" />
    <button className="btn hidden-sm-down">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

let obj = {
  query: 'chalk',
  max: 12,
  key: YOUTUBE_API_KEY
};

// const successCB = function() { console.log('success'); };
const successCB = function(data) {
  console.log('successful request');
  console.log(data);
  // data[items] is list of videos
  // data could be a new type of component, VideoResultsObject?
  // updateVideos={this.updateVideos.bind(this)}
};
console.log(searchYouTube(obj, successCB));

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
