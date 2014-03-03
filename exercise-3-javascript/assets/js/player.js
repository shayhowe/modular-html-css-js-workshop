var Player = function(playlistId){
  this.playlistId = playlistId;
  this.playlistData = {};
  this.initialize();
};

Player.prototype = {
  initialize: function(){
    var self = this;
    App.RdioService.getPlaylistData(this.playlistId, function(data){
      self.playlistData = data;
      // CALLBACK HAPPENS HERE, CREATE NEW PLAYLIST HERE
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
