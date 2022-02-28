import React from 'react';

import {Wallet as WalletComp} from '../views/recarga-billetera';
import {RecargaPrepago as RecargaPrepagoComp} from '../views/recarga-prepago';
import {RecargaMetodoPago as RecargaMetodoPagoComp} from '../views/recarga-metodo-pago';
import {RecargaDatosDeLaTarjeta as RecargaDatosDeLaTarjetaComp} from '../views/recarga-dato-tarjeta';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const Wallet = () => <WalletComp/>;
export  const RecargaPrepago = () => <RecargaPrepagoComp/>;
export  const RecargaMetodoPago = () => <RecargaMetodoPagoComp/>;
export  const RecargaDatosDeLaTarjeta = () => <RecargaDatosDeLaTarjetaComp/>;