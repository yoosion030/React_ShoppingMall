
import React, {useState} from 'react';
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap';
import './App.css';
import Data from './data.js';
import Detail from './Detail.js';

import { Link, Route, Switch } from 'react-router-dom';
import axios from 'axios';

function App() {

  let [shoes,shoesRevise] = useState(Data);
  let [roading,roadingRevise] = useState(true);
  let [remain,remainRevise] = useState([10,11,12]);
  let cnt =  0;

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand as = {Link} to = "/">React-Bootstrap</Navbar.Brand>
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
                  <Link to={'/detail/'+ i} className="shoes">
                    <Shoes shoes={shoes[i]} i={i}></Shoes>
                  </Link>
              );
            })
          }
          </div>
          <button className="btn btn-primary" onClick={()=> {

            // axios.post('서버URL',전달할 데이터);


            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((result)=>{
              shoesRevise( [...shoes, ...result.data] );
              roadingRevise(false);
            })
            .catch(()=>{

            })
          }}>더보기</button>
          {
            roading === true
            ? <Roading></Roading>
            : null
          }
        </div>
      </Route>
      <Route path="/detail/:id">
        <Detail shoes={shoes} remain={remain} remainRevise={remainRevise}/>
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
    <div>
        <img src={`https://codingapple1.github.io/shop/shoes${props.i+1}.jpg`} alt="" />
        <h4>{props.shoes.title}</h4>
        <p> {props.shoes.content} & {props.shoes.price} </p>
    </div>
  );
}
function Roading(){
  return(
    <div>로딩중입니다.</div>
  );
}





export default App;
