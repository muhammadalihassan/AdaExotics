import React, { Component, useEffect } from 'react';
import ReactDOM, { render } from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import About_slider from '../src/Views/About_slider/Index';
import Header from './Extends/Header';
import Footer from './Extends/Footer';
import reportWebVitals from './reportWebVitals';
import { Container, Row, Col } from 'react-bootstrap';




import $ from 'jquery';



class Hello extends Component {
  
  componentDidMount() {
   
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}



// NEW
class Main extends React.Component {
  render() {
    return (
      <BrowserRouter basename='/adaExotics'>
    
            <header className="pageheader">
              <Header />
            </header>
            
            {/* <App /> */}
            <Routes>
            <Route path="/" element={<App />} className='ppp'/>
            <Route path="/About_slider" element={<About_slider/>} />
            </Routes>
            <Hello />
            <footer>
              <Footer />
            </footer>

      </BrowserRouter>
    );
  }
}
ReactDOM.render(<Main />, document.getElementById("root"));
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();