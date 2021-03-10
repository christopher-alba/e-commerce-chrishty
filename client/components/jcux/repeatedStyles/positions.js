const positions = (props) => {
  let positions = ``;
  if (props.position) positions += `position: ${props.position};`;
  if (props.top) positions += `top: ${props.top};`;
  if (props.bottom) positions += `bottom: ${props.bottom};`;
  if (props.left) positions += `left: ${props.left};`;
  if (props.right) positions += `right: ${props.right};`;

  return positions;
};

export default positions;
