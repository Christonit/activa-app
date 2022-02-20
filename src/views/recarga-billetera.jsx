import { React } from "react";
import '../sass/main.scss';
export const Wallet = () => {
    return <section className="view-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>
            <button className="app-bar-button ms-auto">
                <img src="https://tedwaffl.sirv.com/Activa/settings.svg" alt="" />
            </button>
        </div>


        <div className="view-body">

    
            <h1 className="title mb-16">Billetera</h1>
            
            <div>
                <p className="text mb-8">Saldo actual:</p>
                <h2 className="hero-data-title">RD$ 198.40</h2>
            </div>

        </div>
        <div className="view-body second-body-white">

    
            <h2 className="subtitle mb-24">Añadir fondos</h2>
            
            <div className="mb-32">
                <p className="text mb-16">Seleccione el importe que desea recargar:</p>
                <div className="selectable-items-grid">
                    <button className="selectable-item">$50</button>
                    <button className="selectable-item">$50</button>
                    <button className="selectable-item">$50</button>
                    <button className="selectable-item">$50</button>
                    <button className="selectable-item active">$50</button>
                </div>
            </div>


            <div>
                <div className="form-label">
                    <label for="field" className="">o Introduzca el importe manualmente:</label>
                    <span className="material-icons form-check-icon ml-4">
                        check_circle
                    </span>
                </div>
                <div className="input-compound">
                    <label htmlFor="fied">RD$</label>
                    <input type="email" className="form-control" name="field" />
                </div>
            </div>
           

            <div className="action-cta">
                <button className="btn cta ">Continuar</button>
            </div>

        </div>
        

    </section>
}
