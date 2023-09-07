// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/checkbox/index.js";

import styles from "./styles.scss";

export default {
  title: "Checkbox",
  component: <cds-checkbox label-text="Lorem Ipsum"></cds-checkbox>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

export const Default = () => (
  <cds-checkbox label-text="Lorem Ipsum"></cds-checkbox>
);
export const Skeleton = () => (
  <cds-checkbox-skeleton label-text="Lorem Ipsum"></cds-checkbox-skeleton>
);

// export const Secondary = Template.bind({});
// Secondary.args = {
//   kind: "secondary",
//   label: "Secondary Button",
// };

// export const Tertiary = Template.bind({});
// Tertiary.args = {
//   kind: "tertiary",
//   label: "Tertiary Button",
// };
