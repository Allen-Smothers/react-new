import React from 'react';
import Nav from 'react-bootstrap/Nav'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 

class Navigation extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        categories: []
      };
    }
    componentDidMount(){
      Promise.all([
          fetch('http://challengenewsapi.azurewebsites.net/api/Categories')
      ])
        .then(([resCat]) => 
        Promise.all([resCat.json()]))
        .then(([data1]) => this.setState({ 
          categories: data1
        }));
    }  
    render(){
        let catId = this.props.catId;
        let navLinks; 
        if(this.state.categories.length > 0){
          navLinks =
            this.state.categories.map(category =>
              <Nav.Link  key={category.id} href={'/section/' + category.id} >
                <span class={category.id == catId ? "active": "inactive"}>{category.displayName}</span>
              </Nav.Link>
            );
        }
      return(
        <Row>
          <Col xs={{ span: 10, offset: 1 }}>
            <Nav id="nav" className="justify-content-center">
              {navLinks}
            </Nav>
          </Col>
      </Row>
      )
    }
  }

  export default Navigation;