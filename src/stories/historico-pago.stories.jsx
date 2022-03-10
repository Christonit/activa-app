import React from 'react';

import {HistorialPago as HistorialPagoComp} from '../views/historial-pago';
import { ReportarAveria as ReportarAveriaComp } from '../views/averias';
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const HistorialPago = () => <HistorialPagoComp/>;
export  const ReportarAveria = () => <ReportarAveriaComp/>;
