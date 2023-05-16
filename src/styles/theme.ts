import { DefaultTheme } from 'styled-components';

const color = {
    BLACK: `#313131`,

    BLACK_FOCUS: `#656565`,
    LIGHT_GRAY: `#e2e2e2`,

    WHITE: `#FFFFFF`,
};

const fontSize = {
    TITLE_WEB: `6rem`,
    SUB_TITLE_WEB: `3.6rem`,
    BODY_WEB: `2.5rem`,
    TITLE_TABLET: `3rem`,
    SUB_TITLE_TABLET: `2.5rem`,
    BODY_TABLET: `1.7rem`,
    TITLE_MOBILE: `2rem`,
    SUB_TITLE_MOBILE: `1.7rem`,
    BODY_MOBILE: `1.3rem`,
};

const fontWeight = {
    THIN: 100,
    LIGHT: 300,
    REGULAR: 400,
    BOLD: 700,
};

export type FontWeightType = typeof fontWeight;
export type FontSizeType = typeof fontSize;
export type ColorType = typeof color;

const theme: DefaultTheme = {
    COLOR: color,
    FONT_SIZE: fontSize,
    FONT_WEIGHT: fontWeight,
};

export default theme;
