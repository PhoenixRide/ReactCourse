import React, { Component } from 'react'

const nombres = ['a', 'b', 'c']

class Titular extends Component{
	render(){
	return( 
		<React.Fragment>
	<h1> asdasd </h1>
	<h2> 1231243 </h2>

	<ul>
	{nombres.map((nombre, i) => (
		<li key={nombre+i}>
		 El Alumno Nro {i+1} es {nombre}</li>
	))}
	</ul>
	</React.Fragment>	
	)
	} 
}

export default Titular;
