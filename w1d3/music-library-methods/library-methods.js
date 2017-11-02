// generates a unique id
// (use this for addTrack and addPlaylist)

var uid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },

  // prints a list of all playlists, in the form:
  // p01: Coding Music - 2 tracks
  // p02: Other Playlist - 1 tracks

  printPlaylists: function(){
    for(list in this.playlists){
      console.log(
        list, ":", this.playlists[list].name, "-", this.playlists[list].tracks.length, "tracks"
      );
    }
  },

  // prints a list of all tracks, in the form:
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)
  // t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks: function(){
    for(track in this.tracks){
      console.log(
        track, ":", this.tracks[track].name, "by ", this.tracks[track].artist, "(" ,this.tracks[track].album , ")"
      );
    }
  },

  // prints a list of tracks for a given playlist, in the form:
  // p01: Coding Music - 2 tracks
  // t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
  // t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist: function(playlistId){
    var list = this.playlists[playlistId];
    console.log(
        list.id, ":" , list.name, "-" , list.tracks.length ,"tracks"
    )

    for(track in list.tracks){
      var trackKey = list.tracks[track];
      console.log(
        trackKey, ":", this.tracks[trackKey].name, "by", this.tracks[trackKey].artist, "(", this.tracks[trackKey].album, ")"
      );
    }
  },

  // adds an existing track to an existing playlist

  addTrackToPlaylist: function (trackId, playlistId) {
    var list = library.playlists[playlistId]
    console.log(list.tracks);
    list.tracks.push(trackId);
    console.log(list.tracks);
  },

  // adds a track to the library

  addTrack: function (name, artist, album) {
    var id = "t" + uid();
    console.log(library.tracks)
    library.tracks[id] = {
      id: id,
      name: name,
      artist: artist,
      album: album
    }
    console.log(library.tracks)
  },

  // adds a playlist to the library

    addPlaylist: function (name) {
    var id = "p" + uid();
    console.log(library.playlists);
    library.playlists[id] = {
      id: id,
      name: name,
      tracks: ''
    }
    console.log(library.playlists);
  }

}


// library.printPlaylists();
// library.printTracks();
// library.printPlaylist("p01");
// library.addTrackToPlaylist("t03","p01");
//  library.addTrack("Photograph", "Ed Sheeran", "X")
library. addPlaylist("Favorites");



