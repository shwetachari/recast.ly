var searchYouTube = (options, callback) => {

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: function(data) {
      console.log('success!');
      callback(data.items);
    },
    error: function() {
      console.log('error :(');
    }
  });

};

window.searchYouTube = searchYouTube;
