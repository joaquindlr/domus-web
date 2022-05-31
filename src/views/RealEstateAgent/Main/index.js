import React from 'react'
import {Container, Row, Col, Card, Button, Nav} from  'react-bootstrap'
import SideBarRealEstate from '../../../layout/SideBarRealEstate'
import "../RealEstateAgent.css" 

const RealEstateAgent = () => {
  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg">
                <SideBarRealEstate name = "Clara" job = "Agente Inmubiliario" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='mt-5'>Bienvenida Agente Inmobiliario</h1>
      

                
                <div style={{margin: "100px 0px"}}>
                    <Row className=''>
                        <Col sm = {4}>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Clientes</Card.Header>
                            <Card.Body>
                                <Card.Title>Total: 20</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm = {4}>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Propiedades</Card.Header>
                            <Card.Body>
                                <Card.Title>Total: 29</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm = {4}>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Eventos</Card.Header>
                            <Card.Body>
                                <Card.Title>Total: 3</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm = {6}>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Departamentos</Card.Header>
                            <Card.Body>
                                <Card.Title>Total: 20</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                        <Col sm = {6}>
                            <Card border="primary" style={{ width: '18rem' }}>
                            <Card.Header>Departamentos</Card.Header>
                            <Card.Body>
                                <Card.Title>Casas: 9</Card.Title>
                            </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </div>
     
            </Col>
            
        </Row>
    </ Container>
  )
}

export default RealEstateAgent