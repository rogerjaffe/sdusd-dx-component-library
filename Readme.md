## SDUSD Dashboard Component Library

#### Includes components for SDUSD Entra login and logout with React hooks

##### Deployment

* On dev machine bump version in package.json, then commit and push to the `master` branch
* Run `npm run deploy` to deploy the library to `npmjs.org`
* Update the `sdusd-action-insights-ui` `package.json` file with the new version of this library 
* Deploy the new UI version

### SdusdEntraProvider

A React provider component that must wrap your application to provide the necessary context for the MS Entra state.

```typescript
declare const SdusdEntraProvider: ({ application_id, directory_id, children, }: {
    application_id: string;
    directory_id: string;
    redirectURI: string;
    children: any;
}) => React.JSX.Element;
```

`application_id` and `directory_id` are required props that are provided by the SDUSD Entra team.
`redirectURI` is the URI that the user will be redirected to after logging in or out.

`useEntraAuth` hook will return the Entra context and user information. This returns an object with the following properties:

```
{
  accessToken: string;
  auth: {
    accessToken: string;
    account: {
      authorityType: 'MSSTS';
      environment: 'login.windows.net',
      homeAccountId: 'UUID',
      idToken: 'string',
      idTokenClaims: {
        aud: 'string',
        exp: 1234567890,
        groups: ['string', 'string', ...]
        iat: 1234567890,
        iss: 'string',
        name: 'string',
        nbf: 1234567890,
        nonce: 'string'
        oid: 'UUID',
        preferred_username: 'xxx@sandi.net',
        rh: 'string',
        sub: 'UUID',
        tid: 'UUID',
        uti: 'string',
        ver: '1.0',
        wids: ['string', 'string', ...]
      },
      localAccountId: 'UUID',
      name: 'string',
      nativeAccountId: 'UUID',
      tenantId: 'UUID',
      tenantProfiles 'Map',
      username: 'string'
    },
    authority: 'URL'
    cloudGraphHostName: 'string'
    code: 'unknown',
    correlationId: 'UUID',
    expiresOn: 'Date',
    extExpiresOn: 'Date',
    familyId: 'string',
    fromCache: 'boolean',
    fromNativeBroker: 'boolean',
    idToken: 'string',
    idTokenClaims: {
      aud: 'string',
      exp: 1234567890,
      groups: ['string', 'string', ...]
      iat: 1234567890,
      iss: 'string',
      name: 'string',
      nbf: 1234567890,
      nonce: 'string'
      oid: 'UUID',
      preferred_username: 'xxx@sandi.net',
      rh: 'string',
      sub: 'UUID',
      tid: 'UUID',
      uti: 'string',
      ver: '1.0',
      wids: ['string', 'string', ...]
    },
    msGraphHost: 'string',
    refreshOn: 'Date',
    requestId: 'string',
    scopes: 'string[]',
    tenantId: 'UUID',
    tokenType: 'string',
    uniqueId: 'string'
  },
  user: {
    @odata.context: 'URL',
    businessPhones: ['string', 'string', ...],
    displayName: 'string',
    employeeId: 'string',
    givenName: 'string',
    id: 'string',
    jobTitle: 'string',
    mail: 'string',
    mobilePhone: null,
    officeLocation: 'string',
    preferredLanguage: null,
    surname: 'string',
    userPrincipalName: 'string (email)'
  }
}
```

### SdusdEntraLogin

```typescript
interface SdusdEntraLogoutProps {
    logoutType: "popup" | "redirect";
    logoutRedirectUri?: string;
}
```

`logoutType` is required and must be either "popup" or "redirect", indicating the type of login window.
`logoutRedirectUri` is optional and is the URI that the user will be redirected to after logging out.

```typescript
interface SdusdEntraLoginProps {
    showFamilyMemberSignin?: boolean;
    loginType: "popup" | "redirect";
    onSuccess?: (auth: any) => void;
    onFailure?: (err: any) => void;
}
```

`showFamilyMemberSignin` is optional and defaults to `false`. If `true`, the login window will show the option to sign in as a family member.
`loginType` is required and must be either "popup" or "redirect", indicating the type of login window.
`onSuccess` is optional and is a callback function that is called when the user successfully logs in.
`onFailure` is optional and is a callback function that is called when the user fails to log in.

##### References

* [Provider design patterns](https://medium.com/@vitorbritto/react-design-patterns-provider-pattern-b273ba665158)
* [React Context API](https://reactjs.org/docs/context.html)
* [Entra authorization tokens](https://learn.microsoft.com/en-us/entra/identity-platform/access-tokens)
