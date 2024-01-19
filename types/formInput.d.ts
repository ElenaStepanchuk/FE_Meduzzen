export interface IFormInput {
  handleInputChange?: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  label: string | number;
  name: string;
  inputWidth: string;
  type: string;
  pattern?: string;
  minLength?: InputHTMLAttributes<HTMLInputElement>;
  maxLength?: InputHTMLAttributes<HTMLInputElement>;
}
