import { React } from "react";
import '../sass/main.scss';
export const FeedbackSimple = () => {
    return <section className="action-container">
            <div className="nav-header">
                <button href="#" className="link ms-auto">Omitir</button>

            </div>

            <div className="confirmation-body">

                <div className="feedback-circle">
                    <h3>Recarga</h3>
                    <h2>TV Prepago</h2>
                </div>

                <h1 className="title text-center">¿Cómo valorarías la experiencia de esta recarga?</h1>
                
              
                <div className="feedback-buttons">
                    <button className="feedback-btn dislike">
                        <img src="https://tedwaffl.sirv.com/Activa/mal.svg" alt="" />
                    </button>
                    <button className="feedback-btn like">
                        <img src="https://tedwaffl.sirv.com/Activa/bien.svg" alt="" />
                    </button>
                </div>
                
            </div>
            
        </section>
}
