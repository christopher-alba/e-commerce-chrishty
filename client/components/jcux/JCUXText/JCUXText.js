import styled from "styled-components";
import breakpoints from "../breakpoints";
import colors from "../repeatedStyles/colors";
import spacing from "../repeatedStyles/spacing";

const Text = styled.p`
  font-family: arial;
  ${(props) => {
    if (props.type) {
      if (typeof props.type === "string") {
        if (props.type === "body-small")
          return `
                  font-size: 0.6rem;
              `;
        if (props.type === "body-default")
          return `
          font-size: 0.8rem;
      `;
        if (props.type === "body-large")
          return `
          font-size: 1rem;
      `;
        if (props.type === "sub-heading-small")
          return `
          font-size: 1.2rem;
      `;
        if (props.type === "sub-heading-default")
          return `
          font-size: 1.4rem;
      `;
        if (props.type === "sub-heading-large")
          return `
          font-size: 1.6rem;
      `;
        if (props.type === "heading-small")
          return `
          font-size: 2rem;
      `;
        if (props.type === "heading-default")
          return `
          font-size: 2.2rem;
      `;
        if (props.type === "heading-large")
          return `
          font-size: 2.4rem;
      `;
      } else {
        let sizes = ``;

        if (props.type.xs) {
          if (props.type.xs === "body-small")
            sizes += `@media(${breakpoints.xs}){
                  font-size: 0.6rem;
            }`;
          if (props.type.xs === "body-default")
            sizes += `@media(${breakpoints.xs}){
          font-size: 0.8rem;
            }`;
          if (props.type.xs === "body-large")
            sizes += `@media(${breakpoints.xs}){
          font-size: 1rem;
            }`;
          if (props.type.xs === "sub-heading-small")
            sizes += `@media(${breakpoints.xs}){
          font-size: 1.2rem;
            }`;
          if (props.type.xs === "sub-heading-default")
            sizes += `@media(${breakpoints.xs}){
          font-size: 1.4rem;
            }`;
          if (props.type.xs === "sub-heading-large")
            sizes += `@media(${breakpoints.xs}){
          font-size: 1.6rem;
            }`;
          if (props.type.xs === "heading-small")
            sizes += `@media(${breakpoints.xs}){
          font-size: 2rem;
            }`;
          if (props.type.xs === "heading-default")
            sizes += `@media(${breakpoints.xs}){
          font-size: 2.2rem;
            }`;
          if (props.type.xs === "heading-large")
            sizes += `@media(${breakpoints.xs}){
          font-size: 2.4rem;
            }`;
        }
        if (props.type.sm) {
          if (props.type.sm === "body-small")
            sizes += `@media(${breakpoints.sm}){
                  font-size: 0.6rem;
            }`;
          if (props.type.sm === "body-default")
            sizes += `@media(${breakpoints.sm}){
          font-size: 0.8rem;
            }`;
          if (props.type.sm === "body-large")
            sizes += `@media(${breakpoints.sm}){
          font-size: 1rem;
            }`;
          if (props.type.sm === "sub-heading-small")
            sizes += `@media(${breakpoints.sm}){
          font-size: 1.2rem;
            }`;
          if (props.type.sm === "sub-heading-default")
            sizes += `@media(${breakpoints.sm}){
          font-size: 1.4rem;
            }`;
          if (props.type.sm === "sub-heading-large")
            sizes += `@media(${breakpoints.sm}){
          font-size: 1.6rem;
            }`;
          if (props.type.sm === "heading-small")
            sizes += `@media(${breakpoints.sm}){
          font-size: 2rem;
            }`;
          if (props.type.sm === "heading-default")
            sizes += `@media(${breakpoints.sm}){
          font-size: 2.2rem;
            }`;
          if (props.type.sm === "heading-large")
            sizes += `@media(${breakpoints.sm}){
          font-size: 2.4rem;
            }`;
        }
        if (props.type.md) {
          if (props.type.md === "body-small")
            sizes += `@media(${breakpoints.md}){
                  font-size: 0.6rem;
            }`;
          if (props.type.md === "body-default")
            sizes += `@media(${breakpoints.md}){
          font-size: 0.8rem;
            }`;
          if (props.type.md === "body-large")
            sizes += `@media(${breakpoints.md}){
          font-size: 1rem;
            }`;
          if (props.type.md === "sub-heading-small")
            sizes += `@media(${breakpoints.md}){
          font-size: 1.2rem;
            }`;
          if (props.type.md === "sub-heading-default")
            sizes += `@media(${breakpoints.md}){
          font-size: 1.4rem;
            }`;
          if (props.type.md === "sub-heading-large")
            sizes += `@media(${breakpoints.md}){
          font-size: 1.6rem;
            }`;
          if (props.type.md === "heading-small")
            sizes += `@media(${breakpoints.md}){
          font-size: 2rem;
            }`;
          if (props.type.md === "heading-default")
            sizes += `@media(${breakpoints.md}){
          font-size: 2.2rem;
            }`;
          if (props.type.md === "heading-large")
            sizes += `@media(${breakpoints.md}){
          font-size: 2.4rem;
            }`;
        }
        return sizes;
      }
      if (props.type.lg) {
        if (props.type.lg === "body-small")
          sizes += `@media(${breakpoints.lg}){
                  font-size: 0.6rem;
            }`;
        if (props.type.lg === "body-default")
          sizes += `@media(${breakpoints.lg}){
          font-size: 0.8rem;
            }`;
        if (props.type.lg === "body-large")
          sizes += `@media(${breakpoints.lg}){
          font-size: 1rem;
            }`;
        if (props.type.lg === "sub-heading-small")
          sizes += `@media(${breakpoints.lg}){
          font-size: 1.2rem;
            }`;
        if (props.type.lg === "sub-heading-default")
          sizes += `@media(${breakpoints.lg}){
          font-size: 1.4rem;
            }`;
        if (props.type.lg === "sub-heading-large")
          sizes += `@media(${breakpoints.lg}){
          font-size: 1.6rem;
            }`;
        if (props.type.lg === "heading-small")
          sizes += `@media(${breakpoints.lg}){
          font-size: 2rem;
            }`;
        if (props.type.lg === "heading-default")
          sizes += `@media(${breakpoints.lg}){
          font-size: 2.2rem;
            }`;
        if (props.type.lg === "heading-large")
          sizes += `@media(${breakpoints.lg}){
          font-size: 2.4rem;
            }`;
      }
    }
  }}
  ${(props) => {
    if (props.fontWeight === "light")
      return `
      font-weight: 200;
        `;
    if (props.fontWeight === "regular")
      return `
      font-weight: 400;
        `;
    if (props.fontWeight === "bold")
      return `
        font-weight: 800;
          `;
    return `
      font-weight: ${props.fontWeight};
    `;
  }}
  ${(props) => {
    if (props.italic) {
      return `
        font-style: italic;
      `;
    }
  }}
  ${(props) => {
    if (props.letterSpacing) {
      return `
      letter-spacing: ${props.letterSpacing};
      `;
    }
  }}
  ${(props) => {
    if (props.size) {
      return `
      font-size:${props.size};
      `;
    }
  }}
  ${spacing}
  ${colors}
`;
export default Text;
