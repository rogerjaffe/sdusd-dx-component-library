import React, { useEffect, useState } from "react";
import { MsalProvider } from "@azure/msal-react";
import AuthAndUserProvider from "./AuthAndUserProvider";
import { getMsalInstance } from "../../common";
import { PublicClientApplication } from "@azure/msal-browser";

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
  const [instance, setInstance] = useState<PublicClientApplication | null>(
    null,
  );

  useEffect(() => {
    const msalInstance = getMsalInstance(
      application_id,
      directory_id,
      redirectURI,
    );
    setInstance(msalInstance);
  }, [application_id, directory_id, redirectURI]);

  if (instance) {
    return (
      <MsalProvider instance={instance}>
        <AuthAndUserProvider>{children}</AuthAndUserProvider>
      </MsalProvider>
    );
  } else {
    return <div>Loading...</div>;
  }
};
