import React, { Component } from "react";
import { hot } from "react-hot-loader";
import Footer from "./components/Common/Footer";
import Header from "./components/Common/Header";
import GlobalStyled from "./components/Common/GlobalStyled";
import "./styles.css";
import Cover from "./components/Common/Cover";
import Services from './components/Services';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cover />
        <Services />
        <Footer />
        <GlobalStyled />
      </div>
    );
  }
}

export default hot(module)(App);
