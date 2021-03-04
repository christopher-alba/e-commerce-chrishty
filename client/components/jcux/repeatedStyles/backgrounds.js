const backgrounds = (props) => {
  if (props.background === "jcBlue100")
    return `background: ${props.theme.colors.jcBlue100};`;
  if (props.background === "jcBlue80")
    return `background: ${props.theme.colors.jcBlue80};`;
  if (props.background === "jcBlue60")
    return `background: ${props.theme.colors.jcBlue60};`;
  if (props.background === "jcBlue40")
    return `background ${props.theme.colors.jcBlue40};`;
  if (props.background === "jcBlue20")
    return `background ${props.theme.colors.jcBlue20};`;
  if (props.background === "jcBlueGreen100")
    return `background ${props.theme.colors.jcBlueGreen100};`;
  if (props.background === "jcBlueGreen80")
    return `background ${props.theme.colors.jcBlueGreen80};`;
  if (props.background === "jcBlueGreen60")
    return `background ${props.theme.colors.jcBlueGreen60};`;
  if (props.background === "jcBlueGreen40")
    return `background ${props.theme.colors.jcBlueGreen40};`;
  if (props.background === "jcBlueGreen20")
    return `background ${props.theme.colors.jcBlueGreen20};`;
  if (props.background === "jcPink100")
    return `background ${props.theme.colors.jcPink100};`;
  if (props.background === "jcPink80")
    return `background ${props.theme.colors.jcPink80};`;
  if (props.background === "jcPink60")
    return `background ${props.theme.colors.jcPink60};`;
  if (props.background === "jcPink40")
    return `background ${props.theme.colors.jcPink40};`;
  if (props.background === "jcPink20")
    return `background ${props.theme.colors.jcPink20};`;
  if (props.background === "jcBlack100")
    return `background ${props.theme.colors.jcBlack100};`;
  if (props.background === "jcBlack80")
    return `background ${props.theme.colors.jcBlack80};`;
  if (props.background === "jcBlack60")
    return `background ${props.theme.colors.jcBlack60};`;
  if (props.background === "jcBlack40")
    return `background ${props.theme.colors.jcBlack40};`;
  if (props.background === "jcBlack20")
    return `background ${props.theme.colors.jcBlack20};`;
  if (props.background === "jcGrey100")
    return `background ${props.theme.colors.jcGrey100};`;
  if (props.background === "jcGrey80")
    return `background ${props.theme.colors.jcGrey80};`;
  if (props.background === "jcGrey60")
    return `background ${props.theme.colors.jcGrey60};`;
  if (props.background === "jcGrey40")
    return `background ${props.theme.colors.jcGrey40};`;
  if (props.background === "jcGrey20")
    return `background ${props.theme.colors.jcGrey20};`;
  return `background ${props.background};`;
};

export default backgrounds;
