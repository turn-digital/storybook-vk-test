// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/multi-select/index.js";

import styles from "./styles.scss";

export default {
  title: "Multiselect",
  component: <cds-button href="https://www.ibm.com"> Button </cds-button>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

const Template = (args) => (
  <cds-multi-select value="foo,baz" {...args}>
    <cds-multi-select-item value="foo">Foo</cds-multi-select-item>
    <cds-multi-select-item value="bar">Bar</cds-multi-select-item>
    <cds-multi-select-item value="baz">Baz</cds-multi-select-item>
  </cds-multi-select>
);

export const Default = Template.bind({});
Default.args = {
  label: "Choose here",
};

export const Filterable = Template.bind({});
Filterable.args = {
  label: "Choose here",
  filterable: true,
};
