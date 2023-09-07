// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/accordion/index.js";

import styles from "./styles.scss";

export default {
  title: "Accordion",
  component: (
    <cds-accordion>
      <cds-accordion-item>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </cds-accordion-item>
    </cds-accordion>
  ),
  argTypes: {
    // Define any custom props or event handlers here
  },
};

const Template = (args) => (
  <cds-accordion>
    <cds-accordion-item title="Default accordion item 1">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </cds-accordion-item>
    <cds-accordion-item title="Default accordion item 2">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </p>
    </cds-accordion-item>
  </cds-accordion>
);

const SkeletonTemplate = (args) => (
  <cds-accordion-skeleton></cds-accordion-skeleton>
);

export const Default = Template.bind({});
Default.args = {};

export const Skeleton = SkeletonTemplate.bind({});
SkeletonTemplate.args = {};
