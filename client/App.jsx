import React, { Fragment } from "react";
import "./app.css";
import Button from "./components/jcux/JCUXButton";
import JCUXCustomLink from "./components/jcux/JCUXCustomLink";

const App = () => {
  return (
    <Fragment>
      <Button>Im a button</Button>
      <Button type="primary">Im a button</Button>
      <Button type="secondary">Im a button</Button>
      <Button type="tertiary">Im a button</Button>
      <Button type="dark">Im a button</Button>
      <Button type="light">Im a button</Button>
      <Button type="primary-outlined">Im a button</Button>
      <Button type="secondary-outlined">Im a button</Button>
      <Button type="tertiary-outlined">Im a button</Button>
      <Button type="dark-outlined">Im a button</Button>
      <div style={{ background: "black" }}>
        <Button type="light-outlined">Im a button</Button>
      </div>
      <div>
        <p>
          This is some text{" "}
          <JCUXCustomLink href="hello">Im a Link</JCUXCustomLink>
        </p>
      </div>

      <JCUXCustomLink type="button-primary" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-secondary" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-tertiary" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-dark" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-light" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-primary-outlined" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-secondary-outlined" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-tertiary-outlined" href="hello">
        Im a Link
      </JCUXCustomLink>
      <JCUXCustomLink type="button-dark-outlined" href="hello">
        Im a Link
      </JCUXCustomLink>
      <div style={{ background: "black" }}>
        <JCUXCustomLink type="button-light-outlined" href="hello">
          Im a Link
        </JCUXCustomLink>
      </div>
    </Fragment>
  );
};

export default App;
