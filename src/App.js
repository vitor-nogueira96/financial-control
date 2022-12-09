import React from 'react'
import Header from './components/Header'
import Resume from './components/Resume/Resume'
import Form from './components/Form/Form'
import './styles/App.css'


const App = () => {
  return (
    <div>
      <Header />
      <Resume />
      <Form />
    </div>
  )
}

export default App