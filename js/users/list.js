/**
 * @jsx React.DOM
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  '../../collections/users'
], function($, _, Backbone, React){ 

  var data = [
    {firstname: 'Pete', lastname:'Hunt', age:'20', id:'234'},
    {firstname: 'Jordan', lastname:'Walke', age:'40', id:'34'}
  ];

  var User =  React.createClass({displayName: 'User',
    render: function() {
      return (
        React.DOM.div({className: "user"}, 
          React.DOM.h3(null, "Hello")
        )
      );
    }
  });
          // <tr>
          //   <td>{this.props.firstname}</td>
          //   <td>{this.props.lastname}</td>
          //   <td>{this.props.age}</td>
          //   <td><a className='btn' href='#/edit/{this.props.id}'>Edit</a></td>
          // </tr>

  var UserList = React.createClass({displayName: 'UserList',
    handleClick: function() {
      alert('Hello!');
    },
    render: function() {
      var userNodes = this.props.data.map(function (user) {
        return (
          User({firstname: user.firstname, lastname: user.lastname, age: user.age, id: user.id})
        );
      });
      return (
        React.DOM.div(null, 
          React.DOM.a({href: "#/new", className: "btn btn-primary", onClick: this.handleClick}, "New"), 
          React.DOM.hr(null), 
          React.DOM.table({className: "table striped"}, 
            React.DOM.thead(null, 
              React.DOM.tr(null, 
                React.DOM.th(null, "First Name"), React.DOM.th(null, "Last Name"), React.DOM.th(null, "Age"), React.DOM.th(null)
              )
            ), 
            React.DOM.tbody(null, 
              User(null), 
              User(null)
            )
          )
        )
      );
    }
  });

  var UserListView = Backbone.View.extend({
    el: '.page',
    template: '<div class="user-list-container"></div>',
    render: function () {
      this.$el.html(this.template);
      React.renderComponent(UserList({data: data}), this.$('.user-list-container').get(0));
      // return this;
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