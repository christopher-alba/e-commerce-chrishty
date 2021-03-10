import styled from "styled-components";
import breakpoints from "../breakpoints";
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

const Flex = styled.div`
  display: flex;
  ${(props) => {
    let flexProps = ``;
    if (props.flexDirection) {
      if (typeof props.flexDirection === "string")
        flexProps += `flex-direction: ${props.flexDirection};`;
      else {
        if (props.flexDirection.xs)
          flexProps += `@media(${breakpoints.xs}){
          flex-direction: ${props.flexDirection.xs};
        }`;
        if (props.flexDirection.sm)
          flexProps += `@media(${breakpoints.sm}){
          flex-direction: ${props.flexDirection.sm};
        }`;
        if (props.flexDirection.md)
          flexProps += `@media(${breakpoints.md}){
          flex-direction: ${props.flexDirection.md};
        }`;
        if (props.flexDirection.lg)
          flexProps += `@media(${breakpoints.lg}){
          flex-direction: ${props.flexDirection.lg};
        }`;
      }
    }
    if (props.flex) {
      if (typeof props.flex === "string") flexProps += `flex: ${props.flex};`;
      else {
        if (props.flex.xs)
          flexProps += `@media(${breakpoints.xs}){
          flex: ${props.flex.xs}
        }`;
        if (props.flex.sm)
          flexProps += `@media(${breakpoints.sm}){
          flex: ${props.flex.sm}
        }`;
        if (props.flex.md)
          flexProps += `@media(${breakpoints.md}){
          flex: ${props.flex.md}
        }`;
        if (props.flex.lg)
          flexProps += `@media(${breakpoints.lg}){
          flex: ${props.flex.lg}
        }`;
      }
    }
    if (props.flexGrow) {
      if (typeof props.flexGrow === "string")
        flexProps += `flex-grow: ${props.flexGrow};`;
      else {
        if (props.flexGrow.xs)
          flexProps += `@media(${breakpoints.xs}){
          flex-grow: ${props.flexGrow.xs}
        }`;
        if (props.flexGrow.sm)
          flexProps += `@media(${breakpoints.sm}){
          flex-grow: ${props.flexGrow.sm}
        }`;
        if (props.flexGrow.md)
          flexProps += `@media(${breakpoints.md}){
          flex-grow: ${props.flexGrow.md}
        }`;
        if (props.flexGrow.lg)
          flexProps += `@media(${breakpoints.lg}){
          flex-grow: ${props.flexGrow.lg}
        }`;
      }
    }
    if (props.flexShrink) {
      if (typeof props.flexShrink === "string")
        flexProps += `flex-shrink: ${props.flexShrink};`;
      else {
        if (props.flexShrink.xs)
          flexProps += `@media(${breakpoints.xs}){
          flex-shrink: ${props.flexShrink.xs}
        }`;
        if (props.flexShrink.sm)
          flexProps += `@media(${breakpoints.sm}){
          flex-shrink: ${props.flexShrink.sm}
        }`;
        if (props.flexShrink.md)
          flexProps += `@media(${breakpoints.md}){
          flex-shrink: ${props.flexShrink.md}
        }`;
        if (props.flexShrink.lg)
          flexProps += `@media(${breakpoints.lg}){
          flex-shrink: ${props.flexShrink.lg}
        }`;
      }
    }
    if (props.flexBasis) {
      if (typeof props.flexBasis === "string")
        flexProps += `flex-Basis: ${props.flexBasis};`;
      else {
        if (props.flexBasis.xs)
          flexProps += `@media(${breakpoints.xs}){
          flex-basis: ${props.flexBasis.xs}
        }`;
        if (props.flexBasis.sm)
          flexProps += `@media(${breakpoints.sm}){
          flex-basis: ${props.flexBasis.sm}
        }`;
        if (props.flexBasis.md)
          flexProps += `@media(${breakpoints.md}){
          flex-basis: ${props.flexBasis.md}
        }`;
        if (props.flexBasis.lg)
          flexProps += `@media(${breakpoints.lg}){
          flex-basis: ${props.flexBasis.lg}
        }`;
      }
    }
    if (props.alignItems) {
      if (typeof props.alignItems === "string")
        flexProps += `align-items: ${props.alignItems};`;
      else {
        if (props.alignItems.xs)
          flexProps += `@media(${breakpoints.xs}){
          align-items: ${props.alignItems.xs}
        }`;
        if (props.alignItems.sm)
          flexProps += `@media(${breakpoints.sm}){
          align-items: ${props.alignItems.sm}
        }`;
        if (props.alignItems.md)
          flexProps += `@media(${breakpoints.md}){
          align-items: ${props.alignItems.md}
        }`;
        if (props.alignItems.lg)
          flexProps += `@media(${breakpoints.lg}){
          align-items: ${props.alignItems.lg}
        }`;
      }
    }
    if (props.flexWrap) {
      if (typeof props.flexWrap === "string")
        flexProps += `flex-wrap: ${props.flexWrap};`;
      else {
        if (props.flexWrap.xs)
          flexProps += `@media(${breakpoints.xs}){
          flex-wrap: ${props.flexWrap.xs}
        }`;
        if (props.flexWrap.sm)
          flexProps += `@media(${breakpoints.sm}){
          flex-wrap: ${props.flexWrap.sm}
        }`;
        if (props.flexWrap.md)
          flexProps += `@media(${breakpoints.md}){
          flex-wrap: ${props.flexWrap.md}
        }`;
        if (props.flexWrap.lg)
          flexProps += `@media(${breakpoints.lg}){
          flex-wrap: ${props.flexWrap.lg}
        }`;
      }
    }
    if (props.justifyContent) {
      if (typeof props.justifyContent === "string")
        flexProps += `justify-content: ${props.justifyContent};`;
      else {
        if (props.justifyContent.xs)
          flexProps += `@media(${breakpoints.xs}){
          justify-content: ${props.justifyContent.xs}
        }`;
        if (props.justifyContent.sm)
          flexProps += `@media(${breakpoints.sm}){
          justify-content: ${props.justifyContent.sm}
        }`;
        if (props.justifyContent.md)
          flexProps += `@media(${breakpoints.md}){
          justify-content: ${props.justifyContent.md}
        }`;
        if (props.justifyContent.lg)
          flexProps += `@media(${breakpoints.lg}){
          justify-content: ${props.justifyContent.lg}
        }`;
      }
    }
    return flexProps;
  }}
  ${backgrounds}
  ${backgroundImageSettings}
    ${border}
    ${borderRadius}
    ${boxShadow}
    ${colors}
    ${spacing}
    ${widths}
    ${heights}
    ${childSpacings}
    ${positions}
`;

export default Flex;
