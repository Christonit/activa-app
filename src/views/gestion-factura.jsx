import {React} from "react";
import "../sass/main.scss";
export const GestionFactura = () => {
    return (
        <section className="view-container payment-historic">
            <div class="nav-header">
                <button class="app-bar-button">
                    <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
                </button>
                <h2 class="nav-header-title">Pago de factura</h2>
                <button class="app-bar-button me-auto">
                    <img src="https://tedwaffl.sirv.com/Activa/bag.svg" alt="" />
                </button>
            </div>
            <div className="view-body">
                <h1 className="title mb-0">Gestión de facturas</h1>
            </div>
            <div className="view-body second-body-white">
                <div className="mb-32">
                    <p className="text mb-16">Seleccione las facturas que deseas pagar:</p>

                    <div class="form-checkbox-container mb-24">
                        <label class="form-checkbox">
                            <input type="checkbox" />
                            <span class="checkmark"></span>
                        </label>
                        Seleccionar todas
                    </div>

                    <div className="selectable-box-container">
                        <div className="selectable-box">
                            <p class=" label-color size-10 mb-8 bold">FECHA: 16/01/2022</p>
                            <p class=" bold mb-8">00100014243 (3 servicios)</p>
                            <h3 class=" size-22 bold">RD$ 198.40</h3>
                            <div class="d-flex align-items-center size-14 mb-16">Pague antes del 28 Feb 2022</div>
                            <div class="d-flex align-items-center">
                                <button class=" btn-secondary py-4 px-12 mr-8">Seleccionar</button>
                                <button class=" link py-4 px-12">Ver factura</button>
                            </div>
                        </div>
                        <div className="selectable-box selected">
                            <p class=" label-color size-10 mb-8 bold">FECHA: 16/01/2022</p>
                            <p class=" bold mb-8">00100014243 (3 servicios)</p>
                            <h3 class=" size-22 bold">RD$ 198.40</h3>
                            <div class="d-flex align-items-center size-14 red mb-16">
                                <span class="material-icons-outlined size-14 mr-8 ">info</span>
                                Servicio suspendido por falta de pago.
                            </div>
                            <div class="d-flex align-items-center">
                                <button class=" cta py-4 px-12 mr-8">Pagar factura</button>
                                <button class=" link py-4 px-12">Ver factura</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="action-cta">
                    <button class="btn cta mb-16">Iniciar sesión</button>
                </div>
            </div>
        </section>
    );
};
