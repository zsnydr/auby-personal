import React from 'react';

const Home = () => (
  <div id="home-container">
    <div className="home-content-block auby" />
    <div className="home-content-block about-me">
      <div className="home-content-summary">
        <h1>Here's my story</h1>
        <h2>Here's my story</h2>
        <h3>Here's my story</h3>
      </div>
      <div className="home-content-contact-links">
        <a href="https://www.linkedin.com/in/aubrey-west-48958965/" alt="" target="_blank"><i className="fa fa-linkedin" /></a>
        <a href="mailto:aubreymw24@gmail.com" alt="" target="_blank"><i className="fa fa-envelope" /></a>
      </div>
    </div>
  </div>
);

export default Home;
