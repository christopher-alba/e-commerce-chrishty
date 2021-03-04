const widths = (props) => {
  let widths = ``;
  if (props.maxWidth) widths += `max-width: ${props.maxWidth}`;
  if (props.minWidth) widths += `min-width: ${props.minWidth}`;
  if (props.width) widths += `width: ${props.width}`;
  return widths;
};

export default widths;
