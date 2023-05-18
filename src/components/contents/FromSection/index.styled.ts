import { styled } from 'styled-components';

const S = {
    FromSection: styled.div`
        background-color: ${({ theme }) => theme.COLOR.BLACK};
        position: relative;
        width: 100%;
        display: flex;
        min-height: 100vh;
        @media screen and (max-width: 600px) {
            gap: 50px;
            flex-direction: column;
            justify-content: center;
        }
    `,

    Map: styled.div`
        flex-grow: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        @media screen and (max-width: 600px) {
            align-items: start;
        }
    `,
    TextSet: styled.div`
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        gap: 20px;
        justify-content: center;
        align-items: center;
        @media screen and (max-width: 600px) {
            justify-content: flex-end;
        }
    `,
    Title: styled.div`
        color: ${({ theme }) => theme.COLOR.WHITE};
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
    SubTitle: styled.div`
        font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_WEB};
        color: ${({ theme }) => theme.COLOR.WHITE};
        transition: 280ms;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};

        @media screen and (max-width: 1200px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_MOBILE};
        }
    `,
};

export default S;
