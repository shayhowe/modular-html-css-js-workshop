var Playlist = function(data){
  this.data = data;
  this.songs = [];
  this.upcomingSongs = [];
  this.previousSongIndex = -1;
  this.currentSongIndex = 0;
  this.nextSongIndex = 1;

  this.initialize();
};

Playlist.prototype = {
  initialize: function(){
    this.data.songs.forEach(function(songData, index){
      songData.index = index;
      this.songs.push(new Song(songData));
    }, this);

    this.skipTo(0);

    this.render();

    this.upcomingSongs[0].play();
  },

  skipTo: function(playlistIndex){
    this.upcomingSongs = this.songs.slice(playlistIndex, playlistIndex + 10);

    this.previousSongIndex = this.upcomingSongs[0].playlistIndex - 1;
    this.currentSongIndex = this.upcomingSongs[0].playlistIndex;
    this.nextSongIndex = this.upcomingSongs[0].playlistIndex + 1;

    this.render();

    this.upcomingSongs[0].play();
  },

  render: function(){
    $('.songs').empty();

    this.upcomingSongs.forEach(function(song){
      $(App.Templates.playlistEntryTemplate(song)).appendTo($('.songs'));
    });
  }
};
