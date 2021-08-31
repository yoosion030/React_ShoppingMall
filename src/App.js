
import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';

function App() {

  
  let [shoes,shoesRevise] = useState(Data);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as = {Link} to="/">Home</Nav.Link>
              <Nav.Link as = {Link} to="/detail">Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      

      <Route  exact path="/">
        <Jumbotron></Jumbotron>
        <div className="container">
          <div className="row">
          {
            shoes.map(function(a,i){
              return (
                <Shoes i = {i}></Shoes>
              );
            })
          }
          </div>
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes}/>
      </Route>
    </div>
  );
}
function Jumbotron(){
  return(
    <div className="jumbotron">
      <h1>20% Season Off</h1>
    </div>
  );
}
function Shoes(props){
  return(
    <div className="col-md-4">
            <img src={'https://codingapple1.github.io/shop/shoes'+ (props.i+1) + '.jpg'} alt="" />
            <h4>{Data[props.i].title}</h4>
            <p> {Data[props.i].content} & {Data[props.i].price} </p>
    </div>
  )
}


export default App;
