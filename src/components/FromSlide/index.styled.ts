import { styled } from 'styled-components';
import Image from 'next/image';
const S = {
    FromSlider: styled.div`
        position: relative;
        width: 200%;
        display: flex;
        background-color: darkgrey;
    `,

    Slide: styled.div`
        flex-grow: 1;
        background-color: antiquewhite;
        height: 100%;
    `,
};

export default S;
