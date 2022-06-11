import {React} from "react";
import "../sass/main.scss";
export const ReportesAveria = () => {
    return (
        <section className="view-container service-fail">
            <div className="nav-header">
                <button className="app-bar-button ma-auto">
                    <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
                </button>
            </div>

            <div className="view-body">
                <h1 className="title mb-0">Reportar avería</h1>
            </div>
            <div className="view-body second-body-white">
                <div className="notif-filter-panes">
                    <div className="notif-filter-header">
                        <button className="notif-filter-nav active">Abiertas</button>
                        <button className="notif-filter-nav">Cerradas</button>
                    </div>

                    <div className="notif-content no-border">
                        <div className="collapsable-box alternative">
                            <div className="collabable-row ">
                                <div className="">
                                    <p className="text-smallest medium mb-8">
                                        RESUMEN DEL PEDIDO: <span className=" success">REF. 678590</span>
                                    </p>
                                    <p className="text bold mb-0">Canales pixelados (todos)</p>
                                </div>

                                <button className="collapsable-btn inactive material-icons">keyboard_arrow_down</button>
                                <button className="collapsable-btn active material-icons">keyboard_arrow_up</button>
                            </div>

                            <div className="collapsable-content">
                                <div className="collabable-row py-8 mt-8 d-block">
                                    <p className="text size-14 mb-4">
                                        <b>Prioridad:</b> Normal <span className="red">!</span>
                                    </p>
                                    <p className="text size-14 mb-4">
                                        <b>Estado:</b> <span className="red">Esperando aprobación.</span>
                                    </p>
                                    <p className="text size-14  mb-4 bold">
                                        Número de cuenta:<span className="blue"> 0010014243</span>
                                    </p>
                                    <p className="text size-14 mb-4">
                                        <b>Fecha y hora del reporte:</b> 9 de Junio 2022, 4:38pm
                                    </p>
                                    <p className="text size-14 mb-4">
                                        <b>Técnico asignado:</b> Juan Pérez
                                    </p>
                                    <p className="text size-14">
                                        <b>Tiempo estimado de resolución:</b> 48 Horas
                                    </p>

                                    <p className="text size-14 bold mb-0">Descripción:</p>
                                    <p className="text size-14 mb-0">
                                        Descripción: La calidad de la imagen de todos los canales es muy mala y se ve
                                        cortada.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="collapsable-box alternative active">
                            <div className="collabable-row ">
                                <div className="">
                                    <p className="text-smallest medium mb-8">
                                        RESUMEN DEL PEDIDO: <span className=" success">REF. 678590</span>
                                    </p>
                                    <p className="text bold mb-0">Canales pixelados (todos)</p>
                                </div>

                                <button className="collapsable-btn inactive material-icons">keyboard_arrow_down</button>
                                <button className="collapsable-btn active material-icons">keyboard_arrow_up</button>
                            </div>

                            <div className="collapsable-content">
                                <div className="collabable-row py-8 mt-8 d-block">
                                    <p className="text size-14 mb-4">
                                        <b>Prioridad:</b> Normal <span className="red">!</span>
                                    </p>
                                    <p className="text size-14 mb-4">
                                        <b>Estado:</b> <span className="red">Esperando aprobación.</span>
                                    </p>
                                    <p className="text size-14  mb-4 bold">
                                        Número de cuenta:<span className="blue"> 0010014243</span>
                                    </p>
                                    <p className="text size-14 mb-4">
                                        <b>Fecha y hora del reporte:</b> 9 de Junio 2022, 4:38pm
                                    </p>
                                    <p className="text size-14 mb-4">
                                        <b>Técnico asignado:</b> Juan Pérez
                                    </p>
                                    <p className="text size-14">
                                        <b>Tiempo estimado de resolución:</b> 48 Horas
                                    </p>

                                    <p className="text size-14 bold mb-0">Descripción:</p>
                                    <p className="text size-14 mb-0">
                                        Descripción: La calidad de la imagen de todos los canales es muy mala y se ve
                                        cortada.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
