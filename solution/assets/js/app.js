App = {
  Templates: {
    playlistEntry: Handlebars.compile($('[data-template="playlist-entry"]').html())
  },
  Player: {},
  Playlist: {},
  RdioService: {},
  initialize: function(){
    App.RdioService = new RdioService();
    App.Player = new Player('p5017');

    $('body').on('click', '[data-playlist="song"]', function(event) {
      App.Playlist.skipTo($(this).data('playlistIndex'));
    });

    $('body').on('click', '[data-player="next"]', function(event) {
      App.Player.playNext();
    });

    $('body').on('click', '[data-player="previous"]', function(event) {
      App.Player.playPrevious();
    });
  }
};

$(document).ready(function() {
  App.initialize();
});
