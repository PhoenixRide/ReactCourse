import axios from 'axios'

class StarWarsApi {
  constructor() {
    this.axios = axios.create({
      baseURL: 'https://swapi.co/api'
    })
  }

  getPlanets = () => (
    this.axios.get(`/planets`).then(response => response.data.results)
  );

  getPeopleByUrl = (url) => (
    this.axios.get(url).then(response => response.data)
  );

  getResidents = (urls) =>
    Promise.all(
      urls.map(this.getPeopleByUrl)
    )
}

export default StarWarsApi
