export interface IFormInput {
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string | number;
  name: string;
  inputWidth: string;
  type: string;
}
