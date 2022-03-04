import React from 'react';

import {MainScreen as MainScreenComp} from '../views/principal';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export const MainScreen = () => <MainScreenComp/>
