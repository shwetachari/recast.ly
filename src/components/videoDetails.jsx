var VideoDetails = (props) => (
  <div className="video-player-details">
    <h3>{props.video.snippet.title}</h3>
    <div>{props.video.snippet.description}</div>
  </div>
);


  //title
  //views
  //likes
  //dislikes
  //channelId
  //Published date
  //description

VideoDetails.propTypes = {
  video: React.PropTypes.object.isRequired
}

window.VideoDetails = VideoDetails;
