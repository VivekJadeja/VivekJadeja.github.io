import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './App.css';

import NavBar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: "Vivek Jadeja",
      headerLinks: [
        { title: "Home", path: '/' },
        { title: "About", path: '/about' },
        { title: "Contact", path: '/contact' },
        { title: "Gallery", path: '/gallery' }
      ],
      home: {
        title: "Vivek Jadeja",
        subTitle: "Software Engineer. Baker. Adventurer.",
        text: "Always Learning"
      },
      about: {
        title: "What's There To Know?"
      },
      gallery: {
        title: "My Creations"
      },
      contact: {
        title: "Send Me A Message"
      }
    }
  }

  render() {
    return (
      <Router>
        {/* <Container className="p-0" fluid={true}> fluid true means no margins */}
        <NavBar />
        {/*This Route stuff basically says that when we are
          on a certain path, render a certain component. These paths
          render these components. The exact looks for the exact match. 
          If we didn't have exact on / there and wanted to go to /about,
          then it would just go to /.*/}
        <Switch>
          <Route path="/" exact render={() => <HomePage title={this.state.home.title} subTitle={this.state.home.subTitle} text={this.state.home.text} />} />
          <Route path="/about" render={() => <AboutPage title={this.state.about.title} />} />
          <Route path="/gallery" render={() => <GalleryPage title={this.state.gallery.title} />} />
          <Route path="/contact" render={() => <ContactPage title={this.state.contact.title} />} />
          <Route component={() => <div>Not Found</div>} />
        </Switch>
        <Footer />
        {/* </Container> */}
      </Router>
    );
  }
}

export default App;

// https://react-bootstrap.github.io/components/navbar/

// https://nextjs.org/
// https://blog.bitsrc.io/improving-seo-of-react-apps-with-react-helmet-7b79fb8774f4
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container
