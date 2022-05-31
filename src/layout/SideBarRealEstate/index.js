import React from 'react'
import {Nav} from  'react-bootstrap'
import logo from "../../assets/loginm.png"
import "./SideBar.css"

export const SideBarRealEstate = ({name = "Maria Garcia", job}) => {
  return (
    <>
        <div className='profile'>
            <img src= {logo} alt="" className='logo' />
            <h2>{name}</h2>
            <hr />
            <p className='center'>{job}</p>
        </div>
        <Nav defaultActiveKey="/home" className="flex-column text-start">
            <Nav.Link href="/realestateagent" className='url'>Inicio</Nav.Link>
            <Nav.Link eventKey="link-1" href="/estates" className='url'>Propiedades</Nav.Link>
            <Nav.Link eventKey="link-2" href="/viewclients" className='url'>Clientes</Nav.Link>
            <Nav.Link eventKey="link-2" href="/viewevents" className='url'>Eventos</Nav.Link>
            <Nav.Link eventKey="link-3" className='url' href = "/">Cerrar Sesion</Nav.Link>
        </Nav>
    </>
  )
}

export default SideBarRealEstate
