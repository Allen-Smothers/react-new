import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Banner extends React.Component{
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { 
        banners: [],
        showContent: false,  
        opacity: 0,
        contClass: "banner conthide"
      };
    }

    componentDidMount(){

      Promise.all([
          fetch('http://challengenewsapi.azurewebsites.net/api/Banners')
      ])
        .then(([resBan]) => 
        Promise.all([resBan.json()]))
        .then(([data1]) => this.setState({ 
          banners: data1
        }), function(){/* nada */});
    } 

    handleClick() {
      let showCnt = !this.state.showContent;
      if(showCnt){
        this.setState({ contClass: "banner contshow"})
        this.setState({ opacity: 1 });
      }
      else{
        this.setState({ contClass: "banner conthide"})
        this.setState({ opacity: 0 });
      }
      this.setState({showContent: !this.state.showContent});
    }
  
    render(){
      let contClass = this.state.contClass;
      let opacity = this.state.opacity;
      let banners, bannerPreview, bannerContent;
      if(this.state.banners.length > 0){
        banners = this.state.banners;
        bannerPreview = banners[0].message;
        if(banners.length > 1){
          bannerContent = banners[1].message; 
        }
      }
      
      return(
        <Row>
          <Col xs={12} >  
            <section className={`${contClass}`} >
              <div className="cta" >
              <span onClick={this.handleClick} >
                <span>Click to expand</span>
                <i id="fa-cta" className="fas fa-angle-down fa-2x"></i> 
              </span>
              </div>
                <div id="preview">
                  {bannerPreview}
                </div>
                <div id="content" style={{ opacity: `${opacity}`}}>
                  {bannerContent}
                </div>
            </section>
          </Col>
        </Row>
      )
    }
  }

  export default Banner;