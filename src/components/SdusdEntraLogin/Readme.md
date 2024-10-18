### SdusdEntraLogin Component

This component is used to login to the SDUSD Entra system.  Requirements:

#### `MsalProvider` component 

You must wrap your main App component with the `MsalProvider` component like this:
```
<MsalProvider instance={getMsalInstance(application_id, directory_id)}>
    <App />
</MsalProvider>
```
* Import `getMsalConfig` from this component
* Import `MsalProvider` from `@azure/msal-react`

#### `SdusdEntraLogin` compnent

This component will display a login splash screen for your user to log in.

Properties:

```typescript
{
  showFamilyMemberSignin: //(optional, default false) Displays a family login button
  loginType, // (required, 'popup' | 'redirect')
  onSuccess, // (callback, optional) Called on a successful login
  onFailure // (callback, optional) Called on a failed login
}
```
