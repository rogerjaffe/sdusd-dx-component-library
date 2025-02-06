import React from "react";
import { useMsal } from "@azure/msal-react";
import happyStudents from "./happy-students.jpg";
import aiLogo from "./ai-logo.png";
import "./SdusdEntraLogin.css";
import { loginRequest } from "../../common";
import sdusdLogo from "./sdusd-logo.png";

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
    <div className="row ai-login-container">
      <div className="my-auto col-lg-4 offset-lg-4 col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 valign">
        <div className="card" style={{ margin: "20px" }}>
          <div className="card-header text-center">
            <div className="mt-3">
              <img src={sdusdLogo} className="logo me-3 mb-3"/>
              <span className="ai-title">
                Action Insights
              </span>
            </div>
          </div>
          <div className="card-body">
            <div className="login-button-container">
              <button className="btn btn-primary mb-4" onClick={handleLogin}>
                Sign in as Staff
              </button>
              <button className="btn btn-primary mb-4" onClick={handleLogin}>
                Sign in as Student
              </button>
                  <button
                    className="btn btn-primary"
                    disabled={showFamilyMemberSignin}
                    onClick={() => alert("Family login clicked")}
                  >
                    Sign in as Family Member
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdusdEntraLogin;
