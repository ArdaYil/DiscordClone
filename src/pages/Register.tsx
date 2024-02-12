import { Link } from "react-router-dom";
import Form, { FormChangeEvent } from "../components/form/Form";
import Input from "../components/form/Input";
import InputGroup from "../components/form/InputGroup";
import PasswordInput from "../components/form/PasswordInput";
import Button from "../components/form/Button";
import DateSelector from "../components/common/DateSelector";
import Checkbox from "../components/form/Checkbox";
import useRegisterFormStore from "../stores/registerFormStore";
import { useState } from "react";
import RegisterSchema from "../validation/registerValidation";
import _ from "lodash";
import { z } from "zod";
import parseZodErrors from "../services/parseZodErrors";

type Errors = z.infer<typeof RegisterSchema>;

const Register = () => {
  const registerStore = useRegisterFormStore();
  const [errors, setErrors] = useState<Errors>({} as Errors);

  const handleRegister = () => {
    const result = RegisterSchema.safeParse(
      _.pick(registerStore, [
        "email",
        "username",
        "password",
        "birthdate",
        "termsOfService",
      ])
    );

    if (!result.success) {
      const formErrors = parseZodErrors<Errors>(result.error);

      setErrors(formErrors as Errors);
    } else {
      setErrors({} as Errors);
    }
  };

  const handleInputChange = (e: FormChangeEvent) => {
    const { name, value, type, checked } = e.target;

    const fieldValue = type === "checkbox" ? checked : value;
    const methodName = `set${name}`;
    console.log(fieldValue);
    (registerStore as any)[methodName](fieldValue);
  };

  return (
    <div className="login-wrapper">
      <div className="form-container-register">
        <Form className="login-form" onSubmit={handleRegister}>
          <h1 className="form-heading register-heading">Create an account</h1>
          <InputGroup>
            <Input
              onChange={handleInputChange}
              className="register"
              title="Email"
              name="Email"
              error={errors?.email}
            />
            <Input
              onChange={handleInputChange}
              className="register"
              title="Display name"
              required={false}
              name="DisplayName"
            />
            <Input
              onChange={handleInputChange}
              className="register"
              title="Username"
              name="Username"
              error={errors?.username}
            />
            <PasswordInput
              onChange={handleInputChange}
              className="register"
              name="Password"
              error={errors?.password}
            />
            <DateSelector
              title="Birthdate"
              className="register-birthdate"
              error={errors.birthdate}
              onChange={handleInputChange}
              name="Birthdate"
            />
            <Checkbox
              onChange={handleInputChange}
              className="newsletter"
              id="lewsletter"
              name="Newsletter"
            >
              (Optional) It is okay to send mails with Discord-updates, tips and
              special deals to me. You can opt out anytime
            </Checkbox>
            <Button
              toolTip="You have to approve our terms of use to continue"
              onClick={handleRegister}
              className="login-btn"
              type="submit"
              enabled={registerStore.termsOfService}
            >
              Continue
            </Button>
            <Checkbox
              onChange={handleInputChange}
              className="terms-of-use"
              id="terms-of-use"
              name="TermsOfService"
            >
              <span className="checkbox-clickable">
                I have read and approve Discords
              </span>{" "}
              <Link to="#">terms of use</Link>{" "}
              <span className="checkbox-clickable">and</span>{" "}
              <Link to="#">privacy policy</Link>.
            </Checkbox>
            <Link className="login-link" to="/login">
              Already have an account?
            </Link>
          </InputGroup>
        </Form>
      </div>
    </div>
  );
};

export default Register;
