import { React } from "react";
import '../sass/main.scss';
import { InputFieldWithCheck, InputFieldWithInfo } from "../components/input-field";
import { InputfieldComposed } from "../components/input-field-with-dropdown";
export const Registro = () => {
    return <section className="action-container">
        <div className="nav-header">
           
        </div>


        <div className="action-body">


            <div className="mb-28">
            <img src="https://tedwaffl.sirv.com/Activa/activaLogo.svg" alt="Branding" className="small-logo" />
        </div>

        <h3 className="headline-label">1 de 3</h3>
        <h2 className="title">Registrarse</h2>

        <InputFieldWithCheck/>

        <InputFieldWithInfo/>

        <div className="mb-24">
            <div className="form-label">
                
                <label for="field" className="">Contraseña:</label>
                <span class="material-icons form-check-icon ml-4">
                    check_circle
                </span>
                <a href="#" className="link ms-auto">¿Olvidaste tu contraseña?</a>
            </div>
            <div className="input-with-icon">
                <input type="password" className="form-control" name="field" />
                <button className="password-icon input-icon">
                    <img src="https://tedwaffl.sirv.com/Activa/see.svg" alt="" />
                </button>

            </div>
           
            
        </div>
        <InputfieldComposed/>
        
           

        </div>

        <div className="action-cta">
                <button className="btn cta ">Continuar</button>
            </div>
        

    </section>
}
