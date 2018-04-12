import React from 'react';

const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
  return (
    <div>
      <h1> {name} </h1>
      <h5> Founded: {founded} </h5>
      <h5> Seats: {seats} </h5>
      <h5> Titles: {titles} </h5>
      <h5> Coat Of Arms: {coatOfArms} </h5>
      <h5> Ancestral Weapons: {ancestralWeapons} </h5> 
      <h5> Words: {words} </h5>
    </div>
  )
}

export default Card;