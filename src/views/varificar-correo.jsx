import { React } from "react";
import '../sass/main.scss';
export const VerificarCorreo = () => {
    return <section className="action-container">
        <div className="nav-header">
            <button href="#" className="link">Cancelar</button>

        </div>


        <div className="action-body">

        <h1 className="title">Verificar dirección de correo electrónico</h1>

        <div className="d-flex mb-16">
        <p className="text mb-0">perez.carlosmanuel@activa.com</p>
        <button href="#" className="link ms-auto">Cambiar</button>
        </div>

        <p className="text">
            Hemos enviado un código a su dirección de correo electrónico. Introdúzcalo a continuación
        </p>

        <div class="mb-16">
            <div className="form-label">
                <label for="field" >Introduzca el código:</label>
                </div>

                <div className="input-groups-code">
                    
                    <input type="text" className="form-control"/>
                    <input type="text" className="form-control"/>
                    <input type="text" className="form-control"/>
                    <input type="text" className="form-control"/>
                    <input type="text" className="form-control"/>
                    <input type="text" className="form-control"/>
                    
                    
        
                </div>

                
        </div>
        <p className="label-color text-small">
        Tu código se han enviado al 849 225 4038
        </p>

        <div className="mb-32">
            <p className="text mb-8">No lo has recibido?</p> <br className="d-block" /><br className="d-block" /> <a href="#" className="link">
            Volder a enviar</a>
        </div>


        <button className="btn btn-cta-secondary mb-20">Continuar</button>

        

        </div>
        

    </section>
}
