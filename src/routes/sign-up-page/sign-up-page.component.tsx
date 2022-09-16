import React from "react";

import { InputLabel } from "@mui/material";
import { Formik, Form } from "formik";
import TextFormField from "../../components/text-form-fiels/text-form-field.component";
import PassFormField from "../../components/pass-form-field/pass-form-field.component";
import SubmitButton from "../../components/button-form/button-form.component";
import Modal from "../../components/modal/modal.component";
import ModalHeader from "../../components/modal-header/modal-header";
import LogInContainer from "../../components/log-in-container/log-in-container.component";
import getInitialValues from "../../utils/initial-values/initial-values.utils";
import getValidation from "../../utils/validation/validation";

import "../../utils/styles/sign-form.scss";

const SignUpPage: React.FC = function LogInPage() {
  const INITIAL_FORM_STATE = getInitialValues(
    "email",
    "newpassword",
    "confirmPassword",
    "firstName",
    "lastName",
  );
  const FORM_VALIDATION = getValidation(
    "email",
    "newpassword",
    "confirmPassword",
    "firstName",
    "lastName",
  );

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader title="Sign Up" message="Create a new account" />
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form className="sign-form">
            <InputLabel htmlFor="email" sx={{ margin: "0 0 6px" }}>
              Email
            </InputLabel>
            <TextFormField
              name="email"
              placeholder="Email address"
              id="email"
            />

            <InputLabel htmlFor="firstName" sx={{ margin: "24px 0 6px" }}>
              First name
            </InputLabel>
            <TextFormField
              name="firstName"
              placeholder="First name"
              id="firstName"
            />

            <InputLabel htmlFor="lastName" sx={{ margin: "24px 0 6px" }}>
              LAST name
            </InputLabel>
            <TextFormField
              name="lastName"
              placeholder="Last name"
              id="lastName"
            />

            <InputLabel
              htmlFor="newpassword"
              sx={{
                margin: "24px 0 6px",
              }}
            >
              Password
            </InputLabel>
            <PassFormField name="newpassword" />

            <InputLabel
              htmlFor="confirmPassword"
              sx={{
                margin: "24px 0 6px",
              }}
            >
              confirm password
            </InputLabel>
            <PassFormField name="confirmPassword" />

            <SubmitButton
              text="Register"
              sx={{
                margin: "24px 0 0",
              }}
            />
          </Form>
        </Formik>
      </Modal>
    </LogInContainer>
  );
};

export default SignUpPage;
