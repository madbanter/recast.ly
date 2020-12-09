import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoList from './VideoList.js';
import exampleVideoData from '/src/data/exampleVideoData.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { videos: props.videoData, currentVideo: props.videoData[0] };
  }

  updateCurrentVideo(vidObj) {
    // this.setState( state => { currentVideo: vidObj; } );
    this.setState({currentVideo: vidObj});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videos} updateCurrentVideo={this.updateCurrentVideo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
ReactDOM.render(<App videoData={exampleVideoData}/>, document.getElementById('app'));

