import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";


function Header(props){
  let today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    return(
      <section id="header-sec">
        <Row id="masthead">
          <Col xs={6}>
            <span>
              <i className="fas fa-bars"></i>&nbsp;
              Sections
            </span>
            <span>
              <i className="fas fa-search"></i>&nbsp;
              Search
            </span>
          </Col>
          <Col id="top-right" xs={6}>
            <a href="http://www.google.com/"> asmothers...</a><i className ="fas fa-cogs"></i>
          </Col>
        </Row>
        <hr/>
          <header className="App-header">
            <h1 id="header-h1">
              <Link to="/">CAPTECH.IO NEWS</Link>
            </h1> 
            <div id="date">
              {today}
            </div>
          </header>
        <hr/>
        </section>
    );
  }

  export default Header;