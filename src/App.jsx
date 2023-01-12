import React, { Component } from 'react'
import PersonCard from './components/PersonCard'

export class App extends Component {
  render() {
    return (
      <div className='container border border-secondary my-3 p-3'>
        <PersonCard personName='Doe, Jane' age={45} hairColor='Black' />
        <PersonCard personName='Smith, John' age={88} hairColor='Brown' />
        <PersonCard personName='Fillmore, Millard' age={50} hairColor='Brown' />
        <PersonCard personName='Smith, Maria' age={62} hairColor='Brown' />
      </div>
    )
  }
}

export default App