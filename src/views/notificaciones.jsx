import {React} from "react";
import "../sass/main.scss";

export const Notificaciones = () => {
    return (
        <section className="action-container">
            <div className="nav-header">
                <button className="app-bar-button">
                    <img src="https://tedwaffl.sirv.com/Activa/close.svg" alt="" />
                </button>
            </div>

            <div className="action-body ">
                <h1 className="title">Notificaciones</h1>

                <div className="notif-filter-panes">
                    <div className="notif-filter-header">
                        <button className="notif-filter-nav active">Todas</button>
                        <button className="notif-filter-nav sign-up active ">Todas</button>
                        <button className="notif-filter-nav">Todas</button>
                        <button className="notif-filter-nav">Todas</button>
                    </div>

                    <div className="notif-content">
                        <h2 className="subtitle mb-16">Hoy</h2>
                        <div className="notif-item">
                            <span className="notif-icon">
                                <img src="https://tedwaffl.sirv.com/Activa/averias.svg" alt="" />
                            </span>
                            <div className="notif-item-content">
                                <span className="text mb-0 bold">
                                    Reporte de avería <span className="status-label">Nuevo</span>{" "}
                                </span>
                                <span className="text-small label-color">
                                    La insidencia reportada en fecha 14 de Noviembre 2021, ha sido resuelta
                                    exitosamente.
                                </span>
                            </div>
                        </div>
                        <div className="notif-item">
                            <span className="notif-icon">
                                <img src="https://tedwaffl.sirv.com/Activa/averias.svg" alt="" />
                            </span>
                            <div className="notif-item-content">
                                <span className="text mb-0 bold">
                                    Reporte de avería <span className="status-label">Nuevo</span>{" "}
                                </span>
                                <span className="text-small label-color">
                                    La insidencia reportada en fecha 14 de Noviembre 2021, ha sido resuelta
                                    exitosamente.
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="notif-content">
                        <h2 className="subtitle">Hoy</h2>
                        <div className="notif-item">
                            <span className="notif-icon">
                                <img src="https://tedwaffl.sirv.com/Activa/averias.svg" alt="" />
                            </span>
                            <div className="notif-item-content">
                                <span className="text mb-0 bold">
                                    Reporte de avería <span className="status-label">Nuevo</span>{" "}
                                </span>
                                <span className="text-small label-color">
                                    La insidencia reportada en fecha 14 de Noviembre 2021, ha sido resuelta
                                    exitosamente.
                                </span>
                            </div>
                        </div>
                        <div className="notif-item">
                            <span className="notif-icon">
                                <img src="https://tedwaffl.sirv.com/Activa/averias.svg" alt="" />
                            </span>
                            <div className="notif-item-content">
                                <span className="text mb-0 bold">
                                    Reporte de avería <span className="status-label">Nuevo</span>{" "}
                                </span>
                                <span className="text-small label-color">
                                    La insidencia reportada en fecha 14 de Noviembre 2021, ha sido resuelta
                                    exitosamente.
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
