import React, {Component} from 'react';
import {Card} from 'semantic-ui-react';
import axios from 'axios';

class User extends Component {

  componentWillMount () {
    this.state = {users:[]};
    const componentInstance = this;

    axios.get('http://localhost:8080/utilisateurs')
    .then( (response) => {
      componentInstance.setState({users: response.data});
    })
    .catch( (err) => {
      console.log('Failed to get users :::', err);
    });
  }

  render () {
    return (
      <div>
        {
          this.state.users.map( 
            user =>
            <Card key={user.id}
              image="https://d13yacurqjgara.cloudfront.net/users/791595/screenshots/2346542/user-police_1x.png"
              header={user.username}
              description={user.roles[0]}
            />
          )
        }
      </div>
    )
  }
};

export default User;