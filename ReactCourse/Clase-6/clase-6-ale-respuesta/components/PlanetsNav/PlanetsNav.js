import React from 'react'
import PropTypes from 'prop-types'
import Item from './Item'

const PlanetsNav = ({planets, onClickPlanet}) => (
  <ul>
    {planets.map(planet => (
      <li key={planet.url}>
        <Item onClick={onClickPlanet(planet)} name={planet.name}/>
      </li>
    ))
    }
  </ul>
)

PlanetsNav.propTypes = {}

export default PlanetsNav
