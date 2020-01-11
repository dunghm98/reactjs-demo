import React, { Component } from 'react';
import dl from './dulieu.json';

class NewsDetail extends Component {
    render() {
      console.log(this.props.match.params.id);
      // console.log(typeof(this.props.match.params.id));
      

        return (
            <div>
                <div>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">CHI TIẾT TIN TỨC!</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                </div>
                <div className="button">
                  {/* You can hook the "home button" to some JavaScript events or just remove it */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* Bengin tin tuc */}
          {
            dl.map((value) => {
              if(value.id == this.props.match.params.id){
                return (
                  <div className="jumbotron">
          <h1 className="display-4">{value.tieuDe}</h1>
          <img className="img-fluid" src={value.anh} alt="" />
                <p className="lead">{value.trichDan}</p>
          <hr className="my-4" />
          <p>{value.noiDung}</p>
          <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
                )
              }
            })
          }
</div>

            </div>
        );
    }
}

export default NewsDetail;