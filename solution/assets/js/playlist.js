var Playlist = function(data){
  this.data = data;
  this.songs = [];
  this.upcomingSongs = [];
  this.currentSong = {};

  this.initialize();
};

Playlist.prototype = {
  initialize: function(){
    this.data.songs.forEach(function(songData){
      this.songs.push(new Song(songData));
    }, this);

    this.skipTo(0);

    this.render();
  },

  skipTo: function(index){
    this.currentSong = this.songs[index];

    this.songs = this.songs.concat(this.songs.splice(0, index + 1))
    this.upcomingSongs = this.songs.slice(0, 5);

    this.render();

    this.currentSong.play();
  },

  next: function(){
    this.skipTo(0);
  },

  prev: function(){
    this.songs.unshift(this.songs.pop());
    this.upcomingSongs = this.songs.slice(0, 5);

    this.currentSong = this.songs[this.songs.length - 1];

    this.render();

    this.currentSong.play();
  },

  render: function(){
    $('.songs').empty();

    this.upcomingSongs.forEach(function(song){
      $(App.Templates.playlistEntry(song)).appendTo($('.songs'));
    });
  }
};
