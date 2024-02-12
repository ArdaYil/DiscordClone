import { Link } from "react-router-dom";
import Form from "../components/form/Form";
import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import PasswordInput from "../components/form/PasswordInput";
import { useEffect, useRef } from "react";
import Button from "../components/form/Button";

const Login = () => {
  const handleLogin = () => {};

  return (
    <div className="login-wrapper">
      <div className="form-container">
        <Form className="login-form" onSubmit={handleLogin}>
          <h1 className="form-heading">Welcome back!</h1>
          <h2 className="form-subheading">
            We're so excited to see you again!
          </h2>
          <InputGroup>
            <Input title="Email or phone number" />
            <div>
              <PasswordInput />
              <Link className="login-link" to="#">
                Forgot password?
              </Link>
            </div>
            <div>
              <Button onClick={handleLogin} className="login-btn" type="submit">
                Log in
              </Button>
              <footer className="login-form-register">
                <p className="register-text">Need an account?</p>
                <Link className="register-link" to="/register">
                  Register
                </Link>
              </footer>
            </div>
          </InputGroup>
        </Form>
        <div className="qr-container">
          <img className="qr-code" src="src/assets/qr/website-qr.png" />
          <h1 className="qr-heading">Log in with QR-code</h1>
          <p className="qr-text">
            Scan with Discords mobileapp to log in right away.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
