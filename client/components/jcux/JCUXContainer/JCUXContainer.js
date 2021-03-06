import styled from "styled-components";
import backgroundImageSettings from "../repeatedStyles/backgroundImageSettings";
import backgrounds from "../repeatedStyles/backgrounds";
import border from "../repeatedStyles/border";
import borderRadius from "../repeatedStyles/borderRadius";
import boxShadow from "../repeatedStyles/boxShadow";
import childSpacings from "../repeatedStyles/childSpacings";
import colors from "../repeatedStyles/colors";
import heights from "../repeatedStyles/heights";
import positions from "../repeatedStyles/positions";
import spacing from "../repeatedStyles/spacing";
import widths from "../repeatedStyles/widths";

const Container = styled.div`
  padding-left: 5%;
  padding-right: 5%;
  width: 100%;
  ${backgrounds}
  ${backgroundImageSettings}
  ${border}
  ${borderRadius}
  ${boxShadow}
  ${childSpacings}
  ${colors}
  ${positions}
  ${spacing}
  ${widths}
  ${heights}
`;

export default Container;
