import React, { useState, FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthError, AuthErrorCodes } from 'firebase/auth';
import { Box, InputLabel, Link } from '@mui/material';
import { Formik, Form } from 'formik';
import { useAppDispatch } from '../../store/store';
import getInitialValues from '../../initial-values/initial-values.utils';
import getValidation from '../../validation/validation';
import { signIn } from '../../store/user/user.reducer';
import '../../styles/sign-form.scss';
import { ResetFormType, UserDataType } from '../../types/types';
import {
  AlertMessage,
  LogInContainer,
  ModalHeader,
  TextFormField,
  PassFormField,
  SubmitButton,
  LinkSignUp,
  Modal,
} from '../../components';

export const SignInPage: FC = () => {
  const INITIAL_FORM_STATE = getInitialValues('email', 'password');
  const FORM_VALIDATION = getValidation('email', 'password');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  async function handleSubmit(values: UserDataType, resetForm: ResetFormType) {
    const { email, password } = values;
    try {
      if (email !== undefined && password !== undefined) {
        await dispatch(signIn({ email, password })).unwrap();
        navigate('/admin');
      }
      resetForm();
    } catch (error) {
      switch ((error as AuthError).code) {
        case AuthErrorCodes.INVALID_PASSWORD:
          setErrorMessage('Incorrect password for email');
          break;
        case AuthErrorCodes.USER_DELETED:
          setErrorMessage('Incorrect email');
          break;
        default:
          setErrorMessage('Error occured');
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
            <InputLabel htmlFor="email" sx={{ margin: '0 0 6px' }}>
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
                margin: '24px 0 6px',
              }}
            >
              Password
            </InputLabel>
            <PassFormField name="password" />
            <SubmitButton
              text="Log in"
              sx={{
                margin: '24px 0 0',
              }}
            />
          </Form>
        </Formik>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '10px',

            margin: '32px 0 0 0',
          }}
        >
          <LinkSignUp />
          <Link href="/forgot">Forgot password?</Link>
        </Box>
      </Modal>
    </LogInContainer>
  );
};
