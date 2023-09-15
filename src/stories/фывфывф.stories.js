import React from "react";
import "@carbon/web-components/es/components/number-input/index.js";

import styles from "./styles.scss";

export default {
  title: "Number input",
  component: <cds-button href="https://www.ibm.com"> Button </cds-button>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

const Template = (args) => (
  <cds-number-input
    value="0"
    min="0"
    max="100"
    label="Label text"
    helper-text="Optional helper text"
  ></cds-number-input>
);

export const Default = Template.bind({});
Default.args = {
  label: "Choose here",
};
