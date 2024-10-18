import { IPublicClientApplication } from "@azure/msal-browser";
import { loginRequest } from "./authConfig";
import { callMsGraph } from "./graph";

const handleLogin = (
  loginType: "popup" | "redirect",
  instance: IPublicClientApplication,
) => {
  if (loginType === "popup") {
    instance
      .loginPopup(loginRequest)
      .then(async (r) => {
        console.log("IdToken", r);
        const atResponse = await callMsGraph(r.accessToken);
        console.log("msGraph in login", atResponse);
      })
      .catch((e) => {
        console.log(e);
      });
  } else if (loginType === "redirect") {
    instance.loginRedirect(loginRequest).catch((e) => {
      console.log(e);
    });
  }
};

export default handleLogin;
