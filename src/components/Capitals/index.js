import './index.css'

import {Component} from 'react'

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

// Write your code here
const Options = props => {
  const {country} = props
  const {capitalDisplayText, id} = country
  return <option value={id}>{capitalDisplayText}</option>
}

class Capitals extends Component {
  state = {country: 'India', capital: 'NEW_DELHI'}

  onChangeCountry = event => {
    console.log(event.target.value)
    const countryObject = countryAndCapitalsList.filter(
      eachCountry => eachCountry.id === event.target.value,
    )
    console.log(countryObject)
    this.setState({
      capital: countryObject[0].capitalDisplayText,
      country: countryObject[0].country,
    })
  }

  render() {
    const {capital, country} = this.state

    return (
      <div className="background-card">
        <div className="capital-card">
          <h1>Countries and Capitals</h1>
          <div className="question-card">
            <select onChange={this.onChangeCountry}>
              {countryAndCapitalsList.map(eachCountry => (
                <Options country={eachCountry} key={eachCountry.id} />
              ))}
            </select>
            <p>is capital of Which country ?</p>
          </div>
          <h1>{country}</h1>
        </div>
      </div>
    )
  }
}

export default Capitals
