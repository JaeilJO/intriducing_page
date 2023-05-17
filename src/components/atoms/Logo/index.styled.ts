import Link from 'next/link';
import { styled } from 'styled-components';

const S = {
    Logo: styled(Link)`
        display: flex;
        justify-content: center;
        align-content: center;
        font-size: ${({ theme }) => theme.FONT_SIZE.BODY_WEB};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
        color: ${({ theme }) => theme.COLOR.BLACK};
        transition: 280ms;
        &:hover {
            color: ${({ theme }) => theme.COLOR.BLACK_FOCUS};
        }
        @media screen and (max-width: 1000px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.BODY_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_MOBILE};
            width: 100%;
            height: 100px;
            align-items: center;
            border-bottom: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GRAY};
            &:hover {
                color: ${({ theme }) => theme.COLOR.BLACK};
            }
        }
    `,
};
export default S;
