/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { Dialog, DialogContent, InputLabel } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import globalStyles from "../../utils/styles/style-vars";
import TextFormField from "../text-form-field/text-form-field.component";
import SubmitButton from "../button-form/button-form.component";
import getValidation from "../../utils/validation/validation";
import SelectField from "../select-field/select-field.component";
import DateField from "../date-field/date-field.component";
import { addMessage } from "../../utils/firebase/firebase.utils";
import { Category, CategoryItem } from "../../store/messages/messages.types";
import { RootState } from "../../store/store";
import { getMessagesFetch } from "../../store/messages/messages.reducer";

export default function PopUp() {
  const [messages, setMessages] = useState<CategoryItem[]>([]);
  const [open, setOpen] = React.useState(false);
  const data = useSelector((state: RootState) => state.messages.messages);
  const dispatch = useDispatch();
  const INITIAL_FORM_STATE = {
    id: Number(messages.length) + 1,
    name: "",
    email: "",
    avatar: `https://robohash.org/${Number(messages.length) + 1}`,
    priority: "",
    message: "",
    address: "",
    date: "",
    registration: `${new Date().toLocaleDateString()}`,
  };
  const FORM_VALIDATION = getValidation(
    "name",
    "email",
    "avatar",
    "message",
    "priority",
    "address",
    "date",
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (data.length > 0) {
      const messagesObj: Category = data[0];
      setMessages(messagesObj.items);
    }
  }, [data]);

  return (
    <div>
      <Button
        onClick={handleOpen}
        sx={{
          backgroundColor: globalStyles.vars.whiteColor,
          color: globalStyles.vars.buttonColor,
          "&:hover": {
            transform: "scale(1.05)",
          },
        }}
      >
        + Add message
      </Button>
      <Dialog open={open} onClose={handleClose} disableScrollLock>
        <DialogContent>
          <Typography variant="h2" align="center">
            Add message
          </Typography>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            onSubmit={async (values) => {
              addMessage(values).then(() => {
                dispatch(getMessagesFetch());
                handleClose();
              });
            }}
          >
            {({ setFieldValue }) => (
              <Form className="sign-form">
                <InputLabel htmlFor="name" sx={{ margin: "0 0 6px" }}>
                  Name
                </InputLabel>
                <TextFormField name="name" placeholder="User name" id="name" />
                <InputLabel htmlFor="email" sx={{ margin: "0 0 6px" }}>
                  Email
                </InputLabel>
                <TextFormField
                  name="email"
                  placeholder="User email"
                  id="email"
                />
                <InputLabel htmlFor="priority" sx={{ margin: "0 0 6px" }}>
                  Priority
                </InputLabel>
                <SelectField
                  name="priority"
                  options={["high", "low", "normal"]}
                />
                <InputLabel htmlFor="message" sx={{ margin: "0 0 6px" }}>
                  Message
                </InputLabel>
                <TextFormField
                  name="message"
                  placeholder="Message"
                  id="message"
                />
                <InputLabel htmlFor="address" sx={{ margin: "0 0 6px" }}>
                  Address
                </InputLabel>
                <TextFormField
                  name="address"
                  placeholder="Address"
                  id="address"
                />
                <DateField setFieldValue={setFieldValue} />
                <SubmitButton
                  text="Log in"
                  sx={{
                    margin: "24px 0 0",
                  }}
                />
                <Button
                  fullWidth
                  onClick={handleClose}
                  sx={{
                    backgroundColor: globalStyles.vars.whiteColor,
                    color: globalStyles.vars.buttonColor,
                  }}
                >
                  Cancel
                </Button>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
