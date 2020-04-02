import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

const App = () => {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route path='/react-app-portfolio-update/'>
              <Home />
            </Route>
            <Route exact path='/react-app-portfolio-update/about'>
              <About />
            </Route>
            <Route exact path='/react-app-portfolio-update/portfolio'>
              <Portfolio />
            </Route>
            <Route exact path='/react-app-portfolio-update/contact'>
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  )
}

export default App