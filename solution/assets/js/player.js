var Player = function(playlist_id){
  this.playlist_id = playlist_id;
  this.playlist = null;
  this.currentSong = null;
  this.currentProgress = null;

  this.initialize();
};

Player.prototype = {
  initialize: function(){
    this.getPlaylistData();
  },

  getPlaylistData: function(){
    $.get(Settings.RDIO_SERVICE_HOST + "/playlists/" + this.playlist_id, function(response) {
      App.Playlist = new Playlist(response.data);
    });
  },

  playNext: function(){
    App.Playlist.skipTo(App.Playlist.nextSongIndex);
  },

  playPrevious: function(){
    App.Playlist.skipTo(App.Playlist.previousSongIndex);
  }
};
