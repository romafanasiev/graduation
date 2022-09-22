/* eslint-disable @typescript-eslint/naming-convention */
export enum MESSAGES_ACTION_TYPES {
  FETCH_MESSAGES_START = "messages/FETCH_MESSAGES_START",
  FETCH_MESSAGES_SUCCESS = "messages/FETCH_MESSAGES_SUCCESS",
  FETCH_MESSAGES_FAILED = "messages/FETCH_MESSAGES_FAILED",
}

export type CategoryItem = {
  avatar: string;
  email: string;
  id: number;
  name: string;
};

export type Category = {
  title: string;
  items: CategoryItem[];
};
