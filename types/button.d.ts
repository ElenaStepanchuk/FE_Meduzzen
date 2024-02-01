export interface IButton {
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  buttonWidth: string;
  borderRadius: string;
  buttonTop?: string;
  buttonLeft?: string;
  buttonBottom?: string;
  buttonRight?: string;
  children?: React.ReactNode;
  key?: string;
  id?: string;
}
