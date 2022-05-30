import React from 'react'
import {Container, Row, Col, Card, Button, Nav} from  'react-bootstrap'
import SideBar from '../../../layout/SideBar'
import "../Secretary.css" 
import clients from "../../../assets/clients.png"
import events from "../../../assets/events.png"

const Secretary = () => {
  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg">
                <SideBar name = "Maria Garcia" job = "Secretaria de Comercializacion" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='mt-5'>Bienvenida Secretaria de Comercializacion</h1>
                
                <Row>
                  <Col sm = {6} className = "mt-5 mf-5">
                    <Card style={{ width: '18rem' }}>
                      <Card.Img variant="top" src= {clients} style = {{width: "100%"}} />
                      <Card.Body>
                        <Card.Title>Clientes</Card.Title>
                        <Button variant="primary">
                          <Nav defaultActiveKey="/home" className="flex-column text-start">
                            <Nav.Link eventKey="link-1" href="/clients" style = {{color: "#fff"}}>Ir a Clientes</Nav.Link>
                          </Nav>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm = {6} className = "mt-5">
                    <Card style={{ width: '14rem' }}>
                      <Card.Img variant="top" src= {events} style = {{width: "100%"}} />
                      <Card.Body>
                        <Card.Title>Eventos</Card.Title>
                        <Button variant="primary">
                          <Nav defaultActiveKey="/home" className="flex-column text-start">
                            <Nav.Link eventKey="link-1" href="/clients" style = {{color: "#fff"}}>Ir a Clientes</Nav.Link>
                          </Nav>
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
            </Col>
            
        </Row>
    </ Container>
  )
}

export default Secretary