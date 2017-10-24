import React, { Component } from 'react';
import { Modal, Carousel } from 'react-bootstrap';
import PortfolioBlock from './portfolioBlock';
import portfolioProjects from './portfolioProjects';
// import ReactPDF from 'react-pdf/build/entry.webpack';
// import xx from './xx.pdf';
// import img1 from './CinqaSeptWeb/1copy.jpg';
// import img2 from './CinqaSeptWeb/2copy.jpg';
// import img3 from './CinqaSeptWeb/3copy.jpg';
// import img4 from './CinqaSeptWeb/4copy.jpg';
// import img5 from './CinqaSeptWeb/5copy.jpg';
// import img6 from './CinqaSeptWeb/6copy.jpg';
// import img7 from './CinqaSeptWeb/7copy.jpg';
// import img8 from './CinqaSeptWeb/8copy.jpg';
// import img9 from './CinqaSeptWeb/9copy.jpg';
// import img10 from './CinqaSeptWeb/10copy.jpg';
// import img11 from './CinqaSeptWeb/11copy.jpg';
// import img12 from './CinqaSeptWeb/12copy.jpg';
// import img13 from './CinqaSeptWeb/13copy.jpg';
// import img14 from './CinqaSeptWeb/14copy.jpg';
// import img15 from './CinqaSeptWeb/15copy.jpg';
// import img16 from './CinqaSeptWeb/16copy.jpg';
// import img17 from './CinqaSeptWeb/17copy.jpg';
// import img18 from './CinqaSeptWeb/18copy.jpg';

const images = [
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978845/1copy_cxjaxx.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978845/2copy_vs1fvf.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978845/3copy_i1eyvz.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978845/4copy_gxuxau.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978845/5copy_q0m5ro.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978845/6copy_orcvez.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978847/7copy_uswfdh.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978847/8copy_nsaffq.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978849/9copy_yevjvp.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978847/10copy_acjkph.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978848/11copy_ioumv7.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978847/12copy_uqlw4y.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978848/13copy_yobra3.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978849/14copy_pdil0h.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978850/15copy_eoy8vj.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978849/16copy_c58jdn.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978850/17copy_drcmmu.jpg',
  'http://res.cloudinary.com/dsyd5mybz/image/upload/v1503978849/18copy_xltqu8.jpg',
];

class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalIsOen: false,
      activePortfolioBlock: null,
      index: 0,
      direction: null,
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  openModal(activePortfolioBlock) {
    this.setState({
      activePortfolioBlock,
      modalIsOpen: true,
    });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#000';
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      activePortfolioBlock: null,
    });
  }

  handleSelect(selectedIndex, e) {
    this.setState({
      index: selectedIndex,
      direction: e.direction,
    });
  }

//   render() {
//     return (
//       <div id="portfolio-container">
//         {portfolioProjects.map(project => (
//           <PortfolioBlock
//             key={project.title}
//             clickHandler={this.openModal}
//             project={project}
//           />
//         ))}
//         {this.state.activePortfolioBlock &&
//           <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
//             <Modal.Header closeButton>
//               <Modal.Title>{this.state.activePortfolioBlock.title}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//               {/* <Carousel
//                 activeIndex={this.state.index}
//                 direction={this.state.direction}
//                 onSelect={this.handleSelect}
//               >
//                 {this.state.activePortfolioBlock.images.map(image => (
//                   <Carousel.Item key={image.id}> */}
//                     <ReactPDF
//                       file={xx}
//                       pageIndex={2}
//                     />
//                     {/* <img
//                       alt="900x500"
//                       src={image.ref}
//                     /> */}
//                     {/* <Carousel.Caption />
//                   </Carousel.Item>
//                 ))}
//               </Carousel> */}
//             </Modal.Body>
//             <Modal.Footer>
//               <button onClick={this.closeModal}>Close</button>
//             </Modal.Footer>
//           </Modal>
//         }
//       </div>
//     );
//   }
// }

  render() {
    return (
      <div id="portfolio-container">
        {portfolioProjects.map(project => (
          <PortfolioBlock
            key={project.title}
            clickHandler={this.openModal}
            project={project}
          />
        ))}
        {this.state.activePortfolioBlock &&
          <Modal show={this.state.modalIsOpen} onHide={this.closeModal}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.activePortfolioBlock.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Carousel
                activeIndex={this.state.index}
                direction={this.state.direction}
                onSelect={this.handleSelect}
              >
                {images.map((img, i) => (
                  <Carousel.Item key={i}>
                    {/* <ReactPDF
                      file={xx}
                      pageIndex={2}
                    /> */}
                    <img
                      alt="900x500"
                      src={img}
                    />
                    <Carousel.Caption />
                  </Carousel.Item>
                ))}
              </Carousel>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.closeModal}>Close</button>
            </Modal.Footer>
          </Modal>
        }
      </div>
    );
  }
}

export default Portfolio;
