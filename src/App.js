import React from 'react';
import  {Route, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './App.css';
import LandingPage from './components/LandingPage';
import Signin from './components/Signin';

function App() {
  return (
    <>
    <Router>
        <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/signin" element={<Signin/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
