import { React } from "react";
import '../sass/main.scss';
export const CambiarMoneda = () => {
    return <section className="action-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>
        </div>


        <div className="action-body">

            <h1 className="title">Cambiar de moneda</h1>

            <p className="text mb-16">Elija la duración:</p>
                <div className="selectable-items-inline mb-32">
                    <button className="selectable-item-inline">
                        <img src="https://tedwaffl.sirv.com/Activa/dominicanRepublic_2022-03-08/dominicanRepublic%403x.png"  alt="" />
                        <div>
                            <p className="mb-0 bold text">Peso Dominicano</p>
                        </div>
                    </button>
                    <button className="selectable-item-inline active">
                        <img src="https://tedwaffl.sirv.com/Activa/dominicanRepublic_2022-03-08/dominicanRepublic%403x.png"  alt="" />
                        <div>
                            <p className="mb-0 bold text">Dólar Estadounidense</p>
                        </div>
                    </button>
                </div>

                <button className="btn btn-secondary w-100">Continuar</button>

        </div>
        

    </section>
}
