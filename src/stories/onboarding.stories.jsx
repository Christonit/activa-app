import React from 'react';

import {Onboarding as OnboardingComp} from '../views/onboarding';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Views',
};

export  const Onboarding = () => <OnboardingComp/>;