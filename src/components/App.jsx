class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      videoList: [],
      videoPlaying: {snippet: {title: '', description: ''}, id: {videoId: ''}},
      videoPlayingDetails: {snippet: {title: '', description: '', channelTitle: '', publishedAt: ''}, statistics: {viewCount: '', likeCount: '', dislikeCount: ''}},
      autoplay: 0
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
            <VideoPlayer video={this.state.videoPlaying} autoplay={this.state.autoplay}/>
            <VideoDetails video={this.state.videoPlayingDetails}/>
          </div>
          <div className="col-md-5">
            <button className={this.state.autoplay === 0 ? 'toggle' : 'toggle autoplayOn'} onClick={this.toggleAutoplay.bind(this)}>toggle autoplay</button>
            <VideoList videos={this.state.videoList} func={this.handleClick} parent={this}/>
          </div>
        </div>
      </div>
    );
  }

  toggleAutoplay() {
    this.setState({autoplay: this.state.autoplay === 0 ? 1 : 0});
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

    window.searchYouTube(dataObj, changeState, 'search');
  }

  getDetails(id) {
    var dataObj = {
      'id': id,
      'maxResults': '1',
      'key': window.YOUTUBE_API_KEY,
      'part': 'snippet,contentDetails,statistics',
    }

    var renderDescription = (video) => {
      //console.log(video);
      this.setState({videoPlayingDetails: video.items[0]});
    }

    window.searchYouTube(dataObj, renderDescription, 'videos');
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
