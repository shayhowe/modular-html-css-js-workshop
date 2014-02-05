var RdioService = function(){
  this.playbackToken = null;
  this.playlist = {};
  this.songs = [];

  this.getPlaybackToken();
  this.getPlaylist();
};

RdioService.prototype = {
  getPlaybackToken: function(){
    var self = this;

    $.post(Settings.RDIO_SERVICE_HOST + "/playback_tokens", function(response) {
      self.playbackToken = response.token;
    });
  },

  getPlaylist: function(){
    var self = this;

    $.get(Settings.RDIO_SERVICE_HOST + "/playlists/p8056088", function(response) {
      self.playlist = response.data;
      var songs = self.playlist.songs;

      $.each(songs, function(i, song){
        self.renderSongs(song);
      });

    });
  },

  renderSongs: function(songData){
    song = new Song(songData);
    this.songs.push(song);
    song.addToPlaylist();
  }
};