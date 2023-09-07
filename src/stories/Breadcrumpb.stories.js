// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/breadcrumb/index.js";
import "@carbon/web-components/es/components/overflow-menu/index.js";

import styles from "./styles.scss";

export default {
  title: "Breadcrumb",
  component: (
    <cds-breadcrumb>
      <cds-breadcrumb-item>
        <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
      </cds-breadcrumb-item>
      <cds-breadcrumb-item>
        <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
      </cds-breadcrumb-item>
      <cds-breadcrumb-item>
        <cds-breadcrumb-link href="#">Breadcrumb 3</cds-breadcrumb-link>
      </cds-breadcrumb-item>
      <cds-breadcrumb-item>
        <cds-breadcrumb-link>Breadcrumb 4</cds-breadcrumb-link>
      </cds-breadcrumb-item>
    </cds-breadcrumb>
  ),
  argTypes: {
    // Define any custom props or event handlers here
  },
};

export const Default = () => (
  <cds-breadcrumb>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="#">Breadcrumb 2</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="#">Breadcrumb 3</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link>Breadcrumb 4</cds-breadcrumb-link>
    </cds-breadcrumb-item>
  </cds-breadcrumb>
);

export const BreadcrumbWithOverflowMenu = () => (
  <cds-breadcrumb>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="/#">Breadcrumb 1</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="/#">Breadcrumb 2</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-overflow-menu>
        <cds-overflow-menu-body>
          <cds-overflow-menu-item>Breadcrumb 3</cds-overflow-menu-item>
          <cds-overflow-menu-item>Breadcrumb 4</cds-overflow-menu-item>
        </cds-overflow-menu-body>
      </cds-breadcrumb-overflow-menu>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link href="/#">Breadcrumb 5</cds-breadcrumb-link>
    </cds-breadcrumb-item>
    <cds-breadcrumb-item>
      <cds-breadcrumb-link>Breadcrumb 6</cds-breadcrumb-link>
    </cds-breadcrumb-item>
  </cds-breadcrumb>
);

BreadcrumbWithOverflowMenu.storyName = "Breadcrumb With Overflow Menu";

export const skeleton = () => {
  return <cds-breadcrumb-skeleton> </cds-breadcrumb-skeleton>;
};
