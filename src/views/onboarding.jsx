import { React } from "react";
import '../sass/main.scss';
export const Onboarding = () => {
    return <section className="onboarding-container">
        <div className="onboarding-slider">

            <div className="onboarding-slide">
                <div className="slider-text">
                    <h3 className="headline-label">HOLA!</h3>
                    <h2 className="slider-title">Bienvenido a Activa! Gracias por descargar nuestra aplicación!</h2>
                </div>

                <img src="https://tedwaffl.sirv.com/Activa/onboarding.png" alt="" className="onboarding-img" />
            </div>

           
        </div>

        <div className="action-cta">
            <div className="slider-bullets">
                <button className="slider-bullet active"></button>
                <button className="slider-bullet"></button>
                <button className="slider-bullet"></button>
            </div>
            <button className="btn cta mb-16">Iniciar sesión</button>
            <span className="d-block text text-center size-11">Eres nuevo en ACTIVA? <a href="#" className="link"> Regístrate</a></span>
        </div>
    </section>
}
