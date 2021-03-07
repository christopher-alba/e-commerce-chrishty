import breakpoints from "../breakpoints";
const childSpacings = (props) => {
  let childSpacingProps = ``;
  if (props.childSpacingLeft) {
    if (typeof props.childSpacingLeft === "string")
      childSpacingProps += `& > * {
        margin-left: ${props.childSpacingLeft};
        &:first-child {
            margin-left: 0px;
        }
    }
    `;
    else {
      if (props.childSpacingLeft.lg)
        childSpacingProps += `@media(${breakpoints.lg}){
          & > * {
        margin-left: ${props.childSpacingLeft.lg};
        &:first-child {
            margin-left: 0px;
        }
    }}
    `;
      if (props.childSpacingLeft.sm)
        childSpacingProps += `@media(${breakpoints.sm}){
      & > * {
    margin-left: ${props.childSpacingLeft.sm};
    &:first-child {
        margin-left: 0px;
    }
}}
`;
      if (props.childSpacingLeft.md)
        childSpacingProps += `@media(${breakpoints.md}){
  & > * {
margin-left: ${props.childSpacingLeft.md};
&:first-child {
    margin-left: 0px;
}
}}
`;
      if (props.childSpacingLeft.xs)
        childSpacingProps += `@media(${breakpoints.xs}){
      & > * {
    margin-left: ${props.childSpacingLeft.xs};
    &:first-child {
        margin-left: 0px;
    }
}}
`;
    }
  }
  if (props.childSpacingRight) {
    if (typeof props.childSpacingRight === "string")
      childSpacingProps += `& > * {
        margin-right: ${props.childSpacingRight};
        &:last-child {
            margin-right: 0px;
        }
    }
    `;
    else {
      if (props.childSpacingRight.lg)
        childSpacingProps += `@media(${breakpoints.lg}){
          & > * {
      margin-right: ${props.childSpacingRight.lg};
      &:last-child {
          margin-right: 0px;
      }
      }}
      `;
      if (props.childSpacingRight.md)
        childSpacingProps += `@media(${breakpoints.md}){
        & > * {
      margin-right: ${props.childSpacingRight.md};
      &:last-child {
          margin-right: 0px;
      }
    }}
    `;
      if (props.childSpacingRight.sm)
        childSpacingProps += `@media(${breakpoints.sm}){
        & > * {
      margin-right: ${props.childSpacingRight.sm};
      &:last-child {
         margin-right: 0px;
        }
      }}
      `;
      if (props.childSpacingRight.xs)
        childSpacingProps += `@media(${breakpoints.xs}){
        & > * {
      margin-right: ${props.childSpacingRight.xs};
      &:last-child {
          margin-right: 0px;
      }
  }}
  `;
    }
  }
  if (props.childSpacingTop) {
    if (typeof props.childSpacingTop === "string")
      childSpacingProps += `& > * {
        margin-top: ${props.childSpacingTop};
        &:first-child {
            margin-top: 0px;
        }
    }
    `;
    else {
      if (props.childSpacingTop.lg)
        if (props.childSpacingTop.lg)
          childSpacingProps += `@media(${breakpoints.lg}){
      & > * {
        margin-top: ${props.childSpacingTop.lg};
        &:first-child {
            margin-top: 0px;
        }
    }
    }`;
      if (props.childSpacingTop.md)
        childSpacingProps += `@media(${breakpoints.md}){
    & > * {
      margin-top: ${props.childSpacingTop.md};
      &:first-child {
          margin-top: 0px;
      }
  }
  }`;
      if (props.childSpacingTop.sm)
        childSpacingProps += `@media(${breakpoints.sm}){
  & > * {
    margin-top: ${props.childSpacingTop.sm};
    &:first-child {
        margin-top: 0px;
    }
}
}`;
      if (props.childSpacingTop.xs)
        childSpacingProps += `@media(${breakpoints.xs}){
& > * {
  margin-top: ${props.childSpacingTop.xs};
  &:first-child {
      margin-top: 0px;
  }
}
}`;
    }
  }
  if (props.childSpacingBottom) {
    if (typeof props.childSpacingBottom === "string")
      childSpacingProps += `& > * {
        margin-bottom: ${props.childSpacingBottom};
        &:last-child {
            margin-bottom: 0px;
        }
    }
    `;
    else {
      if (props.childSpacingBottom.lg)
        childSpacingProps += `@media(${breakpoints.lg}){
        & > * {
          margin-bottom: ${props.childSpacingBottom.lg};
          &:last-child {
              margin-bottom: 0px;
          }
      }
      }`;
      if (props.childSpacingBottom.md)
        childSpacingProps += `@media(${breakpoints.md}){
      & > * {
        margin-bottom: ${props.childSpacingBottom.md};
        &:last-child {
            margin-bottom: 0px;
        }
    }
    }`;
      if (props.childSpacingBottom.sm)
        childSpacingProps += `@media(${breakpoints.sm}){
    & > * {
      margin-bottom: ${props.childSpacingBottom.sm};
      &:last-child {
          margin-bottom: 0px;
      }
  }
  }`;
      if (props.childSpacingBottom.xs)
        childSpacingProps += `@media(${breakpoints.xs}){
  & > * {
    margin-bottom: ${props.childSpacingBottom.xs};
    &:last-child {
        margin-bottom: 0px;
    }
}
}`;
    }
  }
  return childSpacingProps;
};

export default childSpacings;
