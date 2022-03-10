import { React } from "react";
import '../sass/main.scss';
export const ReportarAveria = () => {
    return <section className="view-container service-fail">
        <div className="nav-header">
            <button className="app-bar-button ma-auto">
                <img src="https://tedwaffl.sirv.com/Activa/arrow_back_ios_new_black_24dp(1).svg" alt="" />
            </button>
        </div>

        <div className="view-body">
    
            <h1 className="title mb-0">Reportar avería</h1> 

        </div>
        <div className="view-body second-body-white">
            
            <div className="mb-32">
                <p className="text mb-16">Elija un número de cuenta:</p>

                <div className="form-select-dropdown">
                    <select name="" id="" className="form-control">
                        <option>00100014243</option>
                        <option>00100014243</option>
                        <option>00100014243</option>
                    </select>
                </div>
            </div>
            <div className="mb-32">
                <p className="text mb-16">Tipo de avería:</p>

                <div className="form-select-dropdown">
                    <select name="" id="" className="form-control">
                        <option>Elija una opción</option>
                        <option>000000000</option>
                    </select>
                </div>
            </div>

            <div className="mb-32">
                <p className="text mb-16">Descripción:</p>
                <textarea className="form-textarea"></textarea>

            </div>

            <div>
                <button className="btn cta ">Reportar avería</button>
            </div>
        </div>
        

    </section>
}
