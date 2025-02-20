// @ts-ignore
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { MsalProvider } from "@azure/msal-react";
import SdusdEntraLogin from "./SdusdEntraLogin";
import { msalConfig } from "../../common";
import { PublicClientApplication } from "@azure/msal-browser";
import {
  application_id,
  directory_id,
  redirectURI,
} from "../../../entraCredentials";
import "bootstrap/dist/css/bootstrap.min.css";

const msalInstance = new PublicClientApplication(
  msalConfig(application_id, directory_id, redirectURI),
);

const meta: Meta<typeof SdusdEntraLogin> = {
  component: SdusdEntraLogin,
  decorators: [
    (story) => <MsalProvider instance={msalInstance}>{story()}</MsalProvider>,
  ],
};

export default meta;
type Story = StoryObj<typeof SdusdEntraLogin>;

export const Popup: Story = {
  args: {
    showFamilyMemberSignin: true,
    loginType: "popup",
    onSuccess: (auth) => {
      console.log("Success", auth);
    },
    onFailure: (e) => console.log("Failure", e),
    // label: 'Button!!',
  },
};

// Note that the storybook does not support redirecting to a new page
export const Redirect: Story = {
  args: {
    showFamilyMemberSignin: true,
    loginType: "redirect",
    onSuccess: (auth) => {
      console.log("Success", auth);
    },
    onFailure: (e) => console.log("Failure", e),
    // label: 'Button!!',
  },
};
