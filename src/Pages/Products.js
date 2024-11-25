import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import acimg from '../imajes/acimg.jpeg'
import tvimg from '../imajes/tvimg.png'
import axios from 'axios'

function Products() {
    const apidata = "https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/sample-admin"
    const[image,setImage]=useState([]);

    useEffect(()=>{
        GetData();
    },[]);

    const GetData =()=>{
        axios.get('https://673c4f2196b8dcd5f3f961c0.mockapi.io/Products/sample-admin')
        .then((response)=>{
            const ac1 = response.data.filter((a) => a.id === "1");
            const ac2 = response.data.filter((a) => a.id === "2");
            const ac3 = response.data.filter((a) => a.id === "3");
            const ac4 = response.data.filter((a) => a.id === "4");
            const tv1 = response.data.filter((a) => a.id === "9");
            const tv2 = response.data.filter((a) => a.id === "10");
            const tv3 = response.data.filter((a) => a.id === "11");
            const tv4 = response.data.filter((a) => a.id === "12");

            setImage([...ac1, ...ac2, ...ac3, ...ac4, ...tv1, ...tv2, ...tv3, ...tv4])
        })
        .catch((error)=>{
            console.error('error fetching data',error)
        })
    }

  return (
    <div>
<Container>
    <Row>
        <h3 className='text-center display-5' >Home Appliances</h3>
        <Col md={3}></Col>
        <Col md={3}>
        <Link to={'/'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={acimg} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3 text-center'>TV</h4>
                            </a>
                        </Link>
        </Col>
        <Col md={3}>
        <Link to={'/'} className='text-decoration-none'>
                            <a href='' className='text-decoration-none text-dark d-block bg-white p-3'>
                                <img src={tvimg} style={{ width: '100%', height: '170px' }} className='cateory' />
                                <h4 className='mt-3 text-center'>AC</h4>
                            </a>
                        </Link>
        </Col>
        <Col md={3}></Col>
    </Row>
    <Row className='mt-5'>
                    <hr></hr>
                    <h1 className='text-center mb-5 display-4 mt-2' >Men's Fashions</h1>
                    {image.map((items) => (
                        <Col md={3}>
                            <Card className='products' style={{ width: '100%', border: 'none' }}>
                                <Card.Img variant="top" src={giturl + items.image} style={{ width: '100%', height: '250px' }} className='p-2' />
                                <Card.Body className='text-center'>
                                    <Card.Title>{items.name}</Card.Title>
                                    <Card.Text>{items.price}
                                    </Card.Text>
                                    <a>
                                        <Button className='bg-success px-5'>Buy Now</Button>
                                    </a>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
</Container>

    </div>
  )
}

export default Products