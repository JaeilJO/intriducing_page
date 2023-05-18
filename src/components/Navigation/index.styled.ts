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
        //size
        height: 100%;
        padding: 2em;
        margin: 0;

        //flex
        display: flex;
        justify-content: flex-end;
        gap: 3em;

        //animation
        transition: 280ms;

        //etc
        list-style: none;
        overflow: auto;

        //Mobile 환경에서 스크롤 없애기
        -ms-overflow-style: none;
        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }

        // Tablet
        @media screen and (max-width: 600px) {
            gap: none;
            border-bottom: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GRAY};
            animation: ${mobileBoxMoving} 1s 0s;
            justify-content: space-around;
            align-items: center;
            background-color: ${({ theme }) => theme.COLOR.BLACK};
        }
        @media screen and (max-width: 350px) {
            justify-content: space-between;
        }
    `,
    Anchor: styled.li`
        font-size: ${({ theme }) => theme.FONT_SIZE.BODY_WEB};
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};
        color: ${({ theme }) => theme.COLOR.BLACK};
        position: relative;
        overflow: visible;

        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            z-index: -1;
            width: 0%;
            height: 1em;
            background-color: ${({ theme }) => theme.COLOR.BLACK};
            transform: translateY(-50%);
        }

        &:hover:before {
            transition: width 320ms ease;

            width: 100%;
        }

        &:hover {
            color: ${({ theme }) => theme.COLOR.WHITE};
        }

        @media screen and (max-width: 1000px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.BODY_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.BODY_MOBILE};
            color: ${({ theme }) => theme.COLOR.WHITE};
            &:hover {
                color: ${({ theme }) => theme.COLOR.LIGHT_GRAY};
            }
        }
    `,
};

export default S;
