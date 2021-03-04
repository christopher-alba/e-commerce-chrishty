import styled from "styled-components";
import backgrounds from "../repeatedStyles/backgrounds";
import border from "../repeatedStyles/border";
import borderRadius from "../repeatedStyles/borderRadius";
import boxShadow from "../repeatedStyles/boxShadow";
import childSpacings from "../repeatedStyles/childSpacings";
import colors from "../repeatedStyles/colors";
import spacing from "../repeatedStyles/spacing";
import widths from "../repeatedStyles/widths";

const Flex = styled.div`
  display: flex;
  ${(props) => {
    let flexProps = ``;
    if (props.flexDirection)
      flexProps += `flex-direction: ${props.flexDirection};`;
    if (props.flex) flexProps += `flex: ${props.flex};`;
    if (props.flexGrow) flexProps += `flex-grow: ${props.flexGrow};`;
    if (props.flexShrink) flexProps += `flex-shrink: ${props.flexShrink};`;
    if (props.flexBasis) flexProps += `flex-basis: ${props.flexBasis};`;
    if (props.alignItems) flexProps += `align-items: ${props.alignItems};`;
    if (props.justifyContent)
      flexProps += `justify-content: ${props.justifyContent};`;
    return flexProps;
  }}
  ${backgrounds}
    ${border}
    ${borderRadius}
    ${boxShadow}
    ${colors}
    ${spacing}
    ${widths}
    ${childSpacings}
`;

export default Flex;