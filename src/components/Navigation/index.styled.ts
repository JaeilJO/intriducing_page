import { styled } from "styled-components";

const S = {
  Navigation: styled.nav`
    height: 100%;
  `,
  AnchorList: styled.ul`
    display: flex;
    list-style: none;
    gap: 2em;
    justify-content: center;
  `,
  Anchor: styled.li`
    font-size: ${({ theme }) => theme.FONT_SIZE.BODY_WEB};
    font-weight: ${({ theme }) => theme.FONT_WEIGHT.REGULAR};
    color: ${({ theme }) => theme.COLOR.BLACK};
    &:hover {
      color: ${({ theme }) => theme.COLOR.BLACK_FOCUS};
    }
    @media screen and (max-width: 1000px) {
      font-size: ${({ theme }) => theme.FONT_SIZE.BODY_TABLET};
    }
    @media screen and (max-width: 600px) {
      font-size: ${({ theme }) => theme.FONT_SIZE.BODY_MOBILE};
    }
  `,
};

export default S;