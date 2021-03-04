import styled from "styled-components";
import backgrounds from "../repeatedStyles/backgrounds";
import border from "../repeatedStyles/border";
import borderRadius from "../repeatedStyles/borderRadius";
import boxShadow from "../repeatedStyles/boxShadow";
import colors from "../repeatedStyles/colors";
import spacing from "../repeatedStyles/spacing";
import widths from "../repeatedStyles/widths";

const Box = styled.div`
  ${colors}
  ${spacing}
  ${backgrounds}
  ${border}
  ${borderRadius}
  ${boxShadow}
  ${widths}
`;

export default Box;
