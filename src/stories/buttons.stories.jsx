import React from 'react';

import { Inputfield as InputfieldComp, 
    InputFieldWithCheck as InputFieldWithCheckComp,
    InputFieldWithInfo as InputFieldWithInfoComp,
    InputFieldWithLink as InputFieldWithLinkComp,
    InputFieldWithLinkAndCheck as InputFieldWithLinkAndCheckComp,
    InputFieldWithIcon as InputFieldWithIconComp} from '../components/input-field';

    export default {
        title: "Inputs"
    }

    export const Inputfield = () => <InputfieldComp/>
    export const InputFieldWithCheck = () => <InputFieldWithCheckComp/>
    export const InputFieldWithInfo = () => <InputFieldWithInfoComp/>
    export const InputFieldWithLink = () => <InputFieldWithLinkComp/>
    export const InputFieldWithLinkAndCheck = () => <InputFieldWithLinkAndCheckComp/>
    export const InputFieldWithIcon = () => <InputFieldWithIconComp/>