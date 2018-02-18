import {Container} from 'unstated'

class LocationsContainer extends Container {
  state = {
    locations: [],
    isFetching: false
  }
  async fetchLocations() {
    this.setState({
      isFetching: true
    })
    try {
      const data = await fetch('https://swapi.co/api/people/')
      const json = await data.json()
      this.setState({
        locations: json.results,
        isFetching: false
      })
    } catch (err) {
      console.log('error: ', err)
    }
  }
}


export {
  LocationsContainer
}