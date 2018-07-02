import React, { Component } from 'react'
import PropTypes from '' // ver de donde! 



class Contador extends Component {

contructor(props) { 
	super(props)

// Siempre tiene que ser un objeto literal.prop tmb es un objeto literal

	this.state = {
	const {total}: props.initialValue 
	}
	// event es el parametro que recibe la arrowfunction 
	handleOnClick = event => {
		alert('click')
	}
}
render () {

	const {total} = this.state
	return <div onClick={this.handleOnClick}> Soy un contador { total}
</div>
}

}  




// Statelesss const Contador = () => <div> Soy un contador </div>

Contador.prototypes = {

}





export default Contador