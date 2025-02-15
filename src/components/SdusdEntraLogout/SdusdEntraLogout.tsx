import React from "react";
import "./SdusdEntraLogout.css";
import { useMsal } from "@azure/msal-react";

export interface SdusdEntraLogoutProps {
  logoutType: "popup" | "redirect";
  logoutRedirectUri?: string;
  beforeLogout?: () => void;
  afterLogout?: () => void;
}

export const SdusdEntraLogout = (props: SdusdEntraLogoutProps) => {
  const { instance } = useMsal();
  const { logoutType, logoutRedirectUri = "http://localhost:3000" } = props;

  const handleLogout = () => {
    props.beforeLogout ? props.beforeLogout() : null;
    if (logoutType === "popup") {
      instance
        .logoutPopup({
          postLogoutRedirectUri: logoutRedirectUri,
          mainWindowRedirectUri: logoutRedirectUri,
        })
        .then(() => {
          console.log("logged out popup");
          props.afterLogout ? props.afterLogout() : null;
        });
    } else if (logoutType === "redirect") {
      instance
        .logoutRedirect({
          postLogoutRedirectUri: logoutRedirectUri,
        })
        .then(() => {
          console.log("logged out redirect");
          props.afterLogout ? props.afterLogout() : null;
        });
    }
  };

  return (
    <div className="btn btn-primary" onClick={() => handleLogout()}>
      Logout
    </div>
  );
};

export default SdusdEntraLogout;
