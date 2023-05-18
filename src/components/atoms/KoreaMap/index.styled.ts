import { styled } from 'styled-components';

export const MapPath = styled.path`
    fill: ${({ theme }) => theme.COLOR.BLACK};
    stroke: ${({ theme }) => theme.COLOR.WHITE};
    stroke-miterlimit: 10;
    stroke-width: 5px;
    pointer-events: all;
    cursor: pointer;
    transition: 320ms;
`;

export const MapSVG = styled.svg`
    width: 50%;
    height: 50%;

    :hover {
        transition: 320ms;
        fill: ${({ theme }) => theme.COLOR.WHITE};
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;
