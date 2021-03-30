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
        background={`url("./images/suite.webp")`}
        linkType="button-light"
        linkText="View Our Masculine Suites"
        link="/shop?=suites"
      />
      <FeaturedProduct
        background={`url("./images/ties.jpg")`}
        linkType="button-dark"
        linkText="View Our Sexy Ties"
        link="/shop?=ties"
      />
      <FeaturedProduct
        background={`url("./images/heels.jpg")`}
        linkType="button-light"
        linkText="View Our Beautiful Heels"
        link="/shop?=heels"
      />
      <FeaturedProduct
        background={`url("./images/dressShoes.webp")`}
        linkType="button-dark"
        linkText="View Our Dress Shoes"
        link="/shop?=dressShoes"
      />
    </JCUXBox>
  );
};

export default Home;
