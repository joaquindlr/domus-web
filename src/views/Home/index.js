import * as React from "react";
import "./Home.css";

//components
import { NavBar } from "../../layout";
import { Button, Input } from "../../components/atomics";
import ARROW from "../../assets/arrow.png";

const Home = () => {
  return (
    <div className="background">
      <NavBar />
      <div className="d-flex justify-content-between">
        <div />
        <div className="d-flex flex-column align-items-end">
          <form className="form-container">
            <p className="fw-bold text-center fs-4 mb-3">INICIAR SESION</p>
            <div>
              <p className="fw-bold mt-3 fs-5 mb-1">Nombre de usuario:</p>
              <Input />
            </div>
            <div>
              <p className="fw-bold mt-3 fs-5 mt-1">Contraseña:</p>
              <Input />
            </div>
            <Button className="mt-4 fs-5">INGRESAR</Button>
            <div className="d-flex justify-content-between">
              <p className="fw-bold mt-4 cursor-pointer no-select-text">
                Registrarse
              </p>
              <p className="fw-bold mt-4 cursor-pointer no-select-text">
                Soy empleado
              </p>
            </div>
          </form>
          {/* <div className="soy-trabajador-container cursor-pointer no-select-text">
            <p className="text-light fs-5 fw-bolder ">SOY TRABAJADOR</p>
            <img src={ARROW} alt="arrow" className="arrow" />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Home;
