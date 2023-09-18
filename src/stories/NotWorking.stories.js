// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/breadcrumb/index.js";
import {
  Breadcrumb,
  OverflowMenu,
  BreadcrumbItem,
  OverflowMenuItem,
} from "@carbon/react";

import "@carbon/web-components/es/components/popover/index.js";
import "@carbon/web-components/es/components/form/index.js";
import "@carbon/web-components/es/components/radio-button/index.js";
import "@carbon/web-components/es/components/checkbox/index.js";

import styles from "./notWorkingStoriesStyles.scss";

export default {
  title: "NotWorking",
  component: <cds-checkbox label-text="Lorem Ipsum"></cds-checkbox>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

export const BreadcrumbNotWorking = () => (
  <>
    {" "}
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
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <p>
      Have documentation and code example but functionality is not working as
      expected, we dont have working overflow menu.
    </p>
    <p>
      Here is the link:{" "}
      <a href="https://carbon-design-system.github.io/carbon-for-ibm-dotcom/v2/carbon-web-components-v2/?path=/story/components-breadcrumb--breadcrumb-with-overflow-menu">
        Code example that don't work as exmpected
      </a>
    </p>
    <p>
      As an example that this should work with default import we have same
      component from @carbon/react shown below
    </p>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <Breadcrumb>
      <BreadcrumbItem>
        <a href="/#">Breadcrumb 1</a>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 2</BreadcrumbItem>

      <BreadcrumbItem data-floating-menu-container>
        <OverflowMenu>
          <OverflowMenuItem itemText="Breadcrumb 3" />
          <OverflowMenuItem itemText="Breadcrumb 4" />
        </OverflowMenu>
      </BreadcrumbItem>
      <BreadcrumbItem href="#">Breadcrumb 5</BreadcrumbItem>
      <BreadcrumbItem>Breadcrumb 6</BreadcrumbItem>
    </Breadcrumb>
    <br />
    <p>Here we can see how default functionality should work</p>
  </>
);

export const PopoverNotWorking = () => (
  <>
    <p>This is a popover component:</p>
    <p>Popover is a layer that pops up over all other elements on a page</p>
    <div style={{ marginLeft: "200px", marginTop: "200px" }}>
      <cds-popover open tabTip>
        <button aria-label="Settings" type="button"></button>
        <cds-popover-content>
          <div class="p-3">
            <cds-form-item>
              <cds-radio-button-group
                legend-text="Row height"
                name="radio-button-group"
                value="small"
                style={{ alignItems: "flex-start", flexDirection: "column" }}
              >
                <cds-radio-button
                  label-text="Small"
                  value="small"
                  id="radio-small"
                ></cds-radio-button>
                <cds-radio-button
                  label-text="Large"
                  value="large"
                  id="radio-large"
                ></cds-radio-button>
              </cds-radio-button-group>
            </cds-form-item>
            <hr />
            <fieldset class="${prefix}--fieldset">
              <legend class="${prefix}--label">Edit columns</legend>
              <cds-checkbox
                checked
                label-text="Name"
                id="checkbox-label-1"
              ></cds-checkbox>
              <cds-checkbox
                checked
                label-text="Type"
                id="checkbox-label-2"
              ></cds-checkbox>
              <cds-checkbox
                checked
                label-text="Location"
                id="checkbox-label-3"
              ></cds-checkbox>
            </fieldset>
          </div>
        </cds-popover-content>
      </cds-popover>
    </div>

    <p>
      As we can see this is not working as expected but also, this is not
      working in example on{" "}
      <a href="https://carbon-design-system.github.io/carbon-for-ibm-dotcom/v2/carbon-web-components-v2/?path=/docs/components-popover--tab-tip">
        this
      </a>{" "}
      page in{" "}
      <a href="https://codesandbox.io/p/sandbox/github/carbon-design-system/carbon-for-ibm-dotcom/tree/feat/cwc-v2/packages/carbon-web-components/examples/codesandbox/basic/components/popover?file=/package.json:1,1">
        codesandbox
      </a>{" "}
      provided
    </p>
  </>
);

export const Icons = () => (
  <>
    <p>
      <a href="https://carbon-design-system.github.io/carbon-for-ibm-dotcom/v2/carbon-web-components-v2/?path=/docs/components-icon--default">
        Here
      </a>{" "}
      we can see the code example in the docs that we need to use for importing
      icons
    </p>
    <p>
      No documentation on how to use icons in pure html, React, Angular or any
      other framework
    </p>
  </>
);
