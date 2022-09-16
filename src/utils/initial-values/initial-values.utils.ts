interface InitialValuesType {
  email?: string;
  password?: string;
  newpassword?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
}

function getInitialValues(...args: string[]) {
  const initialValues: InitialValuesType = {};

  args.forEach((value) => {
    initialValues[value as keyof typeof initialValues] = "";
  });

  return initialValues;
}

export default getInitialValues;
