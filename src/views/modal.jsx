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
