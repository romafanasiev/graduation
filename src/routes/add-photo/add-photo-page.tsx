import React from "react";
import { useNavigate } from "react-router-dom";

import { Formik, Form } from "formik";
import { useAppDispatch } from "../../store/store";
import SubmitButton from "../../components/button-form/button-form.component";
import Modal from "../../components/modal/modal.component";
import ModalHeader from "../../components/modal-header/modal-header";
import LogInContainer from "../../components/log-in-container/log-in-container.component";

import "../../utils/styles/sign-form.scss";

import UploadField from "../../components/upload-field/upload-field.component";
import { uploadUserPhoto } from "../../utils/firebase/firebase.utils";
import { setAvatar } from "../../store/user/user.reducer";

const AddPhotoPage: React.FC = function AddPhotoPage() {
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
          initialValues={{ file: "" }}
          onSubmit={async (values) => {
            const { file } = values;
            const link = await uploadUserPhoto(file as unknown as File);
            dispatch(setAvatar(link));
            navigate("/admin");
          }}
        >
          {({ setFieldValue }) => (
            <Form>
              <UploadField setFieldValue={setFieldValue} />
              <SubmitButton
                text="Upload"
                sx={{
                  margin: "24px 0 0",
                }}
              />
            </Form>
          )}
        </Formik>
      </Modal>
    </LogInContainer>
  );
};

export default AddPhotoPage;
