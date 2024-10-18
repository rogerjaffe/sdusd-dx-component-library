import React from "react";
import "devextreme/dist/css/dx.light.css";
import Button from "devextreme-react/button";
import "./SdusdEntraLogout.css";
import { useMsal } from "@azure/msal-react";
import { msalConfig } from "../SdusdEntraLogin/authConfig";
import { PublicClientApplication } from "@azure/msal-browser";

export interface SdusdEntraLogoutProps {
  logoutType: "popup" | "redirect";
  logoutRedirectUri?: string;
}

// const getMsalConfig = (application_id: string, directory_id: string) =>
//   msalConfig(application_id, directory_id);
//
// export const getMsalInstance = (application_id: string, directory_id: string) =>
//   new PublicClientApplication(getMsalConfig(application_id, directory_id));

export const SdusdEntraLogout = (props: SdusdEntraLogoutProps) => {
  const { instance } = useMsal();
  const { logoutType, logoutRedirectUri = "http://localhost:3000" } = props;

  const handleLogout = () => {
    if (logoutType === "popup") {
      instance
        .logoutPopup({
          postLogoutRedirectUri: logoutRedirectUri,
          mainWindowRedirectUri: logoutRedirectUri,
        })
        .then(() => {
          console.log("logged out popup");
        });
    } else if (logoutType === "redirect") {
      instance
        .logoutRedirect({
          postLogoutRedirectUri: logoutRedirectUri,
        })
        .then(() => {
          console.log("logged out redirect");
        });
    }
  };

  return <Button text="Logout" type="default" onClick={() => handleLogout()} />;
};

export default SdusdEntraLogout;
