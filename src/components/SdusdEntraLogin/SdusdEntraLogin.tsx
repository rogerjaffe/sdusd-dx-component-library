import React from "react";
import { useMsal } from "@azure/msal-react";
import happyStudents from "./happy-students.jpg";
import aiLogo from "./ai-logo.png";
import "./SdusdEntraLogin.css";
import { loginRequest } from "../../common";

export interface SdusdEntraLoginProps {
  showFamilyMemberSignin?: boolean;
  loginType: "popup" | "redirect";
  onSuccess?: (auth: any) => void;
  onFailure?: (err: any) => void;
}

export const SdusdEntraLogin = (props: SdusdEntraLoginProps) => {
  const {
    showFamilyMemberSignin = false,
    loginType,
    onSuccess = null,
    onFailure = null,
  } = props;
  const { instance } = useMsal();
  const handleLogin = () => {
    if (loginType === "popup") {
      instance
        .loginPopup(loginRequest)
        .then(async (auth) => {
          // const user = await callMsGraph(auth.accessToken);
          onSuccess && onSuccess(auth);
        })
        .catch((e) => {
          onFailure && onFailure(e);
          console.log(e);
        });
    } else if (loginType === "redirect") {
      instance
        .loginRedirect(loginRequest)
        .then(async (auth) => {
          onSuccess && onSuccess(auth);
        })
        .catch((e) => {
          onFailure && onFailure(e);
          console.log(e);
        });
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-md-6 col-lg-4 offset-lg-2 d-none d-md-block">
            <img src={happyStudents} className="happy-students-image" />
          </div>
          <div className="col-md-4 offset-md-1 col-lg-4 valign">
            <div className="format-image">
              <img src={aiLogo} style={{ width: "200px" }} />
            </div>
            <div className="login-button-container">
              <div className="login-button">
                <div className="btn btn-primary" onClick={handleLogin}>
                  Staff / Student signin
                </div>
              </div>
              {showFamilyMemberSignin ? (
                <div className="login-button">
                  <div
                    className="btn btn-primary"
                    onClick={() => alert("Family login clicked")}
                  >
                    Family member signin
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdusdEntraLogin;
