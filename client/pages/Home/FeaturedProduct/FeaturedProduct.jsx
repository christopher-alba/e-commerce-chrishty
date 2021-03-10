import React from "react";
import JCUXBox from "../../../components/jcux/JCUXBox";
import JCUXCustomLink from "../../../components/jcux/JCUXCustomLink";

const FeaturedProduct = ({ background, linkType, linkText, link }) => {
  return (
    <JCUXBox
      background={background}
      height="60vh"
      backgroundSize="cover"
      backgroundPosition="center"
      paddingTop="100px"
    >
      <JCUXCustomLink
        type={linkType}
        href={link}
        width={{ xs: "200px", sm: "50%" }}
        paddingLeft={{ xs: "0px", sm: "auto" }}
        marginTop="100px"
        marginLeft="auto"
        marginRight="auto"
        position="sticky"
        top="50px"
      >
        {linkText}
      </JCUXCustomLink>
    </JCUXBox>
  );
};

export default FeaturedProduct;
