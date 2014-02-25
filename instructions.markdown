# MAKE THE PLAYER WORK

## PART 1 - APP OVERVIEW

**STEP 1:**
* Create an object in `app.js` called `App`.
* Give it the properties: `RdioService`, `Templates`, `Player`, `Playlist`. Assign all these attributes a valued of any empty object.
* Give the object an `initialize` function - leave the function body empty for now.

**STEP 2:**
* Assign `App.RdioService` to a new instance of `RdioService`.

**STEP 3:**
* Inside the `initialize` function, create a new instance of the Player object and pass in the `playlist_id` of `p8056088`. Assign that new object to `App.Player`.

**STEP 4:**
* Take a look at `PLAYLIST_DATA.data`. Use the console to poke around and get familiar with the data structure.

## PART 2 - BUILD THE PLAYLIST OBJECT

**STEP 1:**
* Create a new object called `Playlist` in a file called `playlist.js`.
* Assign it to a constructor function that takes a parameter of `data`.
* Set some instance variables in that function: `data`, `songs`, `upcomingSongs` - `songs` and `upcomingSongs` should be empty arrays, and `data` should be assigned to the value of the `data` parameter passed in.

**STEP 2:**
* Create an `initialize` method on the prototype of the `Playlist` object - leave the function body empty for now.
* Call the `initialize` method from the constructor function after the instance variables are assigned.

## PART 3 - BUILD THE SONG OBJECT

**STEP 1:**
* Create a new object called `Song` in a file called `song.js`.
* Assign it to a constructor function that takes a parameter of `data`.
* Set some instance variables in that function:
  * `id` and assign it to `data.id`
  * `title` and assign it to `data.name`
  * `artist` and assign it to `data.artist`
  * `artwork` and assign it to `data.icon400`

** STEP 2:**
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

## PART 4 - RENDER THE SONG
**STEP 1:**
* Add data attributes to the markup in the places where the song information should be rendered - `data-player-title`, `data-player-artist`, `data-player-artwork`.

**STEP 2:**
* Create an `render` method on the prototype of the `Song` object.
* Use jQuery to render the song title, artist and artwork to the browser using the data attributes as your selectors.

## PART 5 - RENDER THE PLAYLIST
**STEP 1:**
* In the `Playlist` object, loop thru the songs in the playlist, create new `Song` objects and push them into the `songs` instance variable.


