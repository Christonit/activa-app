import { React } from "react";
import '../sass/main.scss';
export const RecargaMetodoPago = () => {
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

            <h1 className="title mb-0">Metodo de pago</h1>
           
        </div>
        <div className="view-body second-body-white">
            <div className="message-box failure mb-32">
                <span className="material-icons-outlined red form-check-icon mb-12">
                    warning
                </span>

                <p className="text red mb-0">
                No tienes saldo suficiente en la billetera para completar este pago. Si lo deseas, puedes <a href="/#"> añadir saldo a la billetera</a> y luego continuar con esta recarga.
                </p>
            </div>

            <div className="mb-32">
                <p className="text mb-16">Elija la duración:</p>
                <div className="selectable-items-inline">
                    <button className="selectable-item-inline disabled">
                        <img src="https://tedwaffl.sirv.com/Activa/cardAdmin.svg" alt="" />
                        <div>
                            <p className="mb-0 bold text">Billetera</p>
                            <p className="text-small mb-0 mt-4 ">
                                Saldo dispobile:
                                <span className="success ml-8 ">RD$ 190.99</span>
                            </p>

                        </div>
                    </button>
                    <button className="selectable-item-inline">
                        <img src="https://tedwaffl.sirv.com/Activa/cardAdmin.svg" alt="" />
                        <div>
                            <p className="mb-0 bold text">Billetera</p>
                            <p className="text-small mb-0 mt-4 ">
                                Saldo dispobile:
                                <span className="success ml-8 ">RD$ 190.99</span>
                            </p>

                        </div>
                    </button>
                    <button className="selectable-item-inline active">
                        <img src="https://tedwaffl.sirv.com/Activa/cardAdmin.svg" alt="" />
                        <div>
                            <p className="mb-0 bold text">Tarjeta</p>
                            <p className="text-small mb-0 mt-4">
                                Crédito o débito
                            </p>

                        </div>
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
            <h3 className="subtitle text-right mt-16 mb-196"> Total: RD$ 00.00</h3>

            <div className="action-cta">
                <button className="btn cta">Continuar</button>
            </div>

        </div>
        

    </section>
}
