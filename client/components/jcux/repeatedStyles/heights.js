const heights = (props) => {
    let heights = ``;
    if (props.maxHeight) heights += `max-height: ${props.maxHeight};`;
    if (props.minHeight) heights += `min-height: ${props.minHeight};`;
    if (props.height) heights += `height: ${props.height};`;
    return heights;
  };
  
  export default heights;