import React from 'react';

const Card = ({ name, founded, seats, titles, coatOfArms, ancestralWeapons, words }) => {
  return (
    <div className ='Card'>
      <h2> {name} </h2>
      <h3> Founded: {founded} </h3>
      <p> Seats: {seats} </p>
      <p> Titles: {titles} </p>
      <p> Coat Of Arms: {coatOfArms} </p>
      <p> Ancestral Weapons: {ancestralWeapons} </p> 
      <p> Words: {words} </p>
    </div>
  )
}

export default Card;