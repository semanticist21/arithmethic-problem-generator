import { Dispatch, SetStateAction } from "react";

export type OptionProps<T> = {
  title: string;
  description: string;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
  disabled?: boolean;
};
