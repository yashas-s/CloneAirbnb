import React,{useState} from 'react'
import { Badge, Button, Col, Container, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight,faStar } from '@fortawesome/free-solid-svg-icons'


const DisplayCard = () => {
    const [activeIndex,setIndex]=useState(0)
    const CardInfo = [
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654052-active_media/original/d40713ec-7498-4b34-a819-04b36513d2cb.jpeg?im_w=480", 
          place:"Portugal", 
          text: "Astrology Workshop, Birth Chart Reading", 
          rate: "4.99",
          amount:"From $4721/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-424786-media_library/original/07a5fe2d-b85f-43e3-bc6f-3cb6af564b62.jpeg?im_w=1440", 
          place:"India", 
          text: "Tour with Local Expert",  
          rate: "5",
          amount:"From $1119/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1681760-media_library/original/4a77a7a0-1e62-4666-98ce-865e86bf0e36.jpeg?im_w=1440",
          place:"Japan", 
          text: "Joy To The Team - A Virtual Magic Show", 
          rate: "4.6",
          amount:"From $560/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-4366820-media_library/original/63e0bfe2-59c4-441c-90fa-dcc56013015d.jpeg?im_w=480", 
          place:"Indonesia", 
          text: "Haunted Mansion Escape Room Mystery Game", 
          rate: "4.2",
          amount:"From $1435/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1670215-media_library/original/00e16e4e-63ee-48c9-b24a-11020bf1ea91.jpeg?im_w=1440", 
          place:"United States", 
          text: "Visit the art galleries", 
          rate: "4.7",
          amount:"From $2899/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2340325-media_library/original/599c584e-f401-4f67-958a-18277ee7dd10.png?im_w=480", 
          place:"Poland", 
          text: "Murder Mystery Escape Room", 
          rate: "4.4",
          amount:"From $1456/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1654806-media_library/original/aa2cd589-4fc9-4960-a6da-5b3b25dcc5d8.jpeg?im_w=240", 
          place:"United Kingdom", 
          text: "Take up a cooking class", 
          rate: "4.8",
          amount:"From $1586/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1701766-media_library/original/ef0c0f45-5319-4807-919d-a8ad241077ee.jpeg?im_w=240", 
          place:"Jamaica", 
          text: "Experience the costal cuisine", 
          rate: "4.3",
          amount:"From $1569/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1661171-active_media/original/7f73a525-5b68-4444-8158-6590f169b182.jpg?im_w=1440", 
          place:"Mexico", 
          text: "Mezcal & Tequila Cocktail Masterclass", 
          rate: "4.5",
          amount:"From $2686/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1670258-active_media/original/c3d98338-83bc-4923-a60f-4c9d2310ba6f.jpeg?im_w=1440", 
          place:"Italy", 
          text: "Pizza with experts", 
          rate: "4.6",
          amount:"From $2147/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-1718920-media_library/original/afbd2377-8cbd-46a2-be26-cd9cb8afe13f.jpeg?im_w=1440", 
          place:"Spain", 
          text: "Enjoy the serene landscapes", 
          rate: "4.8",
          amount:"From $1070/Person" },
        { image: "https://a0.muscache.com/im/pictures/lombard/MtTemplate-2504590-media_library/original/997992b9-b0d4-4e1e-9fc1-f0d81b783789.jpeg?im_w=480", 
          place:"Malaysia", 
          text: "Magic and Mind stunts", 
          rate: "4.7",
          amount:"From $2275/Person" }
    ];

    

    const onArrowClick=(index)=>{
        setIndex(index)
    }

    const CardComponent=({cardEle,i})=>{
        return(
            <Col key={i}>
            <Card style={{width:"213px",height:"385px",padding:0}} >
                <Card.Img style={{width:"100%",height:"100%"}} src={cardEle.image}  />
            </Card>
            <span><FontAwesomeIcon icon={faStar} />{cardEle.rate}. {cardEle.place}</span>
            <div>
            <span>{cardEle.text}</span>
            </div>
            <b>{cardEle.amount}</b>
            </Col>
        )
            
    }
    const RenderActiveCard=()=>{
        let cards=[]
        if(activeIndex===0)
        {
            for(let i=0;i<6;i++)
            {
                cards.push(<CardComponent cardEle={CardInfo[i]} i={i} />)
            }
        }
        else{
            for(let i=6;i<CardInfo.length;i++)
            {
                cards.push(<CardComponent cardEle={CardInfo[i]} i={i}  />)
            }
        }

        return cards
       
    }
    return (
        <>
        <Row className="mt-3 mb-3">
          <Col>
            <Button className="custom-badge"  >Dates</Button>
          </Col>
          <Col>
            <Button className="custom-badge" >Group size</Button>
          </Col>
          <Col>
      <Button className="custom-badge">More filters</Button>
          </Col>
        <Col>
      <Button className="custom-badge">Great for groups</Button>
        </Col>
      <Col>
      <Button className="custom-badge">Family-friendly</Button>
      </Col>
      <Col>
      <Button className="custom-badge">Animals</Button>
      </Col>
      <Col>
      <Button className="custom-badge">Arts & crafts</Button>
      </Col>
      <Col>
      <Button className="custom-badge">Baking</Button>
      </Col>
      <Col>
      <Button className="custom-badge">Cooking</Button>
      </Col>
      <Col>
      <Button className="custom-badge">Dance</Button>
      </Col>
      <Col>
      <Button className="custom-badge">Drinks</Button>
      </Col>
      <Col>
      <Button className="custom-badge">Entertainment</Button>
      </Col>
      </Row>
      
        <h2 >Plan a trip with help from local Hosts around the world</h2>
        <div className='d-flex justify-content-end mb-3'>
            <Button className='custom-button' onClick={()=>{onArrowClick(0)}} disabled={activeIndex===0}>
                <FontAwesomeIcon icon={faAngleLeft} />
            </Button>
            <Button onClick={()=>{onArrowClick(1)}} disabled={!activeIndex===0} className=" custom-button ms-3">
                <FontAwesomeIcon icon={faAngleRight} />
            </Button>
        </div>
        <Row>
        <RenderActiveCard />
        </Row>

        </>
    );
  }
  
  export default DisplayCard;