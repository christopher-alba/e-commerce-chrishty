import breakpoints from "../breakpoints";
const widths = (props) => {
  let widths = ``;

  if (props.maxWidth) widths += `max-width: ${props.maxWidth};`;
  if (props.minWidth) widths += `min-width: ${props.minWidth};`;
  if (props.width) {
    if (typeof props.width === "string") widths += `width: ${props.width};`;
    else {
      if (props.width.xs)
        widths += `@media (${breakpoints.xs}){
          width: ${props.width.xs}
         }`;
      if (props.width.sm)
        widths += `@media (${breakpoints.sm}){
        width: ${props.width.sm}
         }`;
      if (props.width.md)
        widths += `@media (${breakpoints.md}){
        width: ${props.width.md}
         }`;
      if (props.width.lg)
        widths += `@media (${breakpoints.lg}){
        width: ${props.width.lg}
         }`;
    }
  }
  return widths;
};

export default widths;
