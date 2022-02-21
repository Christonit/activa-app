import { React } from "react";
import '../sass/main.scss';
export const ConfirmationMessage = () => {
    return <section className="action-container">
            <div className="confirmation-body">

                <div className="mb-24">
                    <img src="https://tedwaffl.sirv.com/Activa/confirmation-img.svg" alt="Branding" className="d-block mx-auto"/>
                </div>
                
                <h1 className="title text-center mb-16">¡Muchas gracias!</h1>
                <h3 className="text bold text-center mb-16">¡Su recarga se ha realizado correctamente!</h3>
                <p className="text text-center mb-24">Te hemos enviado una copia del recibo de la recarga a tu correo electrónico: carlos.perez@gmail.com</p>
            

                <div className="text-center">
                    <div className="button-container">
                        <button className="btn btn-secondary mb-16">Cerrar</button>
                        <button className="btn link regular">Ver recarga</button>
                    </div>
                </div>
                
            </div>
            
        </section>
}
