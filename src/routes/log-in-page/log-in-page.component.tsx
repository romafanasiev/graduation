import React from "react";

import { Container, Box, Typography } from "@mui/material";
import { Formik, Field, Form } from "formik";
// import { Form } from "formik";
import Logo from "../../components/logo/logo.component";

import LogInstyles from "./log-in-page.styles";

interface LogInFormTypes {
  email: string;
  password: string;
}

const LogInPage: React.FC = function LogInPage() {
  const initialValues: LogInFormTypes = { email: "", password: "" };

  return (
    <Container sx={LogInstyles.container} maxWidth={false}>
      <Box sx={LogInstyles.box}>
        <Logo />
        <Typography variant="body1" sx={LogInstyles.subtitle}>
          Dashboard Kit
        </Typography>
        <Typography variant="h2">Log In to Dashboard Kit</Typography>
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <label htmlFor="email">Email</label>
            <Field id="email" name="email" placeholder="email" />
            <label htmlFor="password">Password</label>
            <Field id="password" name="password" placeholder="password" />
            <button type="submit">Submit</button>
          </Form>
        </Formik>
      </Box>
    </Container>
  );
};

export default LogInPage;
