/**
 * @jsx React.DOM
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'react'
], function($, _, Backbone, React){

  var MyWidget = React.createClass({
    handleClick: function() {
      alert('Hello!');
    },
    render: function() {
      return (
        <a href="#" onClick={this.handleClick}>Do something!</a>
      );
    }
  });

  var UserListView = Backbone.View.extend({
    el: '.page',
    template: '<div class="user-list-container"></div>',
    render: function () {
      this.$el.html(this.template);
      React.renderComponent(new MyWidget(), this.$('.user-list-container').get(0));
      return this;
      // var that = this;
      // var users = new Users();
      // users.fetch({
      //   success: function (users) {
      //     var template = _.template($('#user-list-template').html(), {users: users.models});
      //     that.$el.html(template);
      //   }
      // })
    }
  });

  return UserListView;
});