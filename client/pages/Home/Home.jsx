import React from "react";
import JCUXBox from "../../components/jcux/JCUXBox";
import FeaturedProduct from "./FeaturedProduct";
import Landing from "./Landing";
const Home = () => {
  return (
    <JCUXBox>
      <Landing />
      <FeaturedProduct
        background={`url("./images/dress.jpg")`}
        linkType="button-dark"
        linkText="View Our Beautiful Dresses"
        link="/shop?=dresses"
      />
      <FeaturedProduct
        background={`url("./images/dress.jpg")`}
        linkType="button-dark"
        linkText="View Our Beautiful Dresses"
        link="/shop?=dresses"
      />
      <FeaturedProduct
        background={`url("./images/dress.jpg")`}
        linkType="button-dark"
        linkText="View Our Beautiful Dresses"
        link="/shop?=dresses"
      />
      <FeaturedProduct
        background={`url("./images/dress.jpg")`}
        linkType="button-dark"
        linkText="View Our Beautiful Dresses"
        link="/shop?=dresses"
      />
      <FeaturedProduct
        background={`url("./images/dress.jpg")`}
        linkType="button-dark"
        linkText="View Our Beautiful Dresses"
        link="/shop?=dresses"
      />
    </JCUXBox>
  );
};

export default Home;
