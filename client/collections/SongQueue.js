// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function(){
      if(this.length === 1){
        this.playFirst();
      }
    }, this);

    this.on('ended', function() {
      console.log('has ended');
      this.remove(this.at(0));
      if(this.length >= 1){
        this.playFirst();
      }
    }, this);

    this.on('dequeue', function(song) {
      this.dequeue(song);
    }, this);

    this.on('removed', function(song){
      if (song.title === this.at(0).title) {
        this.dequeue(song);
        this.playFirst();
      } else {
        this.dequeue(song);
      }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  },

  dequeue: function(song) {
    this.remove(song);  
  }

});