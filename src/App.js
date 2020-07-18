import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import NavbarComponent from './components/navbar/Navbar';
import HomeComponent from './components/home/home';
import ConnnectComponent from './components/connect/connect'
import FooterComponent from './components/footer/footer';
import './App.css';

class App extends React.Component {
  constructor (props) {
    super (props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <NavbarComponent pageChange={this.handlePageChange} />
          <Switch>
            <Route exact path="/Home" component={HomeComponent}/>
            <Route path="/Connect" component={ConnnectComponent} />
          </Switch>
        </Router>
        <FooterComponent />
      </div>
    );
  }
}

export default App;
