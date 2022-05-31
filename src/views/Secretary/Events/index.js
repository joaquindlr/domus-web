import React from 'react'
import {Container, Row, Col, Nav, Table, Button} from  'react-bootstrap'
import "../Secretary.css" 
import SideBar from '../../../layout/SideBar'


const Events = () => {
  return (
    <Container>
        <Row className='vw-100' stlye = {{height: "vw-100"}}>
            <Col sm={3} className = "bg">
                <SideBar name = "Maria Garcia" job = "Secretaria de Comercializacion" />
            </Col>
            <Col sm={9} className = "mb-101">
                <h1 className='client-h'>Eventos</h1>
                
                <input type="text" placeholder='Buscar Evento' />
                <div className = "table">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Cliente</th>
                                <th>Direccion Inmueble</th>
                                <th>Correo Electronico</th>
                                <th>Tipo Evento</th>
                                <th>Fecha y Hora</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Juan Perez</td>
                                <td>Calle French 414</td>
                                <td>ejemplo@gmail.com</td>
                                <td>Cita</td>
                                <td>02/06/2022 - 14:00</td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="success">
                        <Nav defaultActiveKey="/home" className="flex-column text-start">
                            <Nav.Link href="/addevents" style= {{color: "#fff"}}>Agregar Evento</Nav.Link>
                        </Nav>
                    </Button>
                </div>
            </Col>
        </Row>
    </ Container>
  )
}
export default Events