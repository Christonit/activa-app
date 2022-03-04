import { React } from "react";
import '../sass/main.scss';
export const Login = () => {
    return <section className="action-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>
        </div>

        <div className="action-body">

       
        <div className="mb-28">
            <img src="https://tedwaffl.sirv.com/Activa/activaLogo.svg" alt="Branding" className="small-logo" />
        </div>
        
        <div className="message-box success mb-32">
            <span className="material-icons-outlined form-check-icon mb-12">
                check_circle
            </span>

            <p className="text mb-0">
            Te hemos enviado un mensaje a tu correo <b>carlos.perez@gmail.com</b> con las instrucciones para reestablecer tu contraseña. Por favor revisa la bandeja de entrada o el spam de tu correo.
            </p>
        </div>

        <h1 className="title">Iniciar sesión</h1>

        <div class="mb-24">
            <div className="form-label">
                <label for="field" >Correo electrónico:</label>
                
                </div>
            <input type="email" className="form-control" name="field"/>
        </div>
        <div className="mb-24">
            <div className="form-label">
                
                <label for="field" className="">Contraseña:</label>
                <span class="material-icons form-check-icon ml-4">
                    check_circle
                </span>
                <a href="#" className="link ms-auto">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="input-with-icon">
                <input type="email" className="form-control" name="field" />
                <button className="password-icon input-icon">
                    <img src="https://tedwaffl.sirv.com/Activa/see.svg" alt="" />
                </button>

            </div>
            <div className="informational-label">
                <img src="https://tedwaffl.sirv.com/Activa/information-i.svg" className="mr-6" alt="" />
                Correo electrónico registrado en tu contrato
            </div>
            
        </div>
        <div className="form-checkbox-container mb-24">
            <label class="form-checkbox">
                <input type="checkbox" />
                <span class="checkmark"></span>
            </label>
            Por favor, seleccione esta casilla si el contrato está a su nombre.
        </div>


        <button className="btn cta mb-20">Iniciar sesión</button>

        <div>
            <a href="#" className="link">Eres nuevo en Activa? <br className="d-block" />
            Regístrate.</a>
        </div>

        </div>
        

    </section>
}
