```
import React from 'react';

interface ButtonProps {
    label: string;
}
declare const Button: (props: ButtonProps) => React.JSX.Element;

interface SdusdEntraLogoutProps {
    logoutType: "popup" | "redirect";
    logoutRedirectUri?: string;
}
declare const SdusdEntraLogout: (props: SdusdEntraLogoutProps) => React.JSX.Element;

interface SdusdEntraLoginProps {
    showFamilyMemberSignin?: boolean;
    loginType: "popup" | "redirect";
    onSuccess?: (auth: any) => void;
    onFailure?: (err: any) => void;
}
declare const SdusdEntraLogin: (props: SdusdEntraLoginProps) => React.JSX.Element;

declare const SdusdEntraProvider: ({ application_id, directory_id, children, }: {
    application_id: string;
    directory_id: string;
    children: any;
}) => React.JSX.Element;

export { Button, SdusdEntraLogin, SdusdEntraLogout, SdusdEntraProvider };
```
