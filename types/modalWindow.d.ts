export interface IModalWindow {
  closeModal: (e: React.MouseEvent) => void;
  modalWidth?: string;
  textAlign?: "start" | "end" | "left" | "right" | "center";
  children?: React.ReactNode;
}
