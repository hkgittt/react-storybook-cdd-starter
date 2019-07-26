import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "../src/components/Button";

storiesOf("Button", module)
  .add("a button", () => <Button />)
  .add("w/ a label", () => <Button label="Label" />);
