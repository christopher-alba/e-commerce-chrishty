const spacing = (props) => {
  let spacings = ``;
  if (props.margin) spacings += `margin: ${props.margin};`;
  if (props.marginTop) spacings += `margin-top: ${props.marginTop};`;
  if (props.marginBottom) spacings += `margin-bottom: ${props.marginBottom};`;
  if (props.marginLeft) spacings += `margin-left: ${props.marginLeft};`;
  if (props.marginRight) spacings += `margin-right: ${props.marginRight};`;
  if (props.padding) spacings += `padding: ${props.padding};`;
  if (props.paddingTop) spacings += `padding-top: ${props.paddingTop};`;
  if (props.paddingBottom) spacings += `padding-bottom: ${props.paddingBottom};`;
  if (props.paddingLeft) spacings += `padding-left: ${props.paddingLeft};`;
  if (props.paddingRight) spacings += `padding-right: ${props.paddingRight};`;
  return spacings;
};
export default spacing;
