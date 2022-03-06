import { React } from "react";
import '../sass/main.scss';
export const Cart = () => {
    return <section className="action-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/bag.svg" alt="" />
            </button>
        
        </div>


        <div className="action-body">

            <h1 className="title">Cesta (2)</h1>
           
                
                <div className="cart-table">
                    <div className="cart-table-header-row mb-4">
                        <span className="text bold">TV PREPAGO</span>

                        <button className="link red px-0">
                            Eliminar
                            <span class="material-icons ml-4">
                                cancel
                            </span>
                        </button>

                    </div>
                   
                    <div className="cart-table-row">
                        <span className="text">Precio:</span>
                        <span className="text">$ 1067.00</span>
                    </div>
                </div>

                <div className="cart-table mb-0">
                    <div className="cart-table-header-row mb-4">
                        <span className="text bold">Activa GO</span>
                        <button className="link red px-0">
                            Eliminar
                            <span class="material-icons ml-4">
                                cancel
                            </span>
                        </button>
                    </div>
                    <div className="cart-table-row">
                        <span className="text">Velocidad:</span>
                        <span className="text">4 Mbps</span>
                    </div>
                    <div className="cart-table-row">
                        <span className="text">Duración:</span>
                        <span className="text">15 días ($71.13 x día)</span>
                    </div>
                    <div className="cart-table-row">
                        <span className="text">Precio:</span>
                        <span className="text">$ 1067.00</span>
                    </div>
                </div>
                <div className="resume-table-alternative">
                    <div className="resume-table-row">
                        <span className="text">Subtotal:</span>
                        <span className="text">$ 25.00</span>
                    </div>
                    <div className="resume-table-row">
                        <span className="text">Impuestos:</span>
                        <span className="text">$ 25.00</span>
                    </div>
                    <div className="resume-table-row">
                        <span className="text bold">Total a pagar:</span>
                        <span className="text bold">RD$ 2500.00</span>
                    </div>
                </div>

                <div className="action-cta">
                    <button className="btn cta">Continuar</button>
                </div>

        </div>
        

    </section>
}
