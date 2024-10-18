import React from "react";
import { MsalProvider } from "@azure/msal-react";
import AuthAndUserProvider from "./AuthAndUserProvider";
import { getMsalInstance } from "../../common";

export const SdusdEntraProvider = ({
  application_id,
  directory_id,
  redirectURI,
  children,
}: {
  application_id: string;
  directory_id: string;
  redirectURI: string;
  children: any;
}): React.ReactElement => {
  const msalInstance = getMsalInstance(
    application_id,
    directory_id,
    redirectURI,
  );

  return (
    <MsalProvider instance={msalInstance}>
      <AuthAndUserProvider>{children}</AuthAndUserProvider>
    </MsalProvider>
  );
};
