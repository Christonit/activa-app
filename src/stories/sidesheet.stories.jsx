import React from 'react';

import {Menu as MenuComp} from '../views/menu';
import {AdministrarCuenta as AdministrarCuentaComp} from '../views/adminsitrar-cuenta';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Sidesheet',
};

export  const Menu = () => <MenuComp/>;
export  const AdministrarCuenta = () => <AdministrarCuentaComp/>;