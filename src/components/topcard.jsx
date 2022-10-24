import React from 'react'
import Card from 'react-bootstrap/Card';
import {Col,Row} from 'react-bootstrap';
import '../App.css';

const TopCard=() => {
     const TopcardInfo = [

        {image: "https://a0.muscache.com/im/pictures/58819d01-2a71-441d-b3bc-baae0cd64da1.jpg?im_w=720", 
         Title:"Collection", 
         Text:"Great for Team Building"},
        {image: "https://a0.muscache.com/im/pictures/e35bb307-05f4-48a4-bdc5-3b2198bb9451.jpg?im_w=720", 
         Title:"Collection", 
         Text:"Most popular around the world"},
        {image: "https://a0.muscache.com/im/pictures/bcbd20bb-1654-4ea2-a86c-2cf25666f3b6.jpg?im_w=720", 
         Title:"Collection", 
         Text:"Fun for the family"},
     ]

    const rendercard = (TopcardInfo, index) =>{
        return(
      
      <Card  style={{width:"450px",height:"100%",padding:0}} className="text-white me-3" key={index}>
      <Card.Img  src={TopcardInfo.image}/>
      <Card.ImgOverlay style={{width:"inherit",height:"0px"}}>
        <h4><Card.Title>{TopcardInfo.Title}</Card.Title></h4>
        <h2><Card.Text>{TopcardInfo.Text}</Card.Text></h2>
      </Card.ImgOverlay>
    </Card>
    
    

        )
    }

  return (
   <div><Row>{TopcardInfo.map(rendercard)}</Row></div> 
  ); 
}

export default TopCard;