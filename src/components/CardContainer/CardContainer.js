import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

class CardContainer extends Component {

  render() {
    const housesToDisplay = this.props.houses.map( (house) => {
      return (
        <Card {...house}/>
      )
    })

    return(
      <div>
        <h1> I'm a Card Container </h1>
        {housesToDisplay}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps, null)(CardContainer)