var Song = function(data){
  this.name = data.name;
  this.artist = data.artist;
  this.album = data.album;
  this.artwork = data.icon;
  this.artworkLarge = data.icon400;
};

Song.prototype = {
  renderToPlayer: function(){
    $('[data-player="title"]').html(this.name);
    $('[data-player="artist"]').html(this.artist);
    $('[data-player="artwork"]').css('background-image','url(' + this.artworkLarge + ')');
  },

  addToPlaylist: function(){
    // rand = Math.floor(Math.random() * 100000000);

    var dup = $('[data-playlist="template"]').clone();
    dup.attr('data-playlist','song'); // reset the data attribute from template to song
    dup.removeClass('js-template');

    // dup = template.clone();
    // dup.setAttribute('data-playlist', rand);

    dup.find('[data-playlist="title"]').html(this.name);
    dup.find('[data-playlist="artist"]').html(this.artist);
    dup.find('[data-playlist="artwork"]').attr("src", this.artwork);


    dup.appendTo($('.songs'));
  },

  removeFromPlaylist: function(){

  },

  playSong: function(){
    this.renderToPlayer();
  }
};