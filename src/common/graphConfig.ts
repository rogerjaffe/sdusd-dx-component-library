/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */

const selectedFields = [
  "businessPhones",
  "displayName",
  "givenName",
  "jobTitle",
  "mail",
  "mobilePhone",
  "officeLocation",
  "preferredLanguage",
  "surname",
  "userPrincipalName",
  "id",
  "employeeId",
];

/**
 * Add here the scopes to request when obtaining an access token for MS Graph API. For more information, see:
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
const graphConfig = {
  graphMeEndpoint: `https://graph.microsoft.com/v1.0/me?$select=${selectedFields.join(",")}`,
  // graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
};

export default graphConfig;
