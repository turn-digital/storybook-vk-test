// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/button/index.js";
import "@carbon/web-components/es/components/accordion/index.js";
import "@carbon/web-components/es/components/number-input/index.js";

import styles from "./workingStoriesStyles.scss";

export default {
  title: "Working",
  component: <cds-button href="https://www.ibm.com"> Button </cds-button>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

export const Button = () => (
  <>
    <cds-button> Button </cds-button>
  </>
);

export const Accordion = () => (
  <>
    <div style={{ width: "50%" }}>
      {" "}
      <cds-accordion>
        <cds-accordion-item title="Accordion title 1">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Accordion title 2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
        <cds-accordion-item title="Accordion title 3 opened" open={true}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </cds-accordion-item>
      </cds-accordion>
    </div>
  </>
);

export const NumberInput = () => (
  <>
    <cds-number-input
      value="0"
      min="0"
      max="100"
      label="Label text"
      helper-text="Optional helper text"
    ></cds-number-input>
  </>
);
