import styled from "styled-components";
import colors from "../repeatedStyles/colors";
import spacing from "../repeatedStyles/spacing";

const Text = styled.p`
  font-family: arial;
  ${(props) => {
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
