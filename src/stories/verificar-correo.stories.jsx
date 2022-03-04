import React from 'react';

import {VerificarCorreo as VerificarCorreoComp} from '../views/varificar-correo';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const VerificarCorreo = () => <VerificarCorreoComp/>;
