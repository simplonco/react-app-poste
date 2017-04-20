import React, {Component} from 'react';
import {Container, Grid, Card, Icon} from 'semantic-ui-react';

import items from './items.json'

class Items extends Component {
  render () {
    return (
      <Container>
        <Grid columns='three'>
            {
              items.trips.map(
                (trip, i) =>
                  <Grid.Column key={i}>
                    <Card
                      image={trip.url}
                      header={trip.place}
                      description={trip.description}
                      extra={
                        (
                          <a>
                            <Icon name="heart" />
                            {trip.likes} Likes
                          </a>
                        )
                      }
                    />
                  </Grid.Column>
              )
            }
        </Grid>
      </Container>
    )
  }
}

export default Items;