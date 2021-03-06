const backgroundImageSettings = (props) => {
  let settings = ``;
  if (props.backgroundSize) {
    settings += `background-size: ${props.backgroundSize};`;
  }
  if (props.backgroundPosition) {
    settings += `background-position: ${props.backgroundPosition};`;
  }
  return settings;
};

export default backgroundImageSettings;
