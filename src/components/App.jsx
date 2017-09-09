class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList: [],
      videoPlaying: {snippet: {title: '', description: ''}, id: {videoId: ''}}
    }
    this.search();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search func={this.search} parent={this}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying}/>
            <VideoDetails video={this.state.videoPlaying}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} func={this.handleClick} parent={this}/>
          </div>
        </div>
      </div>
    );
  }

  handleClick(parent) {
    parent.setState({
      videoPlaying: this
    });
    parent.getDetails(this.id.videoId);
  }

  search() {
    var searchString = document.querySelector('input') === null ? 'React JS' : document.querySelector('input').value;
    var dataObj = {
      'q': searchString,
      'maxResults': '5',
      'key': window.YOUTUBE_API_KEY,
      'type': 'video',
      'part': 'snippet',
      'videoEmbeddable': 'true',
    }
    var changeState = (videos) => {
      this.setState({
        videoList: videos.items
      });
    };

    window.searchYouTube(dataObj, changeState);
  }

  getDetails(id) {
    var dataObj = {
      'id': id,
      'maxResults': '1',
      'key': window.YOUTUBE_API_KEY,
      'part': 'snippet',
    }

    var renderDescription = (video) => {
      console.log(video);
    }

    window.searchYouTube(dataObj, renderDescription);
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
