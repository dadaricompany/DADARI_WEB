import { createGlobalStyle } from "styled-components";

const GlobalFonts = createGlobalStyle`
    @font-face {
        font-family: 'NotoSansKR';
        src:local('NotoSansKR'),
        url('/assets/fonts/NotoSansKR-Black.woff2') format('woff2'),
        url('/assets/fonts/NotoSansKR-Black.woff') format('woff'),
        url('/assets/fonts/NotoSansKR-Black.otf') format('opentype');
        font-weight: 900;
        font-style: normal;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src:local('NotoSansKR'),
        url('/assets/fonts/NotoSansKR-Bold.woff2') format('woff2'),
        url('/assets/fonts/NotoSansKR-Bold.woff') format('woff'),
        url('/assets/fonts/NotoSansKR-Bold.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src:local('NotoSansKR'),
        url('/assets/fonts/NotoSansKR-Medium.woff2') format('woff2'),
        url('/assets/fonts/NotoSansKR-Medium.woff') format('woff'),
        url('/assets/fonts/NotoSansKR-Medium.otf') format('opentype');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src:local('NotoSansKR'),
        url('/assets/fonts/NotoSansKR-Regular.woff2') format('woff2'),
        url('/assets/fonts/NotoSansKR-Regular.woff') format('woff'),
        url('/assets/fonts/NotoSansKR-Regular.otf') format('opentype');
        font-weight: 400;
        font-style: normal;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src:local('NotoSansKR'),
        url('/assets/fonts/NotoSansKR-DemiLight.woff2') format('woff2'),
        url('/assets/fonts/NotoSansKR-DemiLight.woff') format('woff'),
        url('/assets/fonts/NotoSansKR-DemiLight.otf') format('opentype');
        font-weight: 350;
        font-style: normal;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src:local('NotoSansKR'),
        url('/assets/fonts/NotoSansKR-Light.woff2') format('woff2'),
        url('/assets/fonts/NotoSansKR-Light.woff') format('woff'),
        url('/assets/fonts/NotoSansKR-Light.otf') format('opentype');
        font-weight: 300;
        font-style: normal;
    }

    @font-face {
        font-family: 'NotoSansKR';
        src:local('NotoSansKR'),
        url('/assets/fonts/NotoSansKR-Thin.woff2') format('woff2'),
        url('/assets/fonts/NotoSansKR-Thin.woff') format('woff'),
        url('/assets/fonts/NotoSansKR-Thin.otf') format('opentype');
        font-weight: 100;
        font-style: normal;
    }
`;

export default GlobalFonts;
