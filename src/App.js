import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeContainer from './components/Home/homeContainer';
import DetailsContainer from './components/Description/DetailsContainer';
import Navigation from './components/Nav/navBar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation />
        <Routes>
          <Route exact path="/" element={<HomeContainer />} />
          <Route path="/details/:id" element={<DetailsContainer />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
