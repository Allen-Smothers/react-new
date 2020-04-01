import Header from './Header.js' 
import Navigation from './Navigation.js' 

import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Form from 'react-bootstrap/Form'; 
import ButtonGroup from 'react-bootstrap/ButtonGroup'; 
import Button from 'react-bootstrap/Button'; 


import C2S from './images/Another997.jpg'
import E36 from './images/ls1-E36.jpg'
import bGreen from './images/boston-green.jpg'

class ArticleDetail extends React.Component{

    constructor(props) {
      super(props);
      this.state = { 
        artId: props.match.params.id,
        article: {}
      };
    }
    
    
    componentDidMount(){
      let artId = this.state.artId;
      Promise.all([
          fetch('http://challengenewsapi.azurewebsites.net/api/Articles/' + artId )
      ])
        .then(([resArt]) => 
        Promise.all([resArt.json()])) 
        .then(
          ([data1]) => this.setState({    
          article: data1
        }), function(){ /* nada */});
    } 
  
    render(){
  
      let article;
      if(this.state.article){
        article = this.state.article;
      }
  
      let images = [];
      switch(article.numberOfImages){
          case 1:
            images.push(<img src={C2S}></img>);
            break;
            case 2:
                images.push(<img src={C2S}></img>);
                images.push(<img src={E36}></img>);
                break;
            case 3:
                images.push(<img src={C2S}></img>);
                images.push(<img src={E36}></img>);
                images.push(<img src={bGreen}></img>);
                break;
            default:
                break;
      }

      let imageRow;
      if(article.numberOfImages > 0){
        imageRow = <div class="flex-row">
            <div class="flex-column">
                {images}
            </div>
        </div>;
      }
  
      return(
        <Container className="art-detail">
          <Header/> 
          <Navigation catId="0"/>
          <article>
            <div class="flex-row">
                <div class="flex-column">
                <h5>{article.headLine}</h5>
                {images}
                <span class="location">{article.location}</span>
                <span class="snippet">
                {article.fullStory}
              </span>
                </div>
            </div>
          </article>
          <div class="flex-row">
              <div class="flex-column">
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Comment</Form.Label>
                  <Form.Control as="textarea" rows="3" />
                </Form.Group>
                <ButtonGroup>
                  <Button type="submit">Submit</Button>
                </ButtonGroup>
              </Form>
              </div>
          </div>
        </Container>
      )
    }
  }

  export default ArticleDetail;