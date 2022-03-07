import { React } from "react";
import '../sass/main.scss';
export const FeedbackSimpleLike = () => {
    return <section className="action-container">
            <div className="nav-header">
                <button href="#" className="link ms-auto">Omitir</button>

            </div>

            <div className="confirmation-body">

                <div className="feedback-circle">
                    <h3>Recarga</h3>
                    <h2>TV Prepago</h2>

                    <button className="feedback-btn like" disabled>
                        <img src="https://tedwaffl.sirv.com/Activa/bien.svg" alt="" />
                    </button>
                </div>

                <h1 className="subtitle text-center mb-16">¿Qué destacarías?</h1>

                <p className="text text-center mb-24">Nos ayudará a mejorar nuestros servicios.</p>

                <div className="selectable-items-alt mb-16">
                    <span className="selectable-item-alt">Fácil</span>     
                    <span className="selectable-item-alt">Rápido</span>     
                    <span className="selectable-item-alt selected">Claro</span>     
                    <span className="selectable-item-alt">Eficiente</span>     
                    <span className="selectable-item-alt">Divertido</span>     
                </div>

                <p className="text-small label-color text-center mb-32">(Puedes elegir más de una opción)</p>
                
                <div className="text-center">
                    <div className="button-container">
                        <button className="btn btn-secondary px-36">Listo</button>
                    </div>
                </div>

            </div>
            
        </section>
}
