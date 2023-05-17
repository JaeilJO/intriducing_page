import Link from 'next/link';
import { styled } from 'styled-components';

const S = {
    Header: styled.div`
        border-bottom: 1px solid ${({ theme }) => theme.COLOR.LIGHT_GRAY};
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 150px;
        padding: 0 20px;

        @media screen and (max-width: 600px) {
            flex-direction: column;
            padding: 0;
            border-bottom: none;
        }
    `,
};

export default S;
