import styled from "styled-components";
import backgrounds from "../repeatedStyles/backgrounds";
import border from "../repeatedStyles/border";
import borderRadius from "../repeatedStyles/borderRadius";
import boxShadow from "../repeatedStyles/boxShadow";
import childSpacings from "../repeatedStyles/childSpacings";
import colors from "../repeatedStyles/colors";
import spacing from "../repeatedStyles/spacing";
import widths from "../repeatedStyles/widths";
import positions from "../repeatedStyles/positions";
import heights from "../repeatedStyles/heights";
import backgroundImageSettings from "../repeatedStyles/backgroundImageSettings";
const Box = styled.div`
  ${(props) => {
    if (props.flexGrow) return `flex-grow: ${props.flexGrow};`;
  }}
  ${colors}
  ${spacing}
  ${backgrounds}
  ${backgroundImageSettings}
  ${border}
  ${borderRadius}
  ${boxShadow}
  ${widths}
  ${childSpacings}
  ${positions}
  ${heights}
`;

export default Box;
