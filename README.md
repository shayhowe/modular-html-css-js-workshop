# Front End Legos Workshop

* [Presentation Slides](TODO: ADD LINK)
* [Workshop Files](https://github.com/shayhowe/front-end-legos-workshop-2/archive/master.zip)

You&#8217;ve been tasked with developing a new front end feature. HTML, CSS, and JavaScript are nothing new to you, in fact you even know a few tricks to get this feature out the door. It doesn&#8217;t take you long and the code works like a charm, yet you have a looming suspicion that some of the code might not be up to par. You&#8217;re likely right, and you&#8217;re definitely better than that.

We often write code without paying attention to the bigger picture, or overall code base. Upon stepping back we notice areas of duplicate code, ripe for refactoring. It&#8217;s time to build more modular front ends, focusing on the reusability of HTML, CSS, and JavaScript, and to take maintainability to heart.

## Assembling Layout

**Step 1**

* Within the playlist, position the album artwork to the left of the song title and artist name
* Keep the album artwork vertically centered with the song title and artist name

**Step 2**

* Add a &#8220;Currently loading&#8230;&#8221; section at the top of the file to be used before the playlist loads

## Accommodating Content

**Step 1**

* Add previous, play, and next controls within the player
* Make the previous and next controls slightly smaller than the play control
* Keep all controls vertically centered

**Step 2**

* Add favorite and share controls within each song in the playlist

**Step 3**

* Animate the player controls to appear from the bottom upon hovering over the player
* Animate the song controls to appear from the right upon hovering over a song
* Add hardware acceleration to each of the animations

## Setting Up the JavaScript Application

**Step 1**

* Our application will be using a few JavaScript libraries, let&#8217;s load these files on the page
* We can load [jQuery](http://jquery.com/) and [Handlebars](http://handlebarsjs.com/) from a CDN:

```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.0/jquery.min.js"></script>
<script src="http://cdnjs.cloudflare.com/ajax/libs/handlebars.js/1.3.0/handlebars.min.js"></script>
```

* Add local files that allow us to interact with Rdio:

```
<script src="assets/js/vendor/jquery.rdio.js"></script>
<script src="assets/js/vendor/rdio-service.js"></script>
<script src="assets/js/player.js"></script>
<script src="assets/js/settings.js"></script>
```

* Load a JSON file with our playlist data (to prevent us from having to constantly hit Rdio during development):

```
<script src="data/playlist.json"></script>
```

* Look at `PLAYLIST_DATA.data` and use the console to familiarize yourself with the data structure

**Step 2**

* Create an object in `app.js` called `App` and load the script on the page:

```
<script src="assets/js/app.js"></script>
```

* Give the `App` object `RdioService`, `Templates`, `Player`, and `Playlist` properties, and assign all these properties a value of any empty object
* Give the object an `initialize` function &#8212; leave the function body empty for now

**Step 3**

* Assign `App.RdioService` to a new instance of `RdioService`

**Step 4**

* Inside the `initialize` function, create a new instance of the Player object and pass in a `playlistId` key with a value of `p8056088`
* Assign that new object to `App.Player`
* Call `initialize` on document ready so that the application boots when the page loads:

```
$(document).ready(function() {
  ...
});
```

* Take a look at `App.Player.playlistData` in the console, the data should look the same as `PLAYLIST_DATA.data`

## Building the Playlist Object

**Step 1**

* Create a new object called `Playlist` in a file called `playlist.js` and load the script on the page:

```
<script src="assets/js/playlist.js"></script>
```

* Assign it to a constructor function that takes a parameter of `data`
* Set some instance variables in that function: `data`, `songs`, `currentSong`
  * Initalize `songs` with an empty arrays
  * Initalize `currentSong` with an empty object
  * Assign `data` to the value `data` parameter passed in to the constructor

**Step 2**

* Create an `initialize` method on the prototype of the `Playlist` object &#8212; leave the function body empty for now
* Call the `initialize` method from the constructor function after the instance variables are assigned

**Step 3**

* Back in the `player.js` file, find the `getPlaylistData` callback *(Hint: it&#8217;s where the `self.playlistData = data` assignment happens)*
* In that callback function, create a new Playlist object and assign it to `App.Playlist`
* Pass the callback `data` into the new Playlist object
* Take a look at `App.Playlist.data` in the console, the data should look the same as `PLAYLIST_DATA.data` and `App.Player.playlistData`

## Building the Song Object

**Step 1**

* Create a new object called `Song` in a file called `song.js` and load the script on the page:

```
<script src="assets/js/song.js"></script>
```

* Assign it to a constructor function that takes a parameter of `data`
* Set some instance variables in that function:
  * `id` and assign it to `data.id`
  * `title` and assign it to `data.name`
  * `artist` and assign it to `data.artist`
  * `artwork` and assign it to `data.icon400`

**Step 2**

* Test it out the new `Song` object with the following code:

```
data = {
  "id": "t8209409",
  "radioKey": "sr8209409",
  "baseIcon": "album/2/b/5/00000000000a85b2/1/square-200.jpg",
  "artistUrl": "/artist/Architecture_In_Helsinki/",
  "duration": 220,
  "album": "Contact High",
  "albumUrl": "/artist/Architecture_In_Helsinki/album/Contact_High/",
  "shortUrl": "http://rd.io/x/QHlRKz4bUw/",
  "albumArtist": "Architecture In Helsinki",
  "canStream": true,
  "embedUrl": "https://rd.io/e/QHlRKz4bUw/",
  "trackNum": 1,
  "albumArtistKey": "r86460",
  "icon": "http://rdio1img-a.akamaihd.net/album/2/b/5/00000000000a85b2/1/square-200.jpg",
  "name": "Contact High",
  "artistKey": "r86460",
  "url": "/artist/Architecture_In_Helsinki/album/Contact_High/track/Contact_High/",
  "icon400": "http://rdio3img-a.akamaihd.net/album/2/b/5/00000000000a85b2/1/square-400.jpg",
  "artist": "Architecture In Helsinki",
  "albumKey": "a689586"
}

mySong = new Song(data)
```

## Rendering the Song

**Step 1**

* Add data attributes to the markup in the places where the song information should be rendered, we&#8217;ll use: `data-player-title`, `data-player-artist`, `data-player-artwork`
* Be sure to get both places for the artwork attribute

**Step 2**

* Create an `render` method on the prototype of the `Song` object
* Use jQuery to render the song title, artist and artwork to the browser using the data attributes as your selectors

## Rendering the Playlist

**Step 1**

* In the `initialize` method `Playlist` object use a `forEach` loop to create new `Song` objects from each song entry in the `data` object
* Push those objects into the `songs` array in the `Playlist` object
* Take a look at `App.Playlist.songs` in the console, you should see a bunch of `Song` objects
* See if you can render one of them. *(Hint: `App.Playlist.songs[2].render()`)*

**Step 2**

* Now we need to create a Handlebars template so that we can render each song to the player&#8217;s playlist
* Add a script tag with the type of `text/x-handlebars-template` and add the `data-template-song` data attribute (This will be the container for the Handlebars template)
* Copy one of the `li`s from the existing markup and paste it inside the Handlebars container
* Add Handlebars variables for each of dynamic pieces of the template (`title`, `artist` and `artwork`) (Variables in Handlebars are defined by double curly braces, i.e. `{{myVariable}}`)

**Step 3**

* Add the template to the `App.Templates` object and give it the name `playlistSong`
* Use the Handlebars.compile function like so: `Handlebars.compile($('[data-template-song]').html())`
* Test the template rendering with the following code:

```
data = {
  title: "Contact High",
  artist: "Architecture In Helsinki",
  artwork: "http://rdio3img-a.akamaihd.net/album/2/b/5/00000000000a85b2/1/square-400.jpg"
}

App.Templates.playlistSong(data)
```

**Step 4**

* Add a data attribute of `data-song-list` to the `ul` tag that wraps all of the list items in the playlist
* Remove all the static `li` elements from the playlist, leaving just the wrapping `ul` tag
* Create a `render` method in the `Playlist` object to render the playlist
* We only want to display the next 5 songs on the playlist, so use the `slice` function to get the first 5 songs from the `songs` array
* Now, use a `forEach` loop the render each object in your new array and append it to the `data-song-list` `ul` node
* Try out your new render method by calling `App.Playlist.render()` in the console

**Step 5**

* At the beginning of the render method, assign the first song in the `songs` array to `currentSong` so that we can render that song to the player
* Since the first song is now our `currentSong`, let move that element to the bottom of the array using the following code:

```
this.songs = this.songs.concat(this.songs.splice(0, 1));
```
* Call `render` on `currentSong`, and add a call to `render` into the `initialize` method in `Playlist`
