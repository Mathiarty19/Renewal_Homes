import * as React from "react";
import { Component } from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from 'reactstrap';
import Lightbox from 'react-image-lightbox';
import { CURRENTHOUSES } from "../containers/CurrentHouses";
import { CURRENTPICS } from "../containers/Currentpics";

class CurrentHouseCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      houses: CURRENTHOUSES,
      photoIndex: 0,
      isOpen: false,
      images: CURRENTPICS
    };
  }

  // directory maps each house in the imported array of homes out to a seperate div
  render() {
    const { photoIndex, isOpen } = this.state;
    const images  = this.state.images
    const directory = this.state.houses.map((house) => {
      return (
        <div className="col-md-4">
            <Card>
                <CardImg src={house.images[0]} alt={house.name}  />
                <CardBody>
                    <CardTitle>{house.name}</CardTitle>
                    <CardText>{house.description}</CardText>
                    <Button onClick={() => this.setState({ isOpen: true })}>See More Pictures</Button>
                </CardBody>
            </Card>
        </div>
      );
    });

    return (
      (isOpen === true)
        ? <Lightbox 
                mainSrc={images[photoIndex]}
                nextSrc={images[(photoIndex + 1) % images.length]} 
                prevSrc={images[(photoIndex + images.length - 1) % images.length]} 
                onCloseRequest= {() => this.setState({ isOpen: false })}         
                onMoveNextRequest={() => this.setState({photoIndex: (photoIndex + 1) % images.length})}
                onMovePrevRequest={() => this.setState({photoIndex: (photoIndex + images.length -1) % images.length})}
                imageTitle="image title"
                imageCaption="Caption"
          />
        :<div className="container">
            <div className="row">
            {/* <motion.div
                variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                transition={{ duration: 0.8 }}
                className="content-placeholder"
            > */}
                {directory}
            {/* </motion.div> */}
            </div>
         </div>
    );
  }
}

export default CurrentHouseCard;



//card that flip over on tap maybe


