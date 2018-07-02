import axios from 'axios';
import People from '../models/People';
class StarWarsApi {
constructor () {
	this.axios.create({
		baseURL: 'https://swapi.co/api',
		params: {
			headers: {'Access-Control-Allow-Origin': "*"},

			},
		})

	}

	listPeople = () => {
		return this.axios.get('/people').then(response => {
			return response.data.results.map(result => new People(result.name))
		})
	}
}

export default StarWarsApi;
// import StarWarsApi from '../Servicios/StarWarsApi'