App = {
  Templates: {
    playlistEntry: Handlebars.compile($('[data-template="playlist-entry"]').html())
  },
  Player: {},
  Playlist: {},
  RdioService: new RdioService(),
  initialize: function(){
    App.Player = new Player('p8056088');

    $('body').on('click', '[data-playlist-song]', function(event) {
      App.Playlist.skipTo($(this).data('playlistIndex'));
    });

    $('body').on('click', '[data-player-next]', function(event) {
      App.Player.playNext();
    });

    $('body').on('click', '[data-player-previous]', function(event) {
      App.Player.playPrevious();
    });
  }
};

$(document).ready(function() {
  App.initialize();
});
