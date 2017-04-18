import React, { Component } from 'react';


class LifeCycle extends Component {

  constructor (props) {
    super(props);
    // 1e étape de notre component lifecycle
  }

  componentWillMount() {
    // 2e etape avant que le component soit ajouté au DOM virtuel
  }

  componentDidMount() {
    // 3e etape quand le component a été ajouté au DOM virtuel
  }

  componentWillUpdate (nextProps, nextState) {
    // 5e etape quand le component va etre mis a jour.
  }

  componentDidUpdate (nextProps, nextState) {
    // 6e etape quand le component a ete mis a jour.
  }

  render () {
    // 4e etape ou autres Quand le DOM virtuel est retranscrit sur le DOM réel
    
    // this.setState déclenche un update de mon component.
    this.setState = ({
      greeting: 'Salut'
    });
    return (

      <div className="Lifecycle">
      </div>
    )
  }
}

// J'exporte mon component
export default LifeCycle;