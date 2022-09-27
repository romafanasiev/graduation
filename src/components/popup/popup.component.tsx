import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Form, Formik } from "formik";
import { Dialog, DialogContent, InputLabel } from "@mui/material";
import globalStyles from "../../utils/styles/style-vars";
import TextFormField from "../text-form-field/text-form-field.component";
import SubmitButton from "../button-form/button-form.component";
import getInitialValues from "../../utils/initial-values/initial-values.utils";
import getValidation from "../../utils/validation/validation";
import SelectField from "../select-field/select-field.component";

export default function PopUp() {
  const INITIAL_FORM_STATE = getInitialValues(
    "name",
    "email",
    "avatar",
    "priority",
    "message",
    "address",
    "date",
  );
  const FORM_VALIDATION = getValidation(
    "name",
    "email",
    "avatar",
    "message",
    "address",
    "date",
  );
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Typography variant="h2" align="center">
            Add message
          </Typography>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={FORM_VALIDATION}
            // onSubmit={async (values, { resetForm }) =>
            //   handleSubmit(values, resetForm)
            // }
            onSubmit={(values) => console.log(values)}
          >
            <Form className="sign-form">
              <InputLabel htmlFor="name" sx={{ margin: "0 0 6px" }}>
                Name
              </InputLabel>
              <TextFormField name="name" placeholder="User name" id="name" />
              <InputLabel htmlFor="email" sx={{ margin: "0 0 6px" }}>
                Email
              </InputLabel>
              <TextFormField name="email" placeholder="User email" id="email" />
              <InputLabel htmlFor="avatar" sx={{ margin: "0 0 6px" }}>
                User avatar url
              </InputLabel>
              <TextFormField
                name="avatar"
                placeholder="User avatar url"
                id="avatar"
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
              <InputLabel htmlFor="date" sx={{ margin: "0 0 6px" }}>
                Date
              </InputLabel>
              <TextFormField name="date" placeholder="Date" id="date" />
              <SubmitButton
                text="Log in"
                sx={{
                  margin: "24px 0 0",
                }}
              />
            </Form>
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
}
