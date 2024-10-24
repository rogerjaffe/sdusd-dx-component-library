import React from "react";
import Button from "devextreme-react/button";
import ResponsiveBox, {
  Row,
  Col,
  Item,
  Location,
} from "devextreme-react/responsive-box";
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
    <ResponsiveBox>
      <Row />
      <Col />
      <Col />

      <Item>
        <Location row={0} col={0} />
        <img src={happyStudents} />
      </Item>
      <Item>
        <Location row={0} col={1} />
        <ResponsiveBox>
          <Row></Row>
          <Row></Row>
          <Row></Row>
          <Col ratio={0.5}></Col>
          <Col ratio={2}></Col>
          <Col ratio={0.5}></Col>
          <Item>
            <Location row={1} col={1} />
            <div className="format-image">
              <img src={aiLogo} style={{ width: "200px" }} />
            </div>
            <Button
              text="Staff / Student signin"
              type="default"
              onClick={handleLogin}
            />
            {showFamilyMemberSignin && (
              <Button
                text="Family member signin"
                type="default"
                onClick={() => alert("Family login clicked")}
              />
            )}
          </Item>
        </ResponsiveBox>
      </Item>
    </ResponsiveBox>
  );
};

export default SdusdEntraLogin;
