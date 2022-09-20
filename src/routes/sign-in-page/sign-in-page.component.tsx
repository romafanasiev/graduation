import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { AuthError, AuthErrorCodes } from "firebase/auth";
import { Box, InputLabel, Link } from "@mui/material";
import { Formik, Form } from "formik";
import { useAppDispatch } from "../../store/store";
import TextFormField from "../../components/text-form-fiels/text-form-field.component";
import PassFormField from "../../components/pass-form-field/pass-form-field.component";
import SubmitButton from "../../components/button-form/button-form.component";
import Modal from "../../components/modal/modal.component";
import ModalHeader from "../../components/modal-header/modal-header";
import LinkSignUp from "../../components/link-to-sign-up/link-to-sign-up.component";
import LogInContainer from "../../components/log-in-container/log-in-container.component";
import getInitialValues from "../../utils/initial-values/initial-values.utils";
import getValidation from "../../utils/validation/validation";

import { signIn } from "../../store/user/user.reducer";

import "../../utils/styles/sign-form.scss";
import { ResetFormType, UserDataType } from "../../utils/types/types";

import AlertMessage from "../../components/alert-message/alert-message.component";

const SignInPage: React.FC = function LogInPage() {
  const INITIAL_FORM_STATE = getInitialValues("email", "password");
  const FORM_VALIDATION = getValidation("email", "password");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function handleSubmit(values: UserDataType, resetForm: ResetFormType) {
    const { email, password } = values;
    try {
      if (email !== undefined && password !== undefined) {
        await dispatch(signIn({ email, password })).unwrap();
        navigate("/admin");
      }
      resetForm();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setErrorMessage("Incorrect password for email");
          break;
        case AuthErrorCodes.USER_DELETED:
          setErrorMessage("Incorrect email");
          break;
        default:
          setErrorMessage("Error occured");
      }
    }
  }

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader
          title="Log In to Dashboard Kit"
          message="Enter your email and password"
        />
        {errorMessage && <AlertMessage text={errorMessage} />}
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={async (values, { resetForm }) =>
            handleSubmit(values, resetForm)
          }
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
          <Link href="/forgot">Forgot password?</Link>
        </Box>
      </Modal>
    </LogInContainer>
  );
};

export default SignInPage;
