import * as yup from "yup";

function getValidation(...args) {
  const validationTypes = {
    password: yup
      .string()
      .required("Required password")
      .min(6, "Must be minimum 6 characters length"),
    firstName: yup.string().required("Required first name"),
    lastName: yup.string().required("Required last name"),
    email: yup.string().email("Invalid email").required("Required email"),
    newpassword: yup
      .string()
      .required("Password is required")
      .min(6, "Must be minimum 6 characters length"),
    confirmPassword: yup
      .string()
      .required("Password is required")
      .oneOf([yup.ref("newpassword"), null], "Passwords must match"),
  };

  const selectedTypes = {};

  args.forEach((type) => {
    selectedTypes[type] = validationTypes[type];
  });

  const validation = yup.object().shape(selectedTypes);

  return validation;
}

export default getValidation;
