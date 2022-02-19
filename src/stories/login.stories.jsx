import React from 'react';

import {Login as LoginComp} from '../views/login';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const Login = () => <LoginComp/>;
