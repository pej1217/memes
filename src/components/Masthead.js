import React, { Component } from 'react';

class Masthead extends Component {
 render() {
  return (
   <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
     <img className="masthead-avatar mb-5" src="assets/img/doge.jpeg" alt="" />
     <h1 className="masthead-heading text-uppercase mb-0">MEMES</h1>
     <div className="divider-custom divider-light">
      <div className="divider-custom-line"></div>
      <div className="divider-custom-icon"><i classNameName="fas fa-star"></i></div>
      <div className="divider-custom-line"></div>
     </div>
     <p classNameName="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
    </div>
   </header>
  );
 }
}

export default Masthead;