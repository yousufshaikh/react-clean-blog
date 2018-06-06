import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import SamplePost from './components/SamplePost';
import Error from './components/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Switch>
            <Route path="/" component={Home} exact></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/contact" component={Contact}></Route>
            <Route path="/sample_post" component={SamplePost}></Route>
            <Route component={Error}></Route>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
