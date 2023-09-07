// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/button/index.js";

import styles from "./styles.scss";

export default {
  title: "Button",
  component: <cds-button href="https://www.ibm.com"> Button </cds-button>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

const Template = (args) => <cds-button {...args}>Button</cds-button>;

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  label: "Primary Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  label: "Secondary Button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: "tertiary",
  label: "Tertiary Button",
};
