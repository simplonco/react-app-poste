import React, {Component} from 'react';
import {Image, Segment, Header, Divider} from 'semantic-ui-react';

// Pour importer une image dans React
// Je déclare une variable qui import la source de mon image
// Je n'ai plus qu'à définir cette variable dans ma source
// <Image src={maVarSource} />
import landscape from './head.jpg';

class Head extends Component {
  render() {
    return (
      <div>
        <Image  src={landscape} dimmer/>
        <Segment basic>
          <Header as="h2" color="grey">Mon blog de voyage</Header>
        </Segment>
        <Divider section />
      </div>
    )
  }
}

export default Head;