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
        background-color: antiquewhite;
    `,
};

export default S;
