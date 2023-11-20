export interface IForm {
  formMargin: string;
  formWidth: string;
  children?: React.ReactNode;
  submitForm: React.FormEventHandler<HTMLFormElement> | undefined;
}
