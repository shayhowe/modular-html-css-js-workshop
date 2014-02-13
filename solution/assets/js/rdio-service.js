var RdioService = function(){
  this.playbackToken = null;
  this.getPlaybackToken(window.location.hostname);
};

RdioService.prototype = {
  getPlaybackToken: function(domain){
    var self = this;

    $.post(Settings.RDIO_SERVICE_HOST + "/playback_tokens", {domain: domain}, function(response) {
      self.playbackToken = response.token;

        $('#player').rdio(self.playbackToken);

        $('#player').bind('ready.rdio', function() {
          console.log('rdio ready');
        });

    });
  }
};