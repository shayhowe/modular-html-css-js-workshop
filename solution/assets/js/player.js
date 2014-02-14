var Player = function(playlist_id){
  this.playlist_id = playlist_id;
  this.initialize();
};

Player.prototype = {
  initialize: function(){
    App.RdioService.getPlaylistData(this.playlist_id);
  },

  playNext: function(){
    App.Playlist.skipTo(App.Playlist.nextSongIndex);
  },

  playPrevious: function(){
    App.Playlist.skipTo(App.Playlist.previousSongIndex);
  }
};
