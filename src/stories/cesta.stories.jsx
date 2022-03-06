import React from 'react';

import {Cart as CartComp} from '../views/cesto';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const Cart = () => <CartComp/>;
