var searchYouTube = (options, callback, urlEnding) => {

  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/${urlEnding}`,
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: function(data) {
      console.log('success!');
      callback(data);
    },
    error: function() {
      console.log('error :(');
    }
  });

};

window.searchYouTube = searchYouTube;
