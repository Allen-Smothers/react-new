import Header from './Header.js' 
import Navigation from './Navigation.js' 

import React from 'react';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import C2S from './images/Another997.jpg'
import E36 from './images/ls1-E36.jpg'
import bGreen from './images/boston-green.jpg'

class SectionDetail extends React.Component {
    constructor(props) {
      super(props);
      this.state = { 
        catId: props.match.params.id,
        category: {},
        sectionName: "Default",
        articles: [],
        articleIndex: 0
      };
    }
    componentDidMount(){
      let catId = this.state.catId;
      Promise.all([
          fetch('http://challengenewsapi.azurewebsites.net/api/Categories/' + catId + '/Articles'),
          fetch('http://challengenewsapi.azurewebsites.net/api/Categories/' + catId )
      ])
        .then(([resArt, resCat]) => 
        Promise.all([resArt.json(),resCat.json()])) 
        .then(([data1, data2]) => this.setState({  
          articles: data1,
          category : data2
        }), function(){/* nada */});
    }   

    articleColumn(article, aside){
      let images = [];
      let imageSrc = [C2S, E36, bGreen];
      for(let i = 0; i < article.numberOfImages; i++){
          images.push(<img src={imageSrc[i]}></img>);
      }
      
      return aside ? (
        <div class="flex-column aside">
          <aside>
            <article>
              <h5>
                <Link to={'/article/' + article.id}>{article.headLine}</Link>
              </h5>
              {images}
              <span class="location">{article.location}</span>
              <span class="snippet">
                {article.fullStory}
              </span>
            </article>
          </aside>
        </div>
      ):
      (
        <div class="flex-column">
          <article>
            <h5>
              <Link to={'/article/' + article.id}>{article.headLine}</Link>
            </h5>
            {images}
            <span class="location">{article.location}</span>  
            <span class="snippet">
              {article.fullStory}
            </span>
          </article>
        </div>
      );
    }
  
    render(){
      let cat = this.state.category;

      let articleRow = [];
      if(this.state.articles.length > 0){
        let columns = [];
          for(let i = 0; i < this.state.articles.length; i++){
            let isAside = ((i%2 != 0 && this.state.articles.length > 1) ? true : false);
            columns.push(this.articleColumn(this.state.articles[i], isAside));
          }
          articleRow.push(<div class="flex-row"> 
              {columns} 
            </div>);
      }
        
      return (
        <Container className="sec-detail">
            <Header/> 
            <Navigation catId={cat.id}/>
            {articleRow}
        </Container>
      );
    }
  }

  export default SectionDetail;