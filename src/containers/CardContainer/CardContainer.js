import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import './CardContainer.css';

class CardContainer extends Component {

  render() {
    const housesToDisplay = this.props.houses.map( (house) => {
      return (
        <Card {...house}/>
      )
    })

    return(
      <div className ='CardContainer'>
        {housesToDisplay}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  houses: state.houses
})

export default connect(mapStateToProps, null)(CardContainer)