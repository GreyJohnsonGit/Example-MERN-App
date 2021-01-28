import { 
  Route, 
  Switch, 
  Redirect, 
  BrowserRouter as Router
} from 'react-router-dom';
import {useState} from 'react';

import './App.css';
import HeaderCarousel from "./components/HeaderCarousel"
import NavBar from "./components/NavBar"

import NotFound from './views/NotFound';
import Home from './views/Home';
import Post from './views/Post';



function App() {
  let [username, setUsername] = useState("")

  return (
    <Router>
      <div id='page-container'>
        <NavBar/>
        <HeaderCarousel/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Redirect to="/Home"/>
            </Route>
            <Route exact path="/Home" render={(props) => <Home {...props}/>}/>
            <Route exact path="/Post" username={username} render={(props) => <Post {...props}/>}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
