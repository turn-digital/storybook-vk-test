// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/ui-shell/index.js";
import "@carbon/web-components/es/components/dropdown/index.js";

export default {
  title: "CustomSidebar",
  component: <cds-checkbox label-text="Lorem Ipsum"></cds-checkbox>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

export const Default = () => (
  <cds-header aria-label="IBM Platform Name">
    <cds-header-menu-button
      button-label-active="Close menu"
      button-label-inactive="Open menu"
    ></cds-header-menu-button>
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div>
        <cds-header-name>Valsts kase</cds-header-name>
        <cds-header-nav menu-bar-label="IBM [Platform]">
          <cds-header-nav-item href="javascript:void 0">
            Pieteikumi
          </cds-header-nav-item>
        </cds-header-nav>
      </div>

      <div>
        <cds-header-global-action>icon</cds-header-global-action>
        <cds-header-global-action>icon</cds-header-global-action>
        <cds-header-global-action>icon</cds-header-global-action>
      </div>
    </div>

    <cds-side-nav
      aria-label="Side navigation"
      collapse-mode="${SIDE_NAV_COLLAPSE_MODE.RAIL}"
    >
      <cds-side-nav-items>
        <div>
          <cds-dropdown
            value="Ekonomokas minisrija"
            type={"inline"}
            label={"Ekonomokas minisrija"}
          >
            <cds-dropdown-item value="foo">Foo</cds-dropdown-item>
            <cds-dropdown-item value="bar">Bar</cds-dropdown-item>
            <cds-dropdown-item value="baz">Baz</cds-dropdown-item>
          </cds-dropdown>
        </div>
        <div class="lineBreak"></div>

        <cds-side-nav-menu-item active aria-current="page" href="${linksHref}">
          Pieteikumu katalogs
        </cds-side-nav-menu-item>
        <cds-side-nav-menu-item>Parakstisana</cds-side-nav-menu-item>
        <cds-side-nav-menu-item>Pieteikumu saraksts</cds-side-nav-menu-item>
        <div class="lineBreak"></div>
        <cds-side-nav-menu-item>Klienta iestatijumi</cds-side-nav-menu-item>
        <cds-side-nav-menu-item>Pieteikumu anketa</cds-side-nav-menu-item>
      </cds-side-nav-items>
    </cds-side-nav>
  </cds-header>
);
