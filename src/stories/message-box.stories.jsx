import React from 'react';
import { Modal as ModalComp, ModalAccountAlias as ModalAccountAliasComp  } from '../views/modal';
export default {
    title: "Messages"
}

export const Modal = () => <ModalComp/>

const MessageBoxComp = ({type = "normal"}) => <div style={{backgroundColor: "white", padding : "32px"}}>
     <div className={`message-box ${ type === "failure" ? "failure" : "" } ${ type === "success" ? "success" : "" } mb-32`}>
                            { type === "failure" && <> 
                                <span className="material-icons-outlined red form-check-icon mb-12">
                                    warning
                                </span>

                                <p className="text red mb-0">
                                    No tienes saldo suficiente en la billetera para completar este pago. Si lo deseas, puedes <a href="/#"> añadir saldo a la billetera</a> y luego continuar con esta recarga.
                                </p>
                            </>}
                            { type === "success" && <> 
                                <span className="material-icons-outlined success form-check-icon mb-12">
                                    check_circle
                                </span>
                                <p className="text mb-0">
                                No tienes saldo suficiente en la billetera para completar este pago. Si lo deseas, puedes <a href="/#"> añadir saldo a la billetera</a> y luego continuar con esta recarga.
                                </p>
                            </>}

                            { type === "normal" && <> 
                                <span className="material-icons-outlined light-blue mb-12">
                                    info
                                </span>
                                <p className="text light-blue mb-0">
                                El pago que está a punto de realizar, se efectuará con el saldo disponible de su billetera.
                                </p>
                            </>}

                            
                        </div>
                    </div>


const MessageBoxTemplate = (args) => <MessageBoxComp {...args}/>

export const MessageBox = MessageBoxTemplate.bind({});

MessageBox.argTypes = {
    type: { 
        control: {type :'select'}, 
        options: ['normal', 'success', 'failure'] 
    },
}


export const ModalAccountAlias = () => <ModalAccountAliasComp/>