import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '../../components/Card/Card';
import './CardContainer.css';
import PropTypes from 'prop-types';


class CardContainer extends Component {

  render() {

    const housesToDisplay = this.props.houses.map( (house) => {
      return (
        <Card key={house.name} {...house}/>
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

CardContainer.propTypes = {
  houses: PropTypes.arrayOf(PropTypes.object)
}

export default connect(mapStateToProps, null)(CardContainer)