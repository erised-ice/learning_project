import { styled } from "styled-components";
import { TitleSize } from "./title";

const fontSizes = {
  small: "24px",
  big: "44px",
  extraSmall: "18px",
};

const lineHeights = {
  small: "31px",
  big: "504px",
  extraSmall: "27px",
};

export const StyledTitle = styled.h1`
  margin: 0;
  padding: 0;
  font-weight: 700;
  font-size: ${(props) => {
    props.$size ? fontSizes[props.$size] : "36px";
  }}

  line-height: ${(props) => {
    props.$size ? lineHeights[props.$size] : "41px";
  }}
`;
