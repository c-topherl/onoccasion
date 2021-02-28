import React from "react";
import LoadingImage from '../tang.jpg';
import { Container, Image } from 'react-bootstrap';

const Loading = () => {
  return (
  	<Container>
    	<h1>Loading...</h1>
    	<p>Please enjoy this photo while we send you to log in</p>
    	<Image src={LoadingImage} fluid />
    </Container>
  );
};

export default Loading;