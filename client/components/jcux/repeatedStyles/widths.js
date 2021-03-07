import breakpoints from "../breakpoints";
const widths = (props) => {
  let widths = ``;

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
    if (props.maxWidth) {
      if (typeof props.maxWidth === "string")
        widths += `width: ${props.maxWidth};`;
      else {
        if (props.maxWidth.xs)
          widths += `@media (${breakpoints.xs}){
            width: ${props.maxWidth.xs}
           }`;
        if (props.maxWidth.sm)
          widths += `@media (${breakpoints.sm}){
          width: ${props.maxWidth.sm}
           }`;
        if (props.maxWidth.md)
          widths += `@media (${breakpoints.md}){
          width: ${props.maxWidth.md}
           }`;
        if (props.maxWidth.lg)
          widths += `@media (${breakpoints.lg}){
          width: ${props.maxWidth.lg}
           }`;
      }
    }
    if (props.minWidth) {
      if (typeof props.minWidth === "string")
        widths += `width: ${props.minWidth};`;
      else {
        if (props.minWidth.xs)
          widths += `@media (${breakpoints.xs}){
              width: ${props.minWidth.xs}
             }`;
        if (props.minWidth.sm)
          widths += `@media (${breakpoints.sm}){
            width: ${props.minWidth.sm}
             }`;
        if (props.minWidth.md)
          widths += `@media (${breakpoints.md}){
            width: ${props.minWidth.md}
             }`;
        if (props.minWidth.lg)
          widths += `@media (${breakpoints.lg}){
            width: ${props.minWidth.lg}
             }`;
      }
    }
  }
  return widths;
};

export default widths;
