/* eslint-disable @typescript-eslint/naming-convention */
export enum MESSAGES_ACTION_TYPES {
  FETCH_MESSAGES_START = 'messages/FETCH_MESSAGES_START',
  FETCH_MESSAGES_SUCCESS = 'messages/FETCH_MESSAGES_SUCCESS',
  FETCH_MESSAGES_FAILED = 'messages/FETCH_MESSAGES_FAILED',
}

export enum MESSAGES_DATA_TYPES {
  id = 'id',
  name = 'name',
  email = 'email',
  avatar = 'avatar',
  priority = 'priority',
  message = 'message',
  address = 'address',
  date = 'date',
  registration = 'registration',
}

export type CategoryItem = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  priority: string;
  message: string;
  address: string;
  date: string;
  registration: string;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};
