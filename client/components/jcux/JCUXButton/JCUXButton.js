import styled from "styled-components";
import spacing from "../repeatedStyles/spacing";
import React from "react";
import Loading from "../../svg/loading-button.svg";
import widths from "../repeatedStyles/widths";
import colors from "../repeatedStyles/colors";
const Button = styled.button`
  border: none;
  background: transparent;
  padding: 10px 50px;
  border-radius: 50px;
  letter-spacing: 3px;
  cursor: pointer;
  text-transform: uppercase;
  transition: 300ms;
  font-family: arial;
  font-size: 0.8rem;
  ${(props) => {
    if (props.type === "primary")
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
    if (props.type === "secondary")
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
    if (props.type === "tertiary")
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
    if (props.type === "dark")
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
    if (props.type === "light")
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
    if (props.type === "primary-outlined")
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
    if (props.type === "secondary-outlined")
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
    if (props.type === "tertiary-outlined")
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
    if (props.type === "dark-outlined")
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
    if (props.type === "light-outlined")
      return `
    background: transparent;
    color: white;
    border: 2px solid  white;
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
  ${(props) => {
    if (props.size === "small") {
      return `
      padding: 10px 30px;
      border-radius: 50px;
      font-size: 0.6rem;
      letter-spacing: 1px;`;
    }
    if (props.size === "medium") {
      return `
      padding: 10px 50px;
      border-radius: 50px;
      font-size: 0.8rem;
      letter-spacing: 3px;`;
    }
    if (props.size === "large") {
      return `
      padding: 10px 70px;
      border-radius: 50px;
      font-size: 1rem;
      letter-spacing: 3px;`;
    }
  }}
  ${spacing}
  ${widths}
  ${colors}
`;

const JCUXButton = (props) => {
  return (
    <Button {...props}>
      {props.loading ? <img src={Loading} alt="loading" /> : props.children}
    </Button>
  );
};

export default JCUXButton;
