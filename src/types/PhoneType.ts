export enum PhoneIds {
  Cell = 'Cellphone',
  Home = 'Home',
  Other = 'Other'
}
export interface Phone {
  type: PhoneIds;
  value: string | number;
}