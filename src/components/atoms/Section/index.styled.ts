import { styled } from "styled-components";

const S = {
  Section: styled.section`
    padding: 10px 20px;
    min-height: 1000px;

    @media screen and (max-width: 1000px) {
      padding: 10px 2%;
    }
  `,
};
export default S;
