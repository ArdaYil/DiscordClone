import { Link } from "react-router-dom";
import Form, { FormChangeEvent } from "../components/form/Form";
import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import PasswordInput from "../components/form/PasswordInput";
import { useState } from "react";
import Button from "../components/form/Button";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: FormChangeEvent) => setEmail(e.target.value);
  const handlePasswordChange = (e: FormChangeEvent) =>
    setPassword(e.target.value);

  const handleLogin = () => {
    console.log("Email: " + email);
    console.log("Password " + password);
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-form-container login-container">
        <Form className="auth-form" onSubmit={handleLogin}>
          <h1 className="auth-heading">Welcome back!</h1>
          <h2 className="auth-subheading">
            We're so excited to see you again!
          </h2>
          <InputGroup>
            <Input
              name="email"
              onChange={handleEmailChange}
              title="Email or phone number"
            />
            <div>
              <PasswordInput name="password" onChange={handlePasswordChange} />
              <Link className="login-link" to="#">
                Forgot password?
              </Link>
            </div>
            <div>
              <Button className="submit-btn" type="submit">
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
