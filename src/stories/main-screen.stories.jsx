import React from "react";

import {MainScreen as MainScreenComp} from "../views/principal";
import {ReportesAveria as ReportesAveriaComp} from "../views/ReporteAverias";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Views",
};

const Template = args => <MainScreenComp {...args} />;

export const MainScreen = Template.bind({});

MainScreen.args = {
    slide_active: false,
};

export const ReportesAveria = () => <ReportesAveriaComp />;
