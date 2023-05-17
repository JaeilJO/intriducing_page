import { keyframes, styled } from 'styled-components';
const mobileBoxMoving = keyframes`
from{
    opacity: 0;
    height: 0%;
}to{
    opacity: 100;
    height: 100%;
}
`;
const S = {
    Navigation: styled.nav`
        @media screen and (max-width: 600px) {
            height: 50px;
            width: 100%;
        }
    `,

    AnchorList: styled.ul`
        display: flex;
        list-style: none;
        gap: 5em;
        justify-content: flex-end;
        padding: 0;
        height: 100%;
        margin: 0;
        transition: 280ms;

        overflow: hidden;
        @media screen and (max-width: 600px) {
            gap: none;
            border-bottom: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GRAY};
            animation: ${mobileBoxMoving} 1s 0s;
            justify-content: space-around;
            align-items: center;
        }
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
