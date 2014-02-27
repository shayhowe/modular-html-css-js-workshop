App = {
  Templates: {
    playlistEntry: Handlebars.compile($('[data-template-song]').html())
  },
  Player: {},
  Playlist: {},
  RdioService: new RdioService(),
  initialize: function(){
    App.Player = new Player('p8056088');

    $('body').on('click', '[data-playlist-song]', function(event) {
      event.preventDefault();
      $target = $(event.target);
      if (!$target.hasClass('control-fav') && !$target.hasClass('control-share')) {
        App.Playlist.skipTo($(this).index());
      }
    });

    $('body').on('click', '[data-player-next]', function(event) {
      event.preventDefault();
      App.Player.playNext();
    });

    $('body').on('click', '[data-player-previous]', function(event) {
      event.preventDefault();
      App.Player.playPrevious();
    });
  }
};

$(document).ready(function() {
  App.initialize();
});
