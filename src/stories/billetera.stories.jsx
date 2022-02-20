import React from 'react';

import {Wallet as WalletComp} from '../views/recarga-billetera';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const Wallet = () => <WalletComp/>;