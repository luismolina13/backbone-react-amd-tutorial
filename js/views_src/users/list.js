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

  var User =  React.createClass({
    render: function() {
      return (
        <tr key={this.props.id}>
          <td>{this.props.firstname}</td>
          <td>{this.props.lastname}</td>
          <td>{this.props.age}</td>
          <td><a className='btn' href='#/edit/{this.props.id}'>Edit</a></td>
        </tr>
      );
    }
  });

  var UserList = React.createClass({
    handleClick: function() {
      alert('Hello!');
    },
    render: function() {
      var userNodes = this.props.data.map(function (user) {
        return (
          <User firstname={user.firstname} lastname={user.lastname} age={user.age} id={user.id} />
        );
      });
      return (
        <div>
          <a href='#/new' className='btn btn-primary' onClick={this.handleClick}>New</a>
          <hr />
          <table className='table striped'>
            <thead>
              <tr>
                <th>First Name</th><th>Last Name</th><th>Age</th><th></th>
              </tr>
            </thead>
            <tbody>
              {userNodes}
            </tbody>
          </table>
        </div>
      );
    }
  });

  var UserListView = Backbone.View.extend({
    el: '.page',
    template: '<div class="user-list-container"></div>',
    render: function () {
      this.$el.html(this.template);
      React.renderComponent(<UserList data={data} />, this.$('.user-list-container').get(0));
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