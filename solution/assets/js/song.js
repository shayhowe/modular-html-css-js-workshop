var Song = function(data){
  this.id = data.id;
  this.title = data.name;
  this.artist = data.artist;
  this.album = data.album;
  this.artwork = data.icon400;
  this.duration = data.duration;
  this.playlistIndex = data.index;
};

Song.prototype = {
  render: function(){
    $('[data-player="title"]').html(this.title);
    $('[data-player="artist"]').html(this.artist);
    $('[data-player="artwork"]').css('background-image','url(' + this.artwork + ')');
  },

  play: function(){
    this.render();
    $('#player').rdio().play(this.id);
  }
};