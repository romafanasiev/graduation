import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { InputLabel } from '@mui/material';
import { Formik, Form } from 'formik';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import getInitialValues from '../../initial-values/initial-values.utils';
import getValidation from '../../validation/validation';
import { UserDataType, ResetFormType } from '../../types/types';
import '../../styles/sign-form.scss';
import {
  Modal,
  LogInContainer,
  ModalHeader,
  AlertMessage,
  TextFormField,
  PassFormField,
  SubmitButton,
} from '../../components';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../firebase';

export const SignUpPage: FC = () => {
  const INITIAL_FORM_STATE = getInitialValues(
    'email',
    'newpassword',
    'confirmPassword',
    'firstName',
    'lastName',
  );
  const FORM_VALIDATION = getValidation(
    'email',
    'newpassword',
    'confirmPassword',
    'firstName',
    'lastName',
  );

  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(values: UserDataType, resetForm: ResetFormType) {
    const { email, newpassword, firstName, lastName } = values;

    try {
      const response = await createAuthUserWithEmailAndPassword(
        email,
        newpassword,
      );

      if (response) {
        await createUserDocumentFromAuth(response.user, {
          displayName: `${firstName} ${lastName}`,
        });

        resetForm();
        navigate('/');
      }
    } catch (error) {
      if ((error as AuthError).code === AuthErrorCodes.EMAIL_EXISTS) {
        setErrorMessage('Cannot create user, email already in use');
      } else {
        setErrorMessage('User creation encountered an error');
      }
    }
  }

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader title="Sign Up" message="Create a new account" />
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
            <InputLabel htmlFor="email" sx={{ margin: '0 0 6px' }}>
              Email
            </InputLabel>
            <TextFormField
              name="email"
              placeholder="Email address"
              id="email"
            />

            <InputLabel htmlFor="firstName" sx={{ margin: '24px 0 6px' }}>
              First name
            </InputLabel>
            <TextFormField
              name="firstName"
              placeholder="First name"
              id="firstName"
            />

            <InputLabel htmlFor="lastName" sx={{ margin: '24px 0 6px' }}>
              Last name
            </InputLabel>
            <TextFormField
              name="lastName"
              placeholder="Last name"
              id="lastName"
            />

            <InputLabel
              htmlFor="newpassword"
              sx={{
                margin: '24px 0 6px',
              }}
            >
              Password
            </InputLabel>
            <PassFormField name="newpassword" />

            <InputLabel
              htmlFor="confirmPassword"
              sx={{
                margin: '24px 0 6px',
              }}
            >
              confirm password
            </InputLabel>
            <PassFormField name="confirmPassword" />

            <SubmitButton
              text="Register"
              sx={{
                margin: '24px 0 0',
              }}
            />
          </Form>
        </Formik>
      </Modal>
    </LogInContainer>
  );
};
