import React from "react";
import JCUXBox from "../../../components/jcux/JCUXBox";
import JCUXCustomLink from "../../../components/jcux/JCUXCustomLink";
import JCUXFlex from "../../../components/jcux/JCUXFlex";
import JCUXText from "../../../components/jcux/JCUXText";

const FeaturedProduct = ({ background, linkType, linkText, link }) => {
  return (
    <JCUXFlex
      background={background}
      height="60vh"
      backgroundSize="cover"
      backgroundPosition="center"
      paddingBottom="50px"
      alignItems="center"
    >
      <JCUXCustomLink
        type={linkType}
        href={link}
        width={{ xs: "200px", sm: "50%" }}
        paddingLeft={{ xs: "0px", sm: "auto" }}
        marginLeft="auto"
        marginRight="auto"
        position="sticky"
        top="50px"
        borderRadius="0px"
      >
        <JCUXText type={{xs:"body-small",md:"sub-heading-large"}} margin="10px">{linkText}</JCUXText>
      </JCUXCustomLink>
    </JCUXFlex>
  );
};

export default FeaturedProduct;
