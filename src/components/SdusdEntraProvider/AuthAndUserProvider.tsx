import React, { createContext, useContext, useEffect, useState } from "react";
import { useIsAuthenticated, useMsal } from "@azure/msal-react";
import { AuthenticationResult } from "@azure/msal-browser";
import { graphConfig, loginRequest } from "../../common";

export type UserType = {
  businessPhones: string[];
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
  id: string;
  employeeId: string;
};

export type AuthContextType = {
  auth: AuthenticationResult | null;
  user: UserType | null;
  accessToken: string;
};

const AuthContext = createContext<AuthContextType>({
  auth: null,
  user: null,
  accessToken: "",
});

export const useEntraAuthAndUser = () => {
  return useContext(AuthContext);
};

/**
 * Attaches a given access token to a MS Graph API call. Returns information about the user
 * @param accessToken
 */
const callMsGraph = async (accessToken: string) => {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append("Authorization", bearer);

  const options = {
    method: "GET",
    headers: headers,
  };
  return fetch(graphConfig.graphMeEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
};

const AuthAndUserProvider = ({
  children,
}: {
  children: any;
}): React.ReactElement => {
  const [accessToken, setAccessToken] = useState("");
  const [auth, setAuth] = useState<AuthenticationResult | null>(null);
  const [user, setUser] = useState<any>(null);
  const { instance, accounts, inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const value = { auth, user, accessToken };

  useEffect(() => {
    if (!isAuthenticated) return;
    instance
      .acquireTokenSilent({
        ...loginRequest,
        account: accounts[0],
      })
      .then((auth) => {
        setAccessToken(auth.accessToken);
        setAuth(auth);
      });
  }, [instance, isAuthenticated]);

  useEffect(() => {
    if (!isAuthenticated || !auth) return;
    callMsGraph(auth.accessToken).then((user) => {
      setUser(user);
    });
  }, [isAuthenticated, auth]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthAndUserProvider;
