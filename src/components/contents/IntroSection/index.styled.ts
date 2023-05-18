import { styled } from 'styled-components';
import Image from 'next/image';
const S = {
    IntroSection: styled.div`
        position: relative;
        width: 100%;
        display: flex;

        min-height: 1000px;

        @media screen and (max-width: 600px) {
            gap: 20px;
            flex-direction: column;
            justify-content: center;
        }
    `,

    TextBox: styled.div`
        display: flex;
        flex-direction: column;
        gap: 50px;
        flex-grow: 1;
        justify-content: center;
        align-items: center;

        @media screen and (max-width: 1200px) {
            gap: 20px;
        }
        @media screen and (max-width: 600px) {
            justify-content: flex-end;
        }
    `,
    MainText: styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_WEB};
        transition: 280ms;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};

        @media screen and (max-width: 1200px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.TITLE_MOBILE};
        }
    `,
    SubText: styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_WEB};
        text-align: center;
        transition: 280ms;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};

        @media screen and (max-width: 1200px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_MOBILE};
        }
    `,
    Image: styled.div`
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 1200px) {
            :only-child {
                width: 300px;
                height: 200px;
            }
        }
        @media screen and (max-width: 600px) {
            align-items: start;
        }
    `,
};

export default S;
