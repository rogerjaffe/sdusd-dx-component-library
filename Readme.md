## SDUSD Dashboard Component Library

#### Includes components for SDUSD Entra login and logout with React hooks

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
