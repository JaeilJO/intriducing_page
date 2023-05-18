import { styled } from 'styled-components';

const S = {
    AppreciateSection: styled.div`
        background-color: ${({ theme }) => theme.COLOR.WHITE};
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
    TextSet: styled.div`
        flex-grow: 1;
        display: flex;
        padding: 0 20px;
        flex-direction: column;
        align-items: flex-end;
        justify-content: center;
        gap: 50px;
        @media screen and (max-width: 600px) {
            padding: 0;
            gap: 10px;
            align-items: center;
        }
    `,

    Title: styled.div`
        color: ${({ theme }) => theme.COLOR.BLACK};
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
        color: ${({ theme }) => theme.COLOR.BLACK};
        font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_WEB};

        transition: 280ms;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.BOLD};

        @media screen and (max-width: 1200px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.SUB_TITLE_MOBILE};
        }
    `,
    Body: styled.div`
        color: ${({ theme }) => theme.COLOR.BLACK};
        font-size: ${({ theme }) => theme.FONT_SIZE.BODY_WEB};
        text-align: right;
        transition: 280ms;
        font-weight: ${({ theme }) => theme.FONT_WEIGHT.LIGHT};

        @media screen and (max-width: 1200px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.BODY_TABLET};
        }
        @media screen and (max-width: 600px) {
            font-size: ${({ theme }) => theme.FONT_SIZE.BODY_MOBILE};
            text-align: center;
        }
    `,
};

export default S;
