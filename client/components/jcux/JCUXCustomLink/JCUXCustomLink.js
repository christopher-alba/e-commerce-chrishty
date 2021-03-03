import styled from "styled-components";

const Link = styled.a`
  ${(props) => {
    if (!props.type) {
      return `
        color:inherit;
        font-size: inherit;
        `;
    } else {
      return `
        padding: 10px 50px;
        border-radius: 50px;
        letter-spacing: 3px;
        cursor: pointer;
        text-transform: uppercase;
        transition: 300ms;
        text-decoration: none;
        display: inline-block;
        text-align: center;
        font-family: arial;
        font-size: 0.8rem;`;
    }
  }}
  ${(props) => {
    if (props.type === "button-primary")
      return `   
        background: ${props.theme.colors.jcBlue100};
        color:white;
        border: none;
        &:hover, &:focus{
           background: ${props.theme.colors.jcBlue80};
        }
        &:focus{
           box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcBlue20};
           outline: none;
        }
      `;
    if (props.type === "button-secondary")
      return `
        background: ${props.theme.colors.jcBlueGreen100}; 
        color:white;
        border: none;
        &:hover, &:focus{
          background: ${props.theme.colors.jcBlueGreen80};
        }
        &:focus{
          box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcBlueGreen20};
          outline: none;
        }
      `;
    if (props.type === "button-tertiary")
      return `
      background: ${props.theme.colors.jcPink100}; 
      color:white;
      border: none;
      &:hover, &:focus{
        background: ${props.theme.colors.jcPink80};
      }
      &:focus{
        box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcPink20};
        outline: none;
      }
    `;
    if (props.type === "button-dark")
      return `
      background: ${props.theme.colors.jcBlack100}; 
      color:white;
      border: none;
      &:hover, &:focus{
        background: ${props.theme.colors.jcBlack80};
      }
      &:focus{
        box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcBlack20};
        outline: none;
      }
    `;
    if (props.type === "button-light")
      return `
      background: white; 
      color:black;
      border: none;
      &:hover, &:focus{
        background: ${props.theme.colors.jcGrey80};
      }
      &:focus{
        box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcGrey20};
        outline: none;
      }
    `;
    if (props.type === "button-primary-outlined")
      return `   
      background: transparent;
      color:${props.theme.colors.jcBlue100};
      border: 2px solid ${props.theme.colors.jcBlue100};
      &:hover, &:focus{
         background: ${props.theme.colors.jcBlue80};
         color: white;
      }
      &:focus{
         box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcBlue20};
         outline: none;
      }
    `;
    if (props.type === "button-secondary-outlined")
      return `
      background: transparent;
      color:${props.theme.colors.jcBlueGreen100};
      border: 2px solid ${props.theme.colors.jcBlueGreen100};
      &:hover, &:focus{
         background: ${props.theme.colors.jcBlueGreen80};
         color: white;
      }
      &:focus{
         box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcBlueGreen20};
         outline: none;
      }
    `;
    if (props.type === "button-tertiary-outlined")
      return `
      background: transparent;
      color:${props.theme.colors.jcPink100};
      border: 2px solid ${props.theme.colors.jcPink100};
      &:hover, &:focus{
         background: ${props.theme.colors.jcPink80};
         color: white;
      }
      &:focus{
         box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcPink20};
         outline: none;
      }
  `;
    if (props.type === "button-dark-outlined")
      return `
      background: transparent;
      color:${props.theme.colors.jcBlack100};
      border: 2px solid ${props.theme.colors.jcBlack100};
      &:hover, &:focus{
         background: ${props.theme.colors.jcBlack80};
         color: white;
      }
      &:focus{
         box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcBlack20};
         outline: none;
      }
  `;
    if (props.type === "button-light-outlined")
      return `
      background: transparent;
      color:white;
      border: 2px solid white;
      &:hover, &:focus{
         background: white;
         color: black;
      }
      &:focus{
         box-shadow: 0px 0px 0px 5px ${props.theme.colors.jcGrey20};
         outline: none;
      }
  `;
  }}
`;

export default Link;
