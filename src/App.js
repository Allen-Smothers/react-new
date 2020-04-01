import React from 'react';
import './App.css';
import Header from './Header.js' 
import Navigation from './Navigation.js' 
import Banner from './Banner.js'  
import SectionDetail from './SectionDetail.js' 
import ArticleDetail from './ArticleDetail.js' 

import Container from 'react-bootstrap/Container';  


import C2S from './images/Another997.jpg'
import E36 from './images/ls1-E36.jpg'
import peace from './images/peace.jpg'
import bGreen from './images/boston-green.jpg'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      sections: []
    };
  }
  
  componentDidMount(){
    
    Promise.all([
        fetch('http://challengenewsapi.azurewebsites.net/api/FeaturedSections')
    ])
      .then(([resSec]) => 
      Promise.all([resSec.json()]))
      .then(([data1]) => this.setState({ 
        sections: data1
      }));
  }   

render(){
  let sections = [];
  let aside = [];
  let artAside1 = {};
  let artAside2 = {};

  let main = [];
  let artMain1 = {};
  let artMain2 = {};
  let artMain3 = {};

  let opinion = [];
  let artOpin1 = {}
  let artOpin2 = {}

  let travel = [];
  let artTrav1 = {}
  let artTrav2 = {}
  
  if(this.state.sections.length > 0){
    sections = this.state.sections;
    aside = sections.filter(function (e) {
      return e.description == "Aside";
    });
    artAside1 = aside[0].articles[0];
    artAside2 = aside[0].articles[1];

    main = sections.filter(function (e) {
      return e.description == "Main";
    });
    artMain1 = main[0].articles[0];
    artMain2 = main[0].articles[1];
    artMain3 = main[0].articles[2];

    opinion = sections.filter(function (e) {
      return e.description == "Opinion";
    });
    artOpin1 = opinion[0].articles[0];
    artOpin2 = opinion[0].articles[1];

    travel = sections.filter(function (e) {
      return e.description == "Travel";
    });
    artTrav1 = travel[0].articles[0];
    artTrav2 = travel[0].articles[1];

  }
  

    let img997 = <img src=""></img>;
    const rtAng = [];
    for (let i = 0; i<100; i++) {
      rtAng.push(<i class="fas fa-angle-right fa-stack-xs"></i>)
    }
    let travelHr = <div id="travel-hr">
      {rtAng}
    </div>;

  return (
      <div className="App">
        <Container>
        <Header/> 
        <Navigation catId="0"/>
        <Banner/>
        
        {/*  Col left  */}
        <div class="flex-row">
          <div class="flex-column">
            <aside>
            <article >
              <h5><Link to={'/article/' + artAside1.id}>{artAside1.headLine}</Link></h5>
              <span class="snippet">{artAside1.snippet} </span>
            </article>  
              <article class="add-hr">
                <h5><Link to={'/article/' + artAside2.id}>{artAside2.headLine}</Link></h5>
                <span class="location">{artAside2.location}</span>
                <span class="snippet">{artAside2.snippet} </span>
              </article>
            </aside>
          </div>
          {/*  Col Center  */}
          <div class="flex-double-column">
          <main>
            <video width="100%" controls poster={E36}>
            </video>  
            <article class="main-top">
                <h5><Link to={'/article/' + artMain1.id}>{artMain1.headLine}</Link></h5>
                <span class="location"><b>{artMain1.location}</b></span>    
                <span class="snippet">{artMain1.snippet}</span>  
              </article>
              <article>
              <h5><Link to={'/article/' + artMain2.id}>{artMain2.headLine}</Link></h5>
                <span class="location">{artMain2.location}</span>    
                <span class="snippet">{artMain2.snippet}</span>    
              </article>
              <article>
                <h5><Link to={'/article/' + artMain3.id}>{artMain3.headLine}</Link></h5>
                <span class="location">{artMain3.location}</span>    
                <span class="snippet">{artMain3.snippet}</span>    
              </article>
            </main>
          </div>
          {/*  Col Right */}
          <div class="flex-double-column right-column">
            <div class="flex-row">
              <div id="opin-header" class="flex-double-column">
              <div id="travel-hr">
                <label>The Opinion Pages</label>  
                </div>  
              </div>
            </div>
            <div class="flex-row rt-top-inner"> 
              <div class="flex-column">
                <article>
                    <h5><Link to={'/article/' + artOpin1.id}>{artOpin1.headLine}</Link></h5>
                      <span class="snippet">{artOpin1.snippet}</span>
                  </article>
              </div>
              <div class="flex-column">
                <article>
                    <h5><Link to={'/article/' + artOpin2.id}>{artOpin2.headLine}</Link></h5>
                    <span class="snippet">{artOpin2.snippet}</span>
                  </article>
              </div>
            </div>
            <div class="flex-row">
              <div class="flex-double-column">
              <div id="travel-hr">
                <label>Travel</label>
                {rtAng}
                </div>  
              </div>
            </div>
            <div class="flex-row rt-bottom-inner">
              <div class="flex-column">
                <article>
                    <h5><Link to={'/article/' + artTrav1.id}>{artTrav1.headLine}</Link></h5>
                      <div>
                        <img src={C2S} alt="997 C2S"></img>
                      </div>
                      <div>
                      <img src={bGreen} alt="E36"></img>
                      </div>
                  </article>
              </div>
              <div class="flex-column">
                <article>
                    <h5><Link to={'/article/' + artTrav2.id}>{artTrav2.headLine}</Link></h5>
                      <div>
                        <img src={E36}  alt="photo"></img>
                      </div>
                      <span class="snippet">{artTrav2.snippet}</span>
                  </article>
              </div>
            </div>
          </div>
        </div>
        </Container>
      </div>
    );
  }
}

class App extends React.Component {
  render(){
    return(
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/section/:id" component={SectionDetail} />  
          <Route path="/article/:id" component={ArticleDetail} />  
        </Switch> 
      </Router>
    );
  }
}


export default App;