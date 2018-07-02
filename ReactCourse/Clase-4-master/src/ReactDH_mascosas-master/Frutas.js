import React, {Component} from 'react' 
import ItemLista from './ItemLista'

const frutas = [
	{
		name:'manzana',
		isCitric:false
	},
	{
		name:'naranja',
		isCitric:true
	},
	{
		name:'pera',
		isCitric:false
	},
	{
		name:'limon',
		isCitric:true
	},
	{
		name:'banana',
		isCitric:false
	},
]

const citricos = frutas.filter(fruta => fruta.isCitric === true)
class Frutas extends Component{
	render(){
		return(
			<div>
				<h1>Lista de frutas</h1>
				<ul>
					{frutas.map((fruta, i) => <li key={fruta.name}>{fruta.name} </li>)}
				</ul>
				<h4>Cítricos</h4>
				<ul>
					{citricos.map((citrico, i) => <li key={citrico.name}>{citrico.name} es cítrico</li>)}
				</ul>	

				<ul>
					{frutas.map((fruta, i) => <ItemLista key={fruta.name} numero={i+1} nombre={fruta.name}/>)}
				</ul>		
			</div>

		)
	}
}


export default Frutas