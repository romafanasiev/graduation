import { UserDataType } from '../types/types';

function getInitialValues(...args: string[]) {
  const initialValues: UserDataType = {};

  args.forEach((value) => {
    initialValues[value as keyof typeof initialValues] = '';
  });

  return initialValues;
}

export default getInitialValues;
