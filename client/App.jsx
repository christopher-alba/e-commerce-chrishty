import React, { Fragment } from "react";
import "./app.css";
import JCUXText from "./components/jcux/JCUXText";
import JCUXButton from "./components/jcux/JCUXButton";
import JCUXBox from "./components/jcux/JCUXBox";
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
      <JCUXBox background="red" padding="50px" borderRadius="30px" color="jcPink20">
        <JCUXText type="body-default" italic>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet a in
          reiciendis eveniet incidunt, quos dolorum ad voluptatem labore officia
          et libero delectus quam saepe qui illo at! Quidem nulla mollitia eaque
          iusto incidunt nobis distinctio vel asperiores pariatur accusamus
          natus dolor rerum in, corporis hic tempore quod dicta temporibus.
        </JCUXText>
      </JCUXBox>
      <JCUXButton type="primary" size="small">
        Im a button :)
      </JCUXButton>
    </Fragment>
  );
};

export default App;
