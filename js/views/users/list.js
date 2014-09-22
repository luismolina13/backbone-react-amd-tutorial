/**
 * @jsx React.DOM
 */
define([
  'jquery',
  'underscore',
  'backbone',
  'react',
  '../../collections/users'
], function($, _, Backbone, React, Users){ 

  var User =  React.createClass({
    render: function() {
      return (
        <tr key={this.props.id}>
          <td>{this.props.firstname}</td>
          <td>{this.props.lastname}</td>
          <td>{this.props.age}</td>
          <td><a className='btn' href={'#/edit/' + this.props.id}>Edit</a></td>
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
          <User firstname={user.attributes.firstname} lastname={user.attributes.lastname} age={user.attributes.age} id={user.attributes.id} />
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
      var users = new Users();
      var that = this;
      users.fetch({
        success: function (users) {
          that.$el.html(that.template);
          React.renderComponent(<UserList data={users} />, that.$('.user-list-container').get(0));
        }
      });
    }
  });

  return UserListView;
});