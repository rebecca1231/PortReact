import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import Home from "./Pages/Home"
import Contact from './Pages/Contact'
import About from './Pages/About'
import Footer from './Components/Footer';
import Jumbo from './Components/Jumbo'


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

class App extends React.Component {
  state = {
    title: "Rebecca Hirai",
    headerLinks: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      { title: "Contact", path: "/contact" },
    ],
    home: {
      title: "Dream it.",
      subTitle: "Believe it.  Build it.",
      text: "Dynamic, relevant programs.",
    },
    about: {
      title: "About Me",
    },
    contact: {
      title: "Get in touch",
    },
  };

  render() {
    return (
      <Router>
        <Container className="p-0" fluid>
          <Navbar bg="transparent" expand="lg">
            <Navbar.Brand>Rebecca Hirai</Navbar.Brand>
            <Navbar.Toggle
              className="border-0"
              aria-controls="basic-navbar-nav"
            />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav fill className="ml-auto" >
                <Nav.Item>
                  <Nav.Link as={Link} to="/">
                    Home{" "}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to="/about">
                    About{" "}
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link as={Link} to="/contact">
                    Contact{" "}
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <hr />



          {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
          <Switch>
            <Route exact path="/">
              <Home
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            </Route>
            <Route path="/about">
              <About 
               title={this.state.about.title}
               subTitle={this.state.about.subTitle}
               text={this.state.about.text}
              />
            </Route>
            <Route path="/contact">
              <Contact 
               title={this.state.contact.title}
               subTitle={this.state.contact.subTitle}
               text={this.state.contact.text}
              />
            </Route>
          </Switch>
        <Jumbo />
        <Footer />
        </Container>
      </Router>
    );
  }
}

// You can think of these components as "pages"
// in your app.




export default App;
