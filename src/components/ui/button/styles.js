import { styled } from "styled-components";

export const StyledButton = styled.a`
  display: block;
  min-height: 60px;
  padding: 0 24px;
  min-width: ${(props) => `${props.$minWidth}px` || "100%"};
  max-width: 700px;
  font-size: ${(props) => props.theme.fontSizeDefault};
  font-weight: bold;
  line-height: 58px;
  text-align: center;
  text-decoration: none;
  color: ${(props) => props.theme.colorWhite};
  background-color: ${(props) => props.theme.colorCarrot};
  border: none;
  background-image: none;
  box-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-out, box-shadow 0.2s ease-out;
  box-sizing: border-box;
  font-family: ${(props) => props.theme.fontFamily};

  &:hover,
  &:active {
    background-color: #fc7427;
    box-shadow: inset 0 4px 0 rgba(0, 0, 0, 0.14);
  }

  &:active {
    box-shadow: none;
  }
`;
