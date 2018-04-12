import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../Card/Card';

class CardContainer extends Component {
  render() {
    return(
      <h1> I'm a Card Container </h1>
    )
  }
}

const mapStateToProps = (state) => {
  houses: state.houses
}
export default connect(mapStateToProps, null)(CardContainer)