import { React } from "react";
import "../sass/main.scss"

export const BasicaBanner = () => {
    return <div className="banner-notif">
        <div className="banner-notif-img">
            <img src="https://tedwaffl.sirv.com/Activa/banner-azul.png"  alt="" />
        </div>
        <div className="banner-notif-copy">
            <p className="text medium white mb-0">xxxx xxxx xxxxxx!</p>
            <p className="text white mb-0">Xxxx xx: <span className="bold">$RD 250.<span className="text-small white">00</span></span></p>
        </div>
        <button className="banner-notif-button">Ver oferta</button>
        <button className="banner-notif-close">close</button>
    </div>
}
export const GreenBanner = () => {
    return <div className="banner-notif green">
        <div className="banner-notif-img">
            <img src="https://tedwaffl.sirv.com/Activa/banner-verde.png"  alt="" />
        </div>
        <div className="banner-notif-copy">
            <p className="text medium white mb-0">xxxx xxxx xxxxxx!</p>
            <p className="text white mb-0">Xxxx xx: <span className="bold">$RD 250.<span className="text-small white">00</span></span></p>
        </div>
        <button className="banner-notif-button">Ver oferta</button>
        <button className="banner-notif-close">close</button>
    </div>
}
export const OrangeBanner = () => {
    return <div className="banner-notif orange">
        <div className="banner-notif-img">
            <img src="https://tedwaffl.sirv.com/Activa/banner-naranja.png"  alt="" />
        </div>
        <div className="banner-notif-copy">
            <p className="text medium white mb-0">xxxx xxxx xxxxxx!</p>
            <p className="text white mb-0">Xxxx xx: <span className="bold">$RD 250.<span className="text-small white">00</span></span></p>
        </div>
        <button className="banner-notif-button">Ver oferta</button>
        <button className="banner-notif-close">close</button>
    </div>
}
export const RedBanner = () => {
    return <div className="banner-notif red">
        <div className="banner-notif-img">
            <img src="https://tedwaffl.sirv.com/Activa/banner-rojo.png"  alt="" />
        </div>
        <div className="banner-notif-copy">
            <p className="text medium white mb-0">xxxx xxxx xxxxxx!</p>
            <p className="text white mb-0">Xxxx xx: <span className="bold">$RD 250.<span className="text-small white">00</span></span></p>
        </div>
        <button className="banner-notif-button">Ver oferta</button>
        <button className="banner-notif-close">close</button>
    </div>
}