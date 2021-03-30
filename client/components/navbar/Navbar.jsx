import React from "react";
import JCUXCustomLink from "../jcux/JCUXCustomLink";
import JCUXContainer from "../jcux/JCUXContainer";
import JCUXFlex from "../jcux/JCUXFlex";
import styled from "styled-components";
import JCUXText from "../jcux/JCUXText";

const StyledLink = styled(JCUXCustomLink)`
  text-decoration: none;
  &:hover,
  &:focus {
    color: ${(props) => props.theme.colors.jcGrey40};
  }
`;

const Navbar = () => {
  return (
    <JCUXFlex
      background="jcBlueGreen100"
      position="sticky"
      top="0px"
      alignItems="center"
      paddingTop="10px"
      paddingBottom="10px"
      height="fit-content"
      zIndex="1000"
    >
      <JCUXContainer height="50px">
        <JCUXFlex alignItems="center" height="100%" childSpacingRight="50px">
          <StyledLink color="white" href="/">
            <JCUXText
              fontWeight="600"
              type={{
                xs: "sub-heading-small",
                sm: "sub-heading-default",
                md: "sub-heading-large",
              }}
              letterSpacing="5px"
              marginTop="0px"
              marginBottom="0px"
            >
              CHRISHTY
            </JCUXText>
          </StyledLink>
          <StyledLink color="white" href="/shop">
            <JCUXText
              type={{
                xs: "body-small",
                sm: "body-default",
                md: "body-large",
              }}
              letterSpacing="5px"
              marginTop="0px"
              marginBottom="0px"
            >
              SHOP
            </JCUXText>
          </StyledLink>
        </JCUXFlex>
      </JCUXContainer>
    </JCUXFlex>
  );
};

export default Navbar;
