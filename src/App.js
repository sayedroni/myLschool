
import './App.css';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router,Switch,Route, NavLink } from 'react-router-dom';
import Home from './components/Home/Home';
import Allservice from './components/allservice/Allservice';
import About from './components/About/About';
import Sold from './components/Sold/Sold';
import Notfound from './components/Notfound/Notfound';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <NavLink className="logo" to="/home">MY LEARNING SCHOOL</NavLink>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
    </Nav>
    <Nav>
    <NavLink to="/home"activeStyle={{color:"blue"}}>Home</NavLink>
    <NavLink to="/about"activeStyle={{color:"blue"}}>About Us</NavLink>
    <NavLink to="/service"activeStyle={{color:"blue"}}>Service</NavLink>
    <NavLink to="/sold"activeStyle={{color:"blue"}}>Sold</NavLink>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/home">
          <Home></Home>
          </Route>
          <Route path="/about">
          <About></About>
          </Route>
          <Route path="/service">
          <Allservice></Allservice>
          </Route>
          <Route path="/sold">
         <Sold></Sold>
          </Route>
          <Route path="*">
          <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
   <Footer></Footer>
  
    </div>
  );
}

export default App;
