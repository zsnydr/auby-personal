import React, { Component } from 'react';

class PortfolioBlock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTitle: true,
      showDesc: false,
    };

    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  handleMouseEnter() {
    this.setState({
      showTitle: !this.state.showTitle,
      showDesc: !this.state.showDesc,
    });
  }

  clickHandler() {
    this.props.clickHandler(this.props.project);
  }

  render() {
    return (
      <div className="portfolio-block" style={{ backgroundImage: 'url({this.props.thumbNail})' }}>
        <span
          className="portfolio-block-content"
          onClick={this.clickHandler}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseEnter}
        >
          {this.state.showTitle && <span>{this.props.project.title}</span>}
          {this.state.showDesc && <span>{this.props.project.description}</span>}
        </span>
      </div>
    );
  }
}

export default PortfolioBlock;
