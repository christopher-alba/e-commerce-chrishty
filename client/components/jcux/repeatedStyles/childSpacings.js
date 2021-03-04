const childSpacings = (props) => {
  let childSpacingProps = ``;
  if (props.childSpacingLeft)
    childSpacingProps += `& > * {
        margin-left: ${props.childSpacingLeft};
        &:first-child {
            margin-left: 0px;
        }
    }
    
    `;
  if (props.childSpacingRight)
    childSpacingProps += `& > * {
        margin-right: ${props.childSpacingRight};
        &:last-child {
            margin-right: 0px;
        }
    }
  
    `;
  if (props.childSpacingTop)
    childSpacingProps += `& > * {
        margin-top: ${props.childSpacingTop};
        &:first-child {
            margin-top: 0px;
        }
    }
    
    `;
  if (props.childSpacingBottom)
    childSpacingProps += `& > * {
        margin-bottom: ${props.childSpacingBottom};
        &:last-child {
            margin-bottom: 0px;
        }
    }
    
    `;
  return childSpacingProps;
};

export default childSpacings;
