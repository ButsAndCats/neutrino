export interface IData {
  token: string;
}

declare global {
  interface Window {
    electron: any;
    data: IData;
  }
}
