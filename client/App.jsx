import React, { Fragment } from "react";
import "./app.css";
import JCUXText from "./components/jcux/JCUXText";

const App = () => {
  return (
    <Fragment>
      <JCUXText
        type="heading-large"
        margin="0px"
        fontWeight="800"
        color="jcBlue20"
        italic
      >
        Hello There
      </JCUXText>
      <JCUXText type="body-default" italic>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a in
        reiciendis eveniet incidunt, quos dolorum ad voluptatem labore officia
        et libero delectus quam saepe qui illo at! Quidem nulla mollitia eaque
        iusto incidunt nobis distinctio vel asperiores pariatur accusamus natus
        dolor rerum in, corporis hic tempore quod dicta temporibus.
      </JCUXText>
    </Fragment>
  );
};

export default App;
