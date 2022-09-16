import React from "react";

import { Box, InputLabel, Link } from "@mui/material";
import { Formik, Form } from "formik";
import TextFormField from "../../components/text-form-fiels/text-form-field.component";
import PassFormField from "../../components/pass-form-field/pass-form-field.component";
import SubmitButton from "../../components/button-form/button-form.component";
import Modal from "../../components/modal/modal.component";
import ModalHeader from "../../components/modal-header/modal-header";
import LinkSignUp from "../../components/link-to-sign-up/link-to-sign-up.component";
import LogInContainer from "../../components/log-in-container/log-in-container.component";
import getInitialValues from "../../utils/initial-values/initial-values.utils";
import getValidation from "../../utils/validation/validation";

import "../../utils/styles/sign-form.scss";

const SignInPage: React.FC = function LogInPage() {
  const INITIAL_FORM_STATE = getInitialValues("email", "password");
  const FORM_VALIDATION = getValidation("email", "password");

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader
          title="Log In to Dashboard Kit"
          message="Enter your email and password"
        />
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
            <InputLabel
              htmlFor="password"
              sx={{
                margin: "24px 0 6px",
              }}
            >
              Password
            </InputLabel>
            <PassFormField name="password" />
            <SubmitButton
              text="Log in"
              sx={{
                margin: "24px 0 0",
              }}
            />
          </Form>
        </Formik>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",

            margin: "32px 0 0 0",
          }}
        >
          <LinkSignUp />
          <Link href="/forgot_pass">Forgot password?</Link>
          <Link href="/reset_pass">Reset password?</Link>
        </Box>
      </Modal>
    </LogInContainer>
  );
};

export default SignInPage;
