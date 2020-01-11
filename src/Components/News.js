import React, { Component } from 'react';
import NewsItem from './NewsItem';
import dl from './dulieu.json';

class News extends Component {
    render() {
      // var so = [1,2,3,4,5];
      // var so2 = so.map((value,key) => value*3 +" co chi so la "+key );
      // console.log(so2);
      console.log(dl.map((value,key) => (
          <NewsItem key = {key}  ></NewsItem>
      )
        
      ));
      
        return (
            <div>
                <div>
  <header className="masthead tintuc">
    <div className="container h-100">
      <div className="row h-100">
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h1 className="mb-5">TIN TỨC!</h1>
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Now for Free!</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                <div className="screen">
                  {/* Demo image for screen mockup, you can put an image here, some HTML, an animation, video, or anything else! */}
                  <div className="button">
                    {/* You can hook the "home button" to some JavaScript events or just remove it */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div></header>
  {/* Bengin tin tuc */}
  <div className="container">
    <div className="row mt-3">
          {
            dl.map((value,key) =>{
              return (
                <NewsItem key = {key} tinId={value.id} anh={value.anh} tieuDe = {value.tieuDe} trichDan= {value.trichDan} ></NewsItem>
              )})
          }
    </div>
  </div>
</div>
      
            </div>
        );
    }
}

export default News;        