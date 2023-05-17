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
        &:hover {
            color: ${({ theme }) => theme.COLOR.BLACK_FOCUS};
        }
        @media screen and (max-width: 1000px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.BODY_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.BODY_MOBILE};
        }
    `,
};

export default S;
