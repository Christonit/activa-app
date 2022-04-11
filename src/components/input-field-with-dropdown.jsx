import { React } from "react";

// export const Inputfield = ({label = "[text]:"}) => {
//     return <div className="mb-24">
//                 <div className="form-label">
//                     <label for="field" >{label}</label>
                    
//                     </div>
//                 <input type="email" className="form-control" name="field"/>
//             </div>
// }

export const InputfieldComposed = ({label = "[text]:", type = "normal" } ) => {
    return <div className={`${type == "wrong value" ? 'wrong-value-field' : "" }`}>
                <div className="form-label">
                
                    <label for="field" className="">[label]</label>
                   
                </div>

                <div className="input-compound">
                    <div className="flag-dropdown">
                        <img src="https://tedwaffl.sirv.com/Activa/dominicanRepublic_2022-03-08/dominicanRepublic%402x.png" width="24" height="16" alt="" />
                    </div>
                    <input type="email" className="form-control" name="field" />
                </div>
            </div>
}

