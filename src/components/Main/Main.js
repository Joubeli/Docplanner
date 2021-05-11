import React from "react";
// import { Card, Button } from "react-bootstrap";
import Introduction from "../Introduction/Introduction"
import List from "../List/List"
import Company from "../company/Company"
import Information from '../information/Information'
import CardI from '../Card-intro/Card-intro'
import City from'../cities/City'
import Footer from '../footer/Footer'


const Main = ({card,clients}) => {
  let str = "Youssef";
  return (
    <div>
      {/* <h2>Hello {str}</h2>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/250px-Image_created_with_a_mobile_phone.png"
        />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}

      <Introduction />
      <List clients={clients}/>
    <Company />
    <Information/>
    <CardI/>
    <City card={card}/>
    <Footer/>
    </div>
  );
};

export default Main;
