import React, { useState, FC } from 'react';
import { Formik, Form } from 'formik';
import { InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import getInitialValues from '../../initial-values/initial-values.utils';
import getValidation from '../../validation/validation';
import '../../styles/sign-form.scss';
import { UserDataType } from '../../types/types';
import {
  Modal,
  LogInContainer,
  ModalHeader,
  AlertMessage,
  PassFormField,
  SubmitButton,
} from '../../components';
import { changeUserPassword } from '../../firebase';

export const ResetPassPage: FC = () => {
  const INITIAL_FORM_STATE = getInitialValues('newpassword', 'confirmPassword');
  const FORM_VALIDATION = getValidation('newpassword', 'confirmPassword');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  async function handleResetPassword(values: UserDataType) {
    const { newpassword } = values;
    const response = await changeUserPassword(newpassword);
    if (response?.message) {
      setErrorMessage('Error occured');
    } else {
      navigate('/admin');
    }
  }

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader title="Reset Password" message="Enter new password" />
        {errorMessage && <AlertMessage text={errorMessage} />}
        <Formik
          initialValues={{
            ...INITIAL_FORM_STATE,
          }}
          validationSchema={FORM_VALIDATION}
          onSubmit={async (values) => handleResetPassword(values)}
        >
          <Form className="sign-form">
            <InputLabel
              htmlFor="newpassword"
              sx={{
                margin: '24px 0 6px',
              }}
            >
              new password
            </InputLabel>
            <PassFormField name="newpassword" id="newpassword" />
            <InputLabel
              htmlFor="confirmPassword"
              sx={{
                margin: '24px 0 6px',
              }}
            >
              confirm new password
            </InputLabel>
            <PassFormField name="confirmPassword" id="confirmPassword" />
            <SubmitButton
              text="Reset password"
              sx={{
                margin: '24px 0 32px',
              }}
            />
          </Form>
        </Formik>
      </Modal>
    </LogInContainer>
  );
};
