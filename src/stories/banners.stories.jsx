import React from 'react';

import { BasicaBanner as BasicBannerComp, 
    RedBanner as RedBannerComp,
    GreenBanner as GreenBannerComp,
    OrangeBanner as OrangeBannerComp,
} from '../components/banners';

export default {
    title: "Banners"
}

export const BasicaBanner = () => <BasicBannerComp/>
export const RedBanner = () => <RedBannerComp/>
export const GreenBanner = () => <GreenBannerComp/>
export const OrangeBanner = () => <OrangeBannerComp/>