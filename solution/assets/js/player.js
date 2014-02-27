var Player = function(playlist_id){
  this.playlist_id = playlist_id;
  this.initialize();
};

Player.prototype = {
  initialize: function(){
    App.RdioService.getPlaylistData(this.playlist_id, function(data){
      App.Playlist = new Playlist(data);
      $('[data-loading-flag]').hide();
      $('[data-player-container]').fadeIn();
    });
  },

  playNext: function(){
    App.Playlist.next();
  },

  playPrevious: function(){
    App.Playlist.prev();
  }
};
