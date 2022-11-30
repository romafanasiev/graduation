import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik, Form } from 'formik';
import { useAppDispatch } from '../../store/store';
import '../../styles/sign-form.scss';
import { setAvatar } from '../../store/user/user.reducer';
import {
  LogInContainer,
  ModalHeader,
  UploadField,
  SubmitButton,
  Modal,
} from '../../components';
import { uploadUserPhoto } from '../../firebase';

export const AddPhotoPage: FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <LogInContainer>
      <Modal>
        <ModalHeader
          title="Add your avatar image"
          message="Add file with your photo"
        />
        <Formik
          initialValues={{ file: '' }}
          onSubmit={async (values) => {
            const { file } = values;
            const link = await uploadUserPhoto(file as unknown as File);
            dispatch(setAvatar(link));
            navigate('/admin');
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <UploadField setFieldValue={setFieldValue} />
              <SubmitButton
                text="Upload"
                sx={{
                  margin: '24px 0 0',
                }}
              />
            </Form>
          )}
        </Formik>
      </Modal>
    </LogInContainer>
  );
};
