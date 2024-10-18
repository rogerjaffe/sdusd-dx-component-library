import { PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./index";

const getMsalInstance = (
  application_id: string,
  directory_id: string,
  redirectURI: string,
) => {
  return new PublicClientApplication(
    msalConfig(application_id, directory_id, redirectURI),
  );
};

export default getMsalInstance;
