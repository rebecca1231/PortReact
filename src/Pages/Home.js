import React from 'react';

import Jumbo from '../Components/Jumbo'
import Carousel from '../Components/Carousel'

//import { Image, Container, Row, Col } from "react-bootstrap";


function Home(props) {
  return (
    <div>
       <Jumbo title={props.title} subTitle={props.subTitle} text={props.text} />
    <Carousel />
    
    </div>
  );
}

export default Home;