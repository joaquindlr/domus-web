import React from 'react'
import {Container, Row, Col, Form, FloatingLabel, Button} from  'react-bootstrap'
import SideBar from '../../../layout/SideBar'
import calendary from "../../../assets/calendary.jpeg"

const AddEvents = () => {
  return (
    <Container>
        <Row>
            <Col sm={3} className = "bg">
                <SideBar name = "Maria Garcia" job = "Secretaria de Comercializacion" />
            </Col>
            <Col sm={9} className = "mb-101">
                <Form className='mt-5'>
                    <Row>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Nombre del Cliente</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Cliente" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Direccion del Inmueble</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Direccion" />
                            </Form.Group>
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Fecha y Hora</Form.Label>
                                <div>
                                    <img src= {calendary} style = {{width: "75%"}} alt="" />
                                </div>
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={6}>
                            <Form.Group className="mb-3" controlId="">
                                <Form.Label>Correo Electronico</Form.Label>
                                <Form.Control type="text" placeholder="Ingrese Direccion" />
                            </Form.Group>                            
                        </Col>
                        <Col sm={6}>
                            <Form.Group className="" controlId="">
                                <Form.Label>Tipo Evento</Form.Label>
                                <Form.Select>
                                        <option>Cita</option>
                                        <option>Reclamo</option>
                                        <option>Otro</option>
                                    </Form.Select>
                            </Form.Group>
                        </Col>
                    </Row>
                    

                    <Row>
                        <Col sm={6}>
                            <Form.Group className="" controlId="">
                                <Form.Label>Detalle</Form.Label>
                                <FloatingLabel controlId="floatingTextarea" label="Detalle" className="mb-3">
                                    <Form.Control as="textarea" placeholder="Ingrese Detalle" />
                                </FloatingLabel>
                            </Form.Group>
                        </Col>
                    </Row>
                    

                    <Row>
                        <div className="buttons">
                            <Button className='bg-success' style = {{margin: "0px 5px"}}>Confirmar</Button>    
                            <Button className='bg-danger'>Cancelar</Button>            
                        </div>
                    </Row>
                </Form>
            </Col>
        </Row>
    </ Container>
  )
}
export default AddEvents