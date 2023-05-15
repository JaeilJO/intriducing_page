import 'styled-components';
import { ColorType, FontSizeType, FontWeightType } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        COLOR: ColorType;
        FONT_WEIGHT: FontWeightType;
        FONT_SIZE: FontSizeType;
    }
}
