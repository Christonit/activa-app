import { React } from "react";

// export const Inputfield = ({label = "[text]:"}) => {
//     return <div className="mb-24">
//                 <div className="form-label">
//                     <label for="field" >{label}</label>
                    
//                     </div>
//                 <input type="email" className="form-control" name="field"/>
//             </div>
// }

export const Inputfield = ({label = "[text]:", type = "normal" } ) => {
    return <div className={`mb-24 ${type == "wrong value" ? 'wrong-value-field' : "" }`}>
                <div className="form-label">
                    <label for="field" >{label}</label>
                    {type == "correct" && <span className="material-icons form-check-icon ml-4">
                        check_circle
                    </span>}
                    {type == "wrong value" && <span className="material-icons form-check-icon ml-4">
                        cancel
                    </span>}
                    </div>
                <input type="email" className="form-control" name="field"/>
            </div>
}

export const InputFieldWithCheck = ({label = "[text]:", link = "[link]", value = ""} ) => {
    return <div className="mb-24">
                <div className="form-label">
                    <label for="field" className="">{label}</label>
                    <span className="material-icons form-check-icon ml-4">
                        check_circle
                    </span>
                    <a href="#" className="link ms-auto">{link}</a>
                </div>
                <input type="email" className="form-control"  value={value} name="field"/>
            </div>
}

export const InputFieldWithInfo = ({label = "[text]", info= "[lorem ipsum dolor sit amet]"}) => {
    return <div className="mb-24">
                <div className="form-label">
                    
                    <label for="field" className="">{label}:</label>
                </div>
                <input type="email" className="form-control" name="field" />
                <div className="informational-label">
                    <img src="https://tedwaffl.sirv.com/Activa/information-i.svg" className="mr-6" alt="" />
                    {info}
                </div>
                
            </div>
}
export const InputFieldWithLink = ({label = "[text]:", link = "[link]"}) => {
    return <div className="mb-24">
                <div className="form-label">
                    
                    <label for="field" className="">{label}</label>

                    <a href="#" className="link ms-auto">{link}</a>
                </div>
                <input type="email" className="form-control" name="field" />
        
                
            </div>
}
export const InputFieldWithLinkAndCheck = ({label = "[text]:", link = "[link]"}) => {
    return <div className="mb-24">
                <div className="form-label">
                    
                    <label for="field" className="">{label}</label>
                    <span className="material-icons form-check-icon ml-4">
                        check_circle
                    </span>
                    <a href="#" className="link ms-auto">{link}</a>
                </div>
                <input type="email" className="form-control" name="field" />
                  
            </div>
}

export const InputFieldWithIcon = ({label = "[text]:", value = ""}) => {
    return  <div className="mb-24">
                <div className="form-label">
                    
                    <label for="field" className="">{label}</label>
                  
                </div>
                <div className="input-with-icon">
                    <input type="email" className="form-control" value={value} name="field" />
                    <button className="password-icon input-icon">
                        <img src="https://tedwaffl.sirv.com/Activa/see.svg" alt="" />
                    </button>

                </div>
            </div>
                
}