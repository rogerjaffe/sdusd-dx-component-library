import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { SdusdEntraProvider, useEntraAuth } from "./index";
import { SdusdEntraLogin, SdusdEntraLogout } from "../index";
import {
  AuthenticatedTemplate,
  MsalProvider,
  UnauthenticatedTemplate,
} from "@azure/msal-react";
import { getMsalInstance } from "../../common";
import {
  application_id,
  directory_id,
  redirectURI,
} from "../../../entraCredentials";

const TestComponent = () => {
  const entraData = useEntraAuth();
  console.log(entraData);
  return (
    <div>
      <h4>TestComponent</h4>
      <h6>
        {entraData?.user?.displayName} {entraData?.user?.employeeId}
      </h6>
      <AuthenticatedTemplate>
        <SdusdEntraLogout logoutType="popup" />
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <SdusdEntraLogin loginType="popup" />
      </UnauthenticatedTemplate>
    </div>
  );
};

const meta: Meta<typeof SdusdEntraProvider> = {
  component: SdusdEntraProvider,
};

export default meta;

type Story = StoryObj<typeof SdusdEntraProvider>;

export const Primary: Story = {
  args: {
    application_id,
    directory_id,
    redirectURI,
    children: <TestComponent />,
  },
};
