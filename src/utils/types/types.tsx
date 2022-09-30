import { FormikState } from "formik";

export interface UserDataType {
  email?: string;
  password?: string;
  newpassword?: string;
  confirmPassword?: string;
  firstName?: string;
  lastName?: string;
}

export interface ResetFormType {
  (
    nextState?:
      | Partial<
          FormikState<{
            email?: string | undefined;
            password?: string | undefined;
            newpassword?: string | undefined;
            confirmPassword?: string | undefined;
            firstName?: string | undefined;
            lastName?: string | undefined;
          }>
        >
      | undefined,
  ): void;
  (): void;
}

export interface FilterDataType {
  title: string;
  data: string;
}
