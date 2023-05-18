import { styled } from 'styled-components';

const S = {
    Section: styled.section`
        min-height: 1000px;
        @media screen and (max-width: 1000px) {
            height: 100%;
        }
    `,
};
export default S;
