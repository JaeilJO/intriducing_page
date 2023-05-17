import { styled } from 'styled-components';

const S = {
    Navigation: styled.nav``,
    AnchorList: styled.ul`
        display: flex;
        list-style: none;
        gap: 5em;
        justify-content: flex-end;
    `,
    Anchor: styled.li`
        font-size: ${({ theme }) => theme.FONT_SIZE.BODY_WEB};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
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
