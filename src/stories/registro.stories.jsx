import React from 'react';

import {Registro as RegistroComp} from '../views/registro';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const Registro = () => <RegistroComp/>;
