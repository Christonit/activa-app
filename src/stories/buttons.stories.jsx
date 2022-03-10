import React from 'react';

import { Inputfield as InputfieldComp, 
    InputFieldWithCheck as InputFieldWithCheckComp,
    InputFieldWithInfo as InputFieldWithInfoComp,
    InputFieldWithLink as InputFieldWithLinkComp,
    InputFieldWithLinkAndCheck as InputFieldWithLinkAndCheckComp,
    InputFieldWithIcon as InputFieldWithIconComp} from '../components/input-field';

import { InputfieldComposed as InputfieldComposedComp } from '../components/input-field-with-dropdown';
    export default {
        title: "Inputs"
    }

    const InputfieldTemplate = (args) => <InputfieldComp {...args}/>

    export const Inputfield = InputfieldTemplate.bind({});
    Inputfield.argTypes = {
        type: { 
            control: {type :'select'}, 
            options: ['normal', 'wrong value', 'correct'] 
        },
    }

    export const InputFieldWithCheck = () => <InputFieldWithCheckComp/>
    export const InputFieldWithInfo = () => <InputFieldWithInfoComp/>
    export const InputFieldWithLink = () => <InputFieldWithLinkComp/>
    export const InputFieldWithLinkAndCheck = () => <InputFieldWithLinkAndCheckComp/>
    export const InputFieldWithIcon = () => <InputFieldWithIconComp/>
    export const InputWithLabel = ({label = "[text]"}) => <div>
                <div className="form-label">
                    <label for="field" className="">{label}</label>
                    
                </div>
                <div className="input-compound">
                    <label htmlFor="fied">RD$</label>
                    <input type="email" className="form-control" name="field" />
                </div>
            </div>

const InputfieldComposedTemplate = (args) => <InputfieldComposedComp {...args}/>


export const InputfieldConBandera = InputfieldComposedTemplate.bind({});
InputfieldConBandera.argTypes = {
        type: { 
            control: {type :'select'}, 
            options: ['normal', 'wrong value', 'correct'] 
        },
    }