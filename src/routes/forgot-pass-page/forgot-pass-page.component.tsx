import React from "react";

import { InputLabel, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import TextFormField from "../../components/text-form-fiels/text-form-field.component";
import SubmitButton from "../../components/button-form/button-form.component";
import Modal from "../../components/modal/modal.component";
import ModalHeader from "../../components/modal-header/modal-header";
import LinkSignUp from "../../components/link-to-sign-up/link-to-sign-up.component";
import LogInContainer from "../../components/log-in-container/log-in-container.component";
import getInitialValues from "../../utils/initial-values/initial-values.utils";
import getValidation from "../../utils/validation/validation";

import "../../utils/styles/sign-form.scss";

const ForgotPassPage: React.FC = function ForgotPassPage() {
  const INITIAL_FORM_STATE = getInitialValues("email");
  const FORM_VALIDATION = getValidation("email");

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader
          title="Forgot password?"
          message="Enter your email from registered account"
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

            <SubmitButton
              text="Send"
              sx={{
                margin: "24px 0 32px",
              }}
            />
          </Form>
        </Formik>
        <LinkSignUp />
        <Typography sx={{ textAlign: "center", margin: "12px 0 0" }}>
          Link to change your password has been sent to provided email if we
          have it inside our system
        </Typography>
      </Modal>
    </LogInContainer>
  );
};

export default ForgotPassPage;
