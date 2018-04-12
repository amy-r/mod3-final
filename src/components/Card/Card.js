import React, { Component } from 'react';
import { getMembers } from '../../helper/helper';
import './Card.css';
import PropTypes from 'prop-types';

class Card extends Component {
  constructor() {
    super();
    this.state = {
      swornMembers: [],
      names: []
    }
  }
    
  handleClick = async () => {
    const members = await this.state.swornMembers.map( async (url)  => {
      const response = await getMembers(url);
      return response.name
    })
    const names = await Promise.all(members)
    this.setState({ names })
    console.log(this.state.names)
  }

  componentDidMount = () => {
    this.setState({swornMembers: this.props.swornMembers})
  }

  showMembers = () => {
    if (this.state.names.length) {
      return this.state.names.map( (name) => {
        return <p className='name'> {name}, </p>
      })    
    }
  }

  render() {
    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words, swornMembers} = this.props
    return (
      <div className ='Card' onClick ={this.handleClick}>
        <h2> {name} </h2>
        <h3> Founded: {founded} </h3>
        <p> Seats: {seats} </p>
        <p> Titles: {titles} </p>
        <p> Coat Of Arms: {coatOfArms} </p>
        <p> Ancestral Weapons: {ancestralWeapons} </p> 
        <p> Words: {words} </p>
        <p> Sworn Members:</p> 
        <div className = 'members'>
          {this.showMembers()}
        </div>  
      </div>
    )
  }
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  founded: PropTypes.string.isRequired,
  seats: PropTypes.arrayOf(PropTypes.string).isRequired,
  titles: PropTypes.arrayOf(PropTypes.string).isRequired,
  coatOfArms: PropTypes.string.isRequired,
  ancestralWeapons: PropTypes.arrayOf(PropTypes.string).isRequired,
  words: PropTypes.string.isRequired,
  swornMembers: PropTypes.arrayOf(PropTypes.string).isRequired
};
export default Card;