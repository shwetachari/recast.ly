class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      videoList: window.exampleVideoData,
      videoPlaying: window.exampleVideoData[0]
    }
  }

  render() {
    console.log('videoPlaying', this.state.videoPlaying);


    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.videoPlaying}/>
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoList} func={this.handleClick} parent={this}/>
          </div>
        </div>
      </div>
    )
  }

  handleClick(parent) {
    console.log('parent', parent);
    console.log('this', this);
    parent.setState({
      videoPlaying: this
    });
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
