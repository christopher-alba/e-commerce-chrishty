import React from "react";
import JCUXBox from "../../../components/jcux/JCUXBox";
import JCUXButton from "../../../components/jcux/JCUXButton/JCUXButton";
import JCUXContainer from "../../../components/jcux/JCUXContainer";
import JCUXFlex from "../../../components/jcux/JCUXFlex";
import JCUXText from "../../../components/jcux/JCUXText";
import JCUXCustomLink from "../../../components/jcux/JCUXCustomLink";
import styled from "styled-components";

const socialLinks = [
  {
    link: "https://www.instagram.com/alba.sy.chris/",
    icon: <i className="fab fa-instagram"></i>,
    description: "link to instagram page",
  },
  {
    link: "https://www.facebook.com/christopher.alba.357/",
    icon: <i className="fab fa-facebook"></i>,
    description: "link to facebook page",
  },
  {
    link: "https://www.linkedin.com/in/christopher-alba",
    icon: <i className="fab fa-linkedin"></i>,
    description: "link to linkedin page",
  },
  {
    link: "https://github.com/christopher-alba",
    icon: <i className="fab fa-github"></i>,
    description: "link to github page",
  },
];

const StyledLink = styled(JCUXCustomLink)`
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  background: white;
  transition: 300ms;
  &:hover,
  &:focus {
    background: ${(props) => props.theme.colors.jcGrey60};
  }
  &:focus {
    box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.5);
    outline: none;
  }
`;

const Landing = () => {
  return (
    <JCUXBox
      background={`url("./images/landing1.jpg")`}
      height="80vh"
      width="100%"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <JCUXContainer height="100%">
        <JCUXFlex height="100%" alignItems="center">
          <JCUXBox width="100%">
            <JCUXText
              type={{ xs: "heading-small", sm: "heading-large" }}
              marginTop="0px"
              marginBottom="0px"
              color="white"
              letterSpacing="4px"
            >
              CLASSY FASHION
            </JCUXText>
            <JCUXText
              type={{ xs: "heading-small", sm: "heading-large" }}
              marginTop="0px"
              marginBottom="20px"
              color="white"
              letterSpacing="4px"
            >
              FOR EVERYONE
            </JCUXText>
            <JCUXFlex
              childSpacingRight={{ xs: "0px", sm: "20px" }}
              childSpacingBottom={{ xs: "20px", sm: "0px" }}
              flexWrap="wrap"
            >
              <JCUXButton type="secondary" width={{ xs: "100%", sm: "auto" }}>
                VIEW PRODUCTS
              </JCUXButton>
              <JCUXCustomLink
                href="/shop"
                type="button-tertiary"
                width={{ xs: "100%", sm: "auto" }}
              >
                SHOP NOW
              </JCUXCustomLink>
            </JCUXFlex>
            <JCUXFlex
              childSpacingRight="20px"
              marginTop="20px"
              justifyContent={{ xs: "center", sm: "left" }}
            >
              {socialLinks.map((item) => (
                <StyledLink
                  href={item.link}
                  target="__blank"
                  rel="noopener noreferer"
                  aria-description={item.description}
                >
                  <JCUXText size="2rem" paddingTop="5px">
                    {item.icon}
                  </JCUXText>
                </StyledLink>
              ))}
            </JCUXFlex>
          </JCUXBox>
        </JCUXFlex>
      </JCUXContainer>
    </JCUXBox>
  );
};

export default Landing;
