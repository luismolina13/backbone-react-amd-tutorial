// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'jsx!views/users/list',
  'jsx!views/users/edit'
], function($, _, Backbone, UserListView){

  $.ajaxPrefilter( function( options, originalOptions, jqXHR ) {
    options.url = 'http://backbonejs-beginner.herokuapp.com' + options.url;
  });

  var Router = Backbone.Router.extend({
        routes: {
          '': 'home', 
          'edit/:id': 'edit',
          'new': 'edit',
        }
    });

  var initialize = function(){

    var router = new Router();
    var userListView = new UserListView();
    // var userEditView = new UserEditView();

    router.on('route:home', function() {
      // render user list
      userListView.render();
    });

    router.on('route:edit', function(id) {
      userEditView.render({id: id});
    })

    Backbone.history.start();

  };
  return {
    initialize: initialize
  };
});