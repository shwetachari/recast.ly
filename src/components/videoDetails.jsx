var VideoDetails = (props) => (
  <div className="video-player-details">
    <h3>{props.video.snippet.title}</h3>
    <div className="row">
      <div className="views col-4">{props.video.statistics.viewCount} views</div>
      <div className="likes col-4"><span className="glyphicon glyphicon-thumbs-up"></span> {props.video.statistics.likeCount}</div>
      <div className="dislikes col-4"><span className="glyphicon glyphicon-thumbs-down"></span> {props.video.statistics.dislikeCount}</div>
    </div>
    <div className="channelTitle">{props.video.snippet.channelTitle}</div>
    <div className="publishedAt">{props.video.snippet.publishedAt.slice(0,10)}</div>
    <div className="playerDescription">{props.video.snippet.description.split('\n').map((para, index) => (
      <span key={index}>{para}<br/></span>
    ))}</div>
  </div>
);

VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
}

window.VideoDetails = VideoDetails;
