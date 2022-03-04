import React from 'react';

import {HistorialPago as HistorialPagoComp} from '../views/historial-pago';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const HistorialPago = () => <HistorialPagoComp/>;
