import {React, useEffect} from "react";
import "../sass/main.scss";
import {BasicaBanner} from "../components/banners";
export const MainScreen = ({slide_active = false}) => {
    useEffect(() => {
        const actions = document.querySelector("#main-actions-access");
        const el_position = actions.offsetTop;
        const sidesheet = document.querySelector("#payment-drawers");
        sidesheet.style.top = 164 + el_position + "px";
    }, []);

    return (
        <section className="view-container">
            {slide_active && <div className="overlay"></div>}
            <div className="nav-header home-screen">
                <button className="app-bar-button home-screen-button">
                    <img src="https://tedwaffl.sirv.com/Activa/menu-copy.svg" alt="" />
                </button>

                <div className="home-screen-button-container">
                    <button className="app-bar-button mr-16">
                        <img src="https://tedwaffl.sirv.com/Activa/notifications.svg" alt="" />
                    </button>
                    <button className="app-bar-button">
                        <span className="notif-counter">9</span>
                        <img src="https://tedwaffl.sirv.com/Activa/bag.svg" alt="" />
                    </button>
                </div>
            </div>

            <div className="view-body">
                <BasicaBanner />

                <div className="user-information">
                    <div className="user-information-picture">
                        <div className="user-information-picture-container">
                            <img
                                src="https://tedwaffl.sirv.com/Activa/152319944-close-up-headshot-portrait-of-smiling-vietnamese-young-woman-look-at-camera-talk-on-video-call-profi.jpg"
                                alt=""
                            />
                        </div>
                        <button className="user-information-button">
                            <img src="https://tedwaffl.sirv.com/Activa/edit.svg" alt="" />
                        </button>
                    </div>

                    <h1 className="user-information-title">¡Hola Carlos, Bienvenido!</h1>

                    <p className="label-color text-small">carlos.perez@gmail.com</p>
                </div>
                <div className="main-actions-access" id="main-actions-access">
                    <button className="main-action-btn">
                        <span className="main-action-icon">
                            <img src="https://tedwaffl.sirv.com/Activa/balance.svg" alt="" />
                        </span>
                        <span className="main-action-label">Balance</span>
                    </button>
                    <button className="main-action-btn">
                        <span className="main-action-icon">
                            <img src="https://tedwaffl.sirv.com/Activa/combined-shape.svg" alt="" />
                        </span>
                        <span className="main-action-label">Pagos</span>
                    </button>
                    <button className="main-action-btn">
                        <span className="main-action-icon">
                            <img src="https://tedwaffl.sirv.com/Activa/offers.svg" alt="" />
                        </span>
                        <span className="main-action-label">Ofertas</span>
                    </button>
                    <button className="main-action-btn">
                        <span className="main-action-icon">
                            <img src="https://tedwaffl.sirv.com/Activa/averias.svg" alt="" />
                        </span>
                        <span className="main-action-label">Averías</span>
                    </button>
                </div>

                <div
                    id="payment-drawers"
                    onTouchEnd={e => {
                        var x = e.changedTouches[0].clientX;
                        var y = e.changedTouches[0].clientY;
                        console.log("touchend", y);
                        const sidesheet = document.querySelector("#payment-drawers");
                        const actions = document.querySelector("#main-actions-access");
                        const el_position = actions.offsetTop;
                        if (y < 280) {
                            sidesheet.classList.add("active");
                            sidesheet.style.top = "17.5%";

                            return;
                        }
                        if (y > 280 && y < 379) {
                            sidesheet.classList.add("active");
                            sidesheet.style.top = "17.5%";

                            return;
                        } else if (y > 380) {
                            sidesheet.classList.remove("active");
                            sidesheet.style.top = 164 + el_position + "px";
                            return;
                        }
                        sidesheet.style.top = y + "px";
                    }}
                    onTouchMove={e => {
                        var x = e.touches[0].clientX;
                        var y = e.touches[0].clientY;
                        const sidesheet = document.querySelector("#payment-drawers");
                        if (sidesheet.classList.contains("active")) sidesheet.classList.remove("active");
                        console.log("touch move", y);
                        sidesheet.style.top = y + "px";
                    }}
                    className={`sheet-drawer ${slide_active ? "active" : ""}`}>
                    <div className="sheet-drawer-header">
                        <button className="drawer-button">
                            <hr />
                        </button>
                        <h3 className="text bold text-center mb-12">Número de cuenta:</h3>
                        <input type="text" className="form-control sheet-drawer-input" name="service" />
                    </div>

                    <div className="service-item">
                        <img src="https://tedwaffl.sirv.com/Activa/combined-shape.svg" alt="" />
                        <div className="ms-3">
                            <span className="service-item-title">Activate GO</span>

                            <span className="service-item-text">
                                Disponible por:
                                <span className="service-item-data">2 dias</span>
                            </span>
                        </div>

                        <button class="material-icons">navigate_next</button>
                    </div>
                    <div className="service-item">
                        <img src="https://tedwaffl.sirv.com/Activa/combined-shape.svg" alt="" />
                        <div className="ms-3">
                            <span className="service-item-title">Activate GO</span>

                            <span className="service-item-text">
                                Disponible por:
                                <span className="service-item-data">2 dias</span>
                            </span>
                        </div>

                        <button class="material-icons">navigate_next</button>
                    </div>
                    <div className="service-item">
                        <img src="https://tedwaffl.sirv.com/Activa/combined-shape.svg" alt="" />
                        <div className="ms-3">
                            <span className="service-item-title">Activate GO</span>

                            <span className="service-item-text">
                                Disponible por:
                                <span className="service-item-data">2 dias</span>
                            </span>
                        </div>

                        <button class="material-icons">navigate_next</button>
                    </div>
                    <div className="service-item">
                        <img src="https://tedwaffl.sirv.com/Activa/combined-shape.svg" alt="" />
                        <div className="ms-3">
                            <span className="service-item-title">Activate GO</span>

                            <span className="service-item-text">
                                Disponible por:
                                <span className="service-item-data">2 dias</span>
                            </span>
                        </div>

                        <button class="material-icons">navigate_next</button>
                    </div>
                </div>
            </div>
        </section>
    );
};
