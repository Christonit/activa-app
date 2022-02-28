import { React } from "react";
import '../sass/main.scss';
import {InputFieldWithIcon} from "../components/input-field"

export const RecargaDatosDeLaTarjeta = () => {
    return <section className="action-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>

            <h2 className="nav-header-title">Recargas</h2>

            <button className="app-bar-button me-auto">
                <img src="https://tedwaffl.sirv.com/Activa/bag.svg" alt="" />
            </button>
        </div>


       
        <div className="action-body ">
            <h1 className="title mb-32">Datos de la tarjeta</h1>

            <div className="collapsable-box">
                <div className="collabable-row ">
                    <span className="text-smallest medium">RESUMEN DEL PEDIDO:</span>
                    <span className="text-smallest medium success">REF. 678590</span>
                </div>
                <div className="collabable-row mt-4">
                    <span className="text bold">Recarga Billetera</span>
                    <button className="collapsable-btn inactive material-icons">keyboard_arrow_down</button>
                    <button className="collapsable-btn active material-icons">keyboard_arrow_up</button>
                </div>

                <div className="collapsable-content">
                
                <div className="collabable-row py-8 mt-8">
                    <span className="text">Monto a recargar:</span>
                    <span className="text">$ 1000.00</span>
                </div>
                <hr className="divider mt-8 mb-8" />
                <div className="collabable-row py-8">
                    <span className="text">Impuestos:</span>
                    <span className="text ">$ 00.00</span>
                </div>
                <div className="collabable-row py-8">
                    <span className="text">Total a pagar:</span>
                    <span className="text bold sucess">RD$ 1000.00</span>
                </div>
                </div>
            </div>

            <div className="bankcard-grid">
            <img src="https://tedwaffl.sirv.com/Activa/debitcard.svg" alt="" />
            <img src="https://tedwaffl.sirv.com/Activa/debitcard.svg" alt="" />
            <img src="https://tedwaffl.sirv.com/Activa/debitcard.svg" alt="" />
            <img src="https://tedwaffl.sirv.com/Activa/debitcard.svg" alt="" />
            </div>

            <div className="mb-32">
                <div className="form-label">
                    
                    <label for="field" className="">Número de tarjeta:</label>
                    <span className="material-icons form-check-icon ml-4">
                        check_circle
                    </span>
                  
                </div>
                <div className="input-with-icon">
                    <input type="email" className="form-control" value="5573   5743    0908   3029" name="field" />
                    <button className="password-icon input-icon">
                        <img src="https://tedwaffl.sirv.com/Activa/lock.svg" alt="" />
                    </button>

                </div>
                
            </div>
            <div className="mb-32">
                <div className="form-label">
                    
                    <label for="field" className="">Nombre del titular:</label>
                    <span className="material-icons form-check-icon ml-4">
                        check_circle
                    </span>
                  
                </div>
                <input type="text" className="form-control" value="Carlos M Pérez" name="field" />
            </div>

            <div className="input-groups">
                <div className="">
                    <div className="form-label">
                        
                        <label for="field" className="">Fecha de expiración:</label>
                        <span className="material-icons form-check-icon ml-4">
                            check_circle
                        </span>
                    
                    </div>
                    <input type="text" className="form-control" value="02/24" name="field" />
                    
                    
                </div>
                <div className="">
                    <div className="form-label">
                        
                        <label for="field" className="">Código de seguridad:</label>
                        <span className="material-icons form-check-icon ml-4">
                            check_circle
                        </span>
                    
                    </div>
                    <div className="input-with-icon">
                        <input type="email" className="form-control" value="557" name="field" />
                        <button className="input-icon">
                            <img src="https://tedwaffl.sirv.com/Activa/questionIcon.svg" alt="" />
                        </button>

                    </div>
                    
                </div>
            </div>
            

            <div className="action-cta">
                <button className="btn cta">Continuar</button>
            </div>

        </div>
        

    </section>
}
