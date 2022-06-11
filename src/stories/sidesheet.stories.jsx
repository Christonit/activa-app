import React from "react";

import {Menu as MenuComp} from "../views/menu";
import {Notificaciones as NotificacionesComp} from "../views/notificaciones";
import {AdministrarCuenta as AdministrarCuentaComp} from "../views/adminsitrar-cuenta";
import {AdministrarCuentaMultiple as AdministrarCuenta2Comp} from "../views/adminsitrar-cuenta-multiple";
import {MiPerfil as MiPerfilComp} from "../views/mi-perfil";
// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Sidesheet",
};

export const Menu = () => <MenuComp />;
export const Notificaciones = () => <NotificacionesComp />;
export const AdministrarCuenta = () => <AdministrarCuentaComp />;
export const AdministrarCuentaMultiple = () => <AdministrarCuenta2Comp />;
export const MiPerfil = () => <MiPerfilComp />;
