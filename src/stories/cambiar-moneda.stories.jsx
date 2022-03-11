import React from 'react';

import { CambiarMoneda as CambiarMonedaComp } from '../views/cambiar-moneda';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const CambiarMoneda = () => <CambiarMonedaComp/>;
