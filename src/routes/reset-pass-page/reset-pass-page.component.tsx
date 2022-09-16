import React from "react";

import { Formik, Form } from "formik";
import { InputLabel } from "@mui/material";
import Modal from "../../components/modal/modal.component";
import ModalHeader from "../../components/modal-header/modal-header";
import LinkSignUp from "../../components/link-to-sign-up/link-to-sign-up.component";
import LogInContainer from "../../components/log-in-container/log-in-container.component";
import getInitialValues from "../../utils/initial-values/initial-values.utils";
import getValidation from "../../utils/validation/validation";

import PassFormField from "../../components/pass-form-field/pass-form-field.component";
import SubmitButton from "../../components/button-form/button-form.component";

import "../../utils/styles/sign-form.scss";

const ResetPassPage: React.FC = function ResetPassPage() {
  const INITIAL_FORM_STATE = getInitialValues("newpassword", "confirmPassword");
  const FORM_VALIDATION = getValidation("newpassword", "confirmPassword");

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader title="Reset Password" message="Enter new password" />
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
            <InputLabel
              htmlFor="newpassword"
              sx={{
                margin: "24px 0 6px",
              }}
            >
              new password
            </InputLabel>
            <PassFormField name="newpassword" id="newpassword" />
            <InputLabel
              htmlFor="confirmPassword"
              sx={{
                margin: "24px 0 6px",
              }}
            >
              confirm new password
            </InputLabel>
            <PassFormField name="confirmPassword" id="confirmPassword" />
            <SubmitButton
              text="Log in"
              sx={{
                margin: "24px 0 32px",
              }}
            />
          </Form>
        </Formik>
        <LinkSignUp />
      </Modal>
    </LogInContainer>
  );
};

export default ResetPassPage;
