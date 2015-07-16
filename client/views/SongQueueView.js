// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  // initialize: function() {
  // },

  // render: function() {
  //   return this.$el;
  // }

  tagName: "table",

  initialize: function() {
    console.log('init: ', this.collection);
    this.collection.on('change', function(){ console.log('change');this.render() }, this);
    this.render();
  },

  updateQueue: function(collection) {
    debugger;
    this.collection = collection;
    this.render();
  },

  render: function(){
    // to preserve event handlers on child nodes, we must call .detach() on them before overwriting with .html()
    // see http://api.jquery.com/detach/
    console.log('rendered');
    this.$el.children().detach();

    this.$el.html('<th>Song Queue</th>').append(
      console.log(this.collection),
      this.collection.map(function(song){
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }
});
