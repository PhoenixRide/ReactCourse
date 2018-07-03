import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import PlanetsNav from './components/PlanetsNav'
import StarWarsApi from "./apis/StarWarsApi";

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: '',
      loading: true,
      planets: [],
      selectedPlanet: null,
      loadingResidents: false,
      residents: []
    }

    this.starWarsApi = new StarWarsApi()
  }

  componentDidMount() {
    this.starWarsApi.getPlanets().then(planets => {
      this.setState({ loading: false, planets })
    })
  }

  handleOnClickPlanet = planet => event => {
    event.preventDefault()

    this.setState({ selectedPlanet: planet, residents: [] })
    if (planet.residents.length) {
      this.setState({ loadingResidents: true })
      this.starWarsApi.getResidents(planet.residents).then(
        residents => {
          this.setState({ residents, loadingResidents: false })
        }
      ).catch(error => {
          this.setState({ error: error.message, loadingResidents: false })
        }
      )
    }
  }

  render() {
    const { planets, loading, selectedPlanet, residents, loadingResidents, error } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {error != '' && <div>{error}</div>}
        {loading && <div>Loading...</div>}
        {!loading && <div className="App-intro">
          Planetas: <PlanetsNav planets={planets} onClickPlanet={this.handleOnClickPlanet}/>
        </div>}
        {selectedPlanet && (
          <div>
            {loadingResidents && <div>Loading...</div>}
            {!loadingResidents && residents.length > 0 && (
              <div>
                <h2>En el planeta {selectedPlanet.name} viven:</h2>
                <ul>
                  {residents.map(resident => (
                    <li key={resident.name}>{resident.name}</li>
                  ))}
                </ul>
              </div>
            )}
            {!loadingResidents && residents.length === 0 && (
              <h2>En el planeta {selectedPlanet.name} no hay residentes</h2>
            )}
          </div>
        )}
      </div>
    )
  }
}

export default App;
