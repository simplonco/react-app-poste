import React, { Component } from 'react';
import {Image, Segment, Header, Divider} from 'semantic-ui-react';

class Head extends Component {
  render() {
    return (
      <div>
        <Image src="http://allswalls.com/images/mountains-landscapes-wallpaper-6.jpg" fluid />
        <Segment basic>
          <Header as='h2' color='grey'>Mon blog de voyage</Header>
        </Segment>
        <Divider section />
      </div>
    );
  }
}

export default Head;