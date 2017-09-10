var searchYouTube = (options, callback, urlEnding) => {

  // $.ajax({
  //   url: `https://www.googleapis.com/youtube/v3/${urlEnding}`,
  //   type: 'GET',
  //   data: options,
  //   contentType: 'application/json',
  //   success: function(data) {
  //     console.log('success!');
  //     callback(data);
  //   },
  //   error: function() {
  //     console.log('error :(');
  //   }
  // });

  var fetchUrl = 'https://www.googleapis.com/youtube/v3/' + urlEnding + '?' + $.param(options);

  fetch(fetchUrl, {
    method: 'GET'
  }).then ((response) => {
    if(response.ok) {
      return response.json();
    }
  }).then((data) => {
    callback(data);
  }).catch(() => (console.log('error')))
};

window.searchYouTube = searchYouTube;
