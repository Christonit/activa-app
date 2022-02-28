import { React } from "react";
import '../sass/main.scss';
export const RecargaPrepago = () => {
    return <section className="view-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>

            <h2 className="nav-header-title">Recargas</h2>

            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/bag.svg" alt="" />
            </button>
        </div>


        <div className="view-body">

    
            <h1 className="title mb-16">Billetera</h1>
            
            <div className="d-flex align-items-center">
                <p className="text mb-0">Balance: <b className="red ml-4">RD$ 25.75</b> </p> 
            </div>

        </div>
        <div className="view-body second-body-white">
            
            <div className="mb-32">
                <p className="text mb-16">Elija la duración:</p>
                <div className="selectable-items-grid">
                    <button className="selectable-item">1 mes</button>
                    <button className="selectable-item">15 días</button>
                    <button className="selectable-item">1 semana</button>
                    <button className="selectable-item active">Días</button>
                    <button className="selectable-item counter">
                        
                        <button className="selectable-item-button">-</button>
                        <button className="selectable-item-label">5</button>
                        <button className="selectable-item-button">+</button>

                    </button>

                </div>
                
            </div>
            <div className="mb-32">
                <p className="text mb-16">Selectable Carousel:</p>
                <div className="selectable-carousel-container">
                    <div className="selectable-items-grid carousel">
                        <button className="selectable-item">1 mes</button>
                        <button className="selectable-item">15 días</button>
                        <button className="selectable-item">1 semana</button>
                        <button className="selectable-item">Días</button>
                    </div>
                </div>
                
                
            </div>

            <div className="resume-table">
                <div className="resume-table-row">
                    <span className="text">Precio x día</span>
                    <span className="text">$ 25.00</span>
                </div>
                <div className="resume-table-row">
                    <span className="text">Precio x día</span>
                    <span className="text">$ 25.00</span>
                </div>
                <div className="resume-table-row">
                    <span className="text">Precio x día</span>
                    <span className="text">$ 25.00</span>
                </div>
            </div>
            <h3 className="subtitle text-right mt-16"> Total: RD$ 00.00</h3>


            <div className="action-cta">
                <button className="btn btn-cta-secondary mb-16">Añadir a la cesta</button>
                <button className="btn cta ">Continuar con la recarga</button>
            </div>

        </div>
        

    </section>
}
