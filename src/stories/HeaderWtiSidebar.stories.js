// src/stories/CarbonButton.stories.js

import React from "react";
import "@carbon/web-components/es/components/ui-shell/index.js";
import "@carbon/web-components/es/components/dropdown/index.js";
import "@carbon/web-components/es/components/tile/index.js";
import "@carbon/web-components/es/components/button/index.js";
import "@carbon/web-components/es/components/notification/index.js";
import "@carbon/web-components/es/components/button/index.js";

export default {
  title: "CustomSidebar",
  component: <cds-checkbox label-text="Lorem Ipsum"></cds-checkbox>,
  argTypes: {
    // Define any custom props or event handlers here
  },
};

const Template = (args) => (
  <>
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

        <div style={{ marginTop: "20px" }}>
          <cds-header-global-action>
            <cds-button>
              <svg
                focusable="false"
                preserveAspectRatio="xMidYMid meet"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                width="20"
                height="20"
                viewBox="0 0 32 32"
                slot="icon"
              >
                <path d="M29,27.5859l-7.5521-7.5521a11.0177,11.0177,0,1,0-1.4141,1.4141L27.5859,29ZM4,13a9,9,0,1,1,9,9A9.01,9.01,0,0,1,4,13Z"></path>
              </svg>
            </cds-button>
          </cds-header-global-action>
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

          <cds-side-nav-menu-item
            active
            aria-current="page"
            href="${linksHref}"
          >
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
    <div className="pageTile">
      <cds-tile>Default tile</cds-tile>
    </div>

    <div className="pageContent">
      <div>
        The shell is perhaps the most crucial piece of any UI built with Carbon.
        It contains the shared navigation framework for the entire design system
        and ties the products in IBM’s portfolio together in a cohesive and
        elegant way. The shell is the home of the topmost navigation, where
        users can quickly and dependably gain their bearings and move between
        pages.
        <br />
        <br />
        The shell was designed with maximum flexibility built in, to serve the
        needs of a broad range of products and users. Adopting the shell ensures
        compliance with IBM design standards, simplifies development efforts,
        and provides great user experiences. All IBM products built with Carbon
        are required to use the shell’s header.
        <br />
        <br />
        To better understand the purpose and function of the UI shell, consider
        the “shell” of MacOS, which contains the Apple menu, top-level
        navigation, and universal, OS-level controls at the top of the screen,
        as well as a universal dock along the bottom or side of the screen. The
        Carbon UI shell is roughly analogous in function to these parts of the
        Mac UI. For example, the app switcher portion of the shell can be
        compared to the dock in MacOS.
      </div>
    </div>
    <cds-header-panel expanded>
      <cds-toast-notification
        title="Notification title"
        subtitle="Subtitle text goes here."
      ></cds-toast-notification>
      <cds-toast-notification
        title="Notification title"
        subtitle="Subtitle text goes here."
      ></cds-toast-notification>
      <cds-toast-notification
        title="Notification title"
        subtitle="Subtitle text goes here."
      ></cds-toast-notification>
      <cds-toast-notification
        title="Notification title"
        subtitle="Subtitle text goes here."
      ></cds-toast-notification>
    </cds-header-panel>
  </>
);

export const Default = Template.bind({});
Default.args = {};
