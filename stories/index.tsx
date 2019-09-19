import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";
import Counter from "../src/components/Counter";

storiesOf("Button", module)
  .add("a button", () => <Button />)
  .add("w/ a label", () => <Button label="Label" />);

storiesOf("Counter", module)
  .add("Counter", () => <Counter />);
