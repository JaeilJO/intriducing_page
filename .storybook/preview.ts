import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import theme from '../src/styles/theme';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from '../src/styles/globalstyles';
export const decorators = [
    withThemeFromJSXProvider({
        // Set Theme of Styled-Components on Storybook
        themes: {
            theme,
        },

        Provider: ThemeProvider,

        // Set GlobalStyle of Styled-Components on Storybook
        GlobalStyles,
    }),
];
