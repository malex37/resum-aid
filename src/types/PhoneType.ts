export const PhoneIds = {
  Cell: 'Cellphone',
  Home: 'Home',
  Other: 'Other',
  None: 'None'
} as const;

export interface Phone {
  type: keyof typeof PhoneIds;
  value: string | number;
}
