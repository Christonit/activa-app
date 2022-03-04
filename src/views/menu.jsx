import { React } from "react";
import '../sass/main.scss';

export const Menu = () => {
    return <section className="action-container">
        <div className="nav-header">
            <button className="app-bar-button">
                <img src="https://tedwaffl.sirv.com/Activa/close.svg" alt="" />
            </button>

           
        </div>


       
        <div className="action-body ">

            <div className="mb-28">
                <img src="https://tedwaffl.sirv.com/Activa/activaLogo.svg" alt="Branding" className="small-logo" />
            </div>



            <div className="sidemenu-item">
                <span className="sidemenu-item-img">
                    <img src="https://tedwaffl.sirv.com/Activa/combined-shape-2.svg" alt="" />
                </span>
                <span className="sidemenu-item-text">
                        Mi perfil
                </span>

                <button class="material-icons">
                    navigate_next
                </button>
            </div>
            <div className="sidemenu-item ">
                <span className="sidemenu-item-img failure">
                    <img src="https://tedwaffl.sirv.com/Activa/averias.svg" alt="" />
                </span>
                <span className="sidemenu-item-text">
                        Mi perfil
                </span>

                <button class="material-icons">
                    navigate_next
                </button>
            </div>
            <div className="sidemenu-item ">
                <span className="sidemenu-item-img regular">
                    <img src="https://tedwaffl.sirv.com/Activa/combined-shape-2.svg" alt="" />
                </span>
                <span className="sidemenu-item-text">
                        Mi perfil
                </span>

                <button class="material-icons">
                    navigate_next
                </button>
            </div>
            <div className="sidemenu-item ">
                <span className="sidemenu-item-img warning">
                    <img src="https://tedwaffl.sirv.com/Activa/pagos.svg" alt="" />
                </span>
                <span className="sidemenu-item-text">
                        Mi perfil
                </span>

                <button class="material-icons">
                    navigate_next
                </button>
            </div>
            

        </div>
        

    </section>
}
