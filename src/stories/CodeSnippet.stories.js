// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/code-snippet/index.js";

import styles from "./styles.scss";

export default {
  title: "Code Snippet",
  component: (
    <cds-code-snippet>
      node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      Blanditiis, veritatis voluptate id incidunt molestiae officia possimus,
      quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem
      explicabo vitae laboriosam!
    </cds-code-snippet>
  ),
  argTypes: {
    // Define any custom props or event handlers here
  },
};

export const Default = () => (
  <cds-code-snippet>
    node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiis, veritatis voluptate id incidunt molestiae officia possimus,
    quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem
    explicabo vitae laboriosam!
  </cds-code-snippet>
);
export const SingleLine = () => (
  <cds-code-snippet>
    node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiis, veritatis voluptate id incidunt molestiae officia possimus,
    quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem
    explicabo vitae laboriosam!
  </cds-code-snippet>
);
export const MuultiLine = () => (
  <cds-code-snippet type="multi">
    node -v Lorem ipsum dolor sit amet, consectetur adipisicing elit.
    Blanditiis, veritatis voluptate id incidunt molestiae officia possimus,
    quasi itaque alias, architecto hic, dicta fugit? Debitis delectus quidem
    explicabo vitae laboriosam!
  </cds-code-snippet>
);
export const Inline = () => (
  <cds-code-snippet type="inline"> node -v </cds-code-snippet>
);
export const Skeleton = () => (
  <cds-code-snippet-skeleton type="single"></cds-code-snippet-skeleton>
);
