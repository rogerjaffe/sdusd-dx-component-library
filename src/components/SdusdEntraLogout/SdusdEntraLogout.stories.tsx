import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MsalProvider } from "@azure/msal-react";

import SdusdEntraLogout from "./SdusdEntraLogout";
import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "../../common";

import {
  application_id,
  directory_id,
  redirectURI,
} from "../../../entraCredentials";

const msalInstance = new PublicClientApplication(
  msalConfig(application_id, directory_id, redirectURI),
);

const meta: Meta<typeof SdusdEntraLogout> = {
  component: SdusdEntraLogout,
  decorators: [
    (story) => <MsalProvider instance={msalInstance}>{story()}</MsalProvider>,
  ],
};

export default meta;
type Story = StoryObj<typeof SdusdEntraLogout>;

export const Popup: Story = {
  args: {
    logoutType: "popup",
    logoutRedirectUri: "/",
  },
};

export const Redirect: Story = {
  args: {
    logoutType: "redirect",
    logoutRedirectUri: "/",
  },
};
