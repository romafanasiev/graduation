import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { InputLabel, Typography } from '@mui/material';
import { Formik, Form } from 'formik';
import getInitialValues from '../../initial-values/initial-values.utils';
import getValidation from '../../validation/validation';
import '../../styles/sign-form.scss';
import { ResetFormType, UserDataType } from '../../types/types';
import {
  LogInContainer,
  ModalHeader,
  TextFormField,
  SubmitButton,
  LinkSignUp,
  AlertMessage,
  Modal,
} from '../../components';
import { resetUserPassword } from '../../firebase';

export const ForgotPassPage: FC = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [resetPassStatus, setResetPassStatus] = useState(false);
  const INITIAL_FORM_STATE = getInitialValues('email');
  const FORM_VALIDATION = getValidation('email');
  const navigate = useNavigate();

  async function handleSubmit(values: UserDataType, resetForm: ResetFormType) {
    const { email } = values;
    try {
      await resetUserPassword(email);
      resetForm();
      setErrorMessage('');
      setResetPassStatus(true);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    } catch (error) {
      console.log(error);
      if ((error as AuthError).code === AuthErrorCodes.USER_DELETED) {
        setErrorMessage('Cannot change password, email not found');
      } else {
        setErrorMessage('User creation encountered an error');
      }
    }
  }

  return (
    <LogInContainer>
      <Modal>
        {!resetPassStatus ? (
          <>
            <ModalHeader
              title="Forgot password?"
              message="Enter your email from registered account"
            />
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
                <InputLabel htmlFor="email" sx={{ margin: '0 0 6px' }}>
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
                    margin: '24px 0 32px',
                  }}
                />
              </Form>
            </Formik>
            <LinkSignUp />
          </>
        ) : (
          <>
            <ModalHeader title="Forgot password?" />
            <Typography sx={{ textAlign: 'center', margin: '12px 0 0' }}>
              Link to change your password has been sent to provided email if we
              have it inside our system
            </Typography>
          </>
        )}
        {errorMessage && <AlertMessage text={errorMessage} />}
      </Modal>
    </LogInContainer>
  );
};
