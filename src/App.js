import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomeGrid from './DataComponent/gridData'
import Login from './Login';
function App() {
  return (
    <div className="App ">

      <Router>
        <div><center>
          <h2 >React Sample Application</h2>

          <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Dashboard' component={HomeGrid} />
          </Switch>
        </center>
        </div>
      </Router>
    </div>
  );
}

export default App;
