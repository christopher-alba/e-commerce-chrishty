import React from "react";
import JCUXButton from "../jcux/JCUXButton";
import JCUXContainer from "../jcux/JCUXContainer";
import JCUXFlex from "../jcux/JCUXFlex";

const Navbar = () => {
  return (
    <JCUXFlex
      background="jcBlueGreen100"
      position="sticky"
      alignItems="center"
      paddingTop="10px"
      paddingBottom="10px"
    >
      <JCUXContainer>
        <JCUXButton color="white">CHRISHTY</JCUXButton>
      </JCUXContainer>
    </JCUXFlex>
  );
};

export default Navbar;
