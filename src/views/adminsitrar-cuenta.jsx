import { React } from "react";
import '../sass/main.scss';
export const AdministrarCuenta = () => {
    return <section className="view-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>

            
        </div>

        <div className="view-body">
    
            <h1 className="title mb-0">Administrar cuentas</h1>

        </div>
        <div className="view-body second-body-white">
            <h2 className="subtitle mb-16">Información general:</h2>
            <div className="faux-table">
                <p className="text mb-8">Número de cuenta:</p>
                <span className="text bold">00100014243</span>
                <button className="link ml-8">
                    Añadir alias
                    
                </button>
                <button className="link material-icons">
                    help_outline
                </button>

                
            </div>
            <div className="faux-table">
                <p className="text mb-8">Contrato:</p>
                <span className="text bold">Nr. 9548</span>
                <button className="link ml-8">
                    Ver contrato (PDF)
                </button>    

            </div>

            <div className="mt-32">
                <p className="text mb-8">Servicios contratados (3):</p>
                <div className="sidemenu-item alternative">
                    <span className="sidemenu-item-img ">
                        <img src="https://tedwaffl.sirv.com/Activa/combined-shape-2.svg" alt="" />
                    </span>
                    <span className="sidemenu-item-text bold">
                            Mi perfil
                    </span>

                    <button class="material-icons">
                        navigate_next
                    </button>
                </div>
                
                <div className="sidemenu-item alternative">
                    <span className="sidemenu-item-img warning">
                        <img src="https://tedwaffl.sirv.com/Activa/pagos.svg" alt="" />
                    </span>
                    <span className="sidemenu-item-text bold">
                            Mi perfil
                    </span>

                    <button class="material-icons">
                        navigate_next
                    </button>
                </div>
                
            </div>

        </div>
        

    </section>
}
