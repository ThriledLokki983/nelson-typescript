import {
  BrowserRouter as Router, 
  Route, 
  Switch, 
} from 'react-router-dom'; 
import HomePage from './pages/HomePage'
import './main.css'

function App() {
  return (
  <Router>
  <div className='App'>
    <Switch>
      <Route path='/' component={HomePage} exact/>
    </Switch>
  </div>
  </Router>

  )
}

export default App
