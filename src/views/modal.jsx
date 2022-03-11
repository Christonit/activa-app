import { React } from "react";
import '../sass/main.scss';

export const Modal = () => {
    return <>

        <div className="modal-box">
            <div className="overlay"></div>
            <div className="modal">
                <p className="text">Estás seguro que quieres eliminar el alias:</p>
                <h2 className="subtitle mb-24">"Oficia"</h2>

                <div className="button-container-horizontal">
                    <button className="btn btn-secondary px-36">Sí</button>
                    <button className="btn btn-secondary px-36">No</button>
                </div>
            </div>
        </div>
    </>
}

export const ModalAccountAlias = () => {
    return <>

        <div className="modal-box">
            <div className="overlay"></div>
            <div className="modal">
                <p className="text">Añadir alias a la cuenta:</p>
                <h2 className="subtitle mb-24">00100014243</h2>

                <div className="">
                
                    <input type="text" className="form-control" placeholder="i.e. Oficina, Casa, Local… " name="field"/>
                    <p className="text-center label-color mt-8 mb-0">Máximo 30 caracteres.</p>
                </div>

                <div className="button-container w-100 mb-0">
                    <button className="btn cta mb-32 ">Guardar</button>
                    <button className="link justify-content-center">Cancelar</button>
                </div>
            </div>
        </div>
    </>
}
