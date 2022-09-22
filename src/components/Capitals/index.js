import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

class Capitals extends Component {
  state = {
    country: countryAndCapitalsList,
    selectedCountry: countryAndCapitalsList[0].country,
    selectedCapital: countryAndCapitalsList[0].capitalDisplayText,
  }

  onClickSelectedCountry = id => {
    this.setState(prevState => ({
      country: prevState.country.map(eachCountry => {
        if (id === eachCountry.id) {
          console.log(eachCountry)
        }
        return {eachCountry}
      }),
    }))
  }

  render() {
    const {selectedCountry, selectedCapital} = this.state
    return (
      <div className="bg-container">
        <div className="result-card">
          <h1 className="heading">Countries And Capitals</h1>
          <input
            value={selectedCapital}
            onChange={this.onClickSelectedCountry}
            type="search"
          />
          <h1>{selectedCountry}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
