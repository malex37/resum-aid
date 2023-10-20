import { Phone, PhoneIds } from "@/types/PhoneType";

export const IdentificationActionNames = {
  SetName: 'SetName',
  SetEmail: 'SetEmail',
  SetPhoneNumber: 'SetPhoneNumber',
} as const;


export type IdentificationStateType = {
  name?: string;
  phoneNumber: Phone;
  email?: string;
};

// Initial state
export let IdentificationState: IdentificationStateType = {
  name: '',
  phoneNumber: {
    value: '',
    type: PhoneIds.None,
  },
  email: '',
};

export interface SetNamePayload {
  name: string;
}

export interface SetEmailPayload {
  email: string;
}

export interface SetPhoneNumberPayload {
  phone: Phone,
}

export interface IdentificationActionPayloads {
  [IdentificationActionNames.SetName]: SetNamePayload,
  [IdentificationActionNames.SetEmail]: SetEmailPayload,
  [IdentificationActionNames.SetPhoneNumber]: SetPhoneNumberPayload
}

export type ActionTreeType = {
  [Key in keyof IdentificationActionPayloads]: (state: IdentificationStateType, param: IdentificationActionPayloads[Key]) => IdentificationStateType ;
};

export const IdentificationStateActionTree: ActionTreeType = {
  [IdentificationActionNames.SetName]: (state: IdentificationStateType, payload: SetNamePayload) => {
    state.name = payload.name;
    return {...state, name: payload.name};
  },
  [IdentificationActionNames.SetEmail]: (state, payload: SetEmailPayload) => {
    state.email = payload.email;
    return state;
  },
  [IdentificationActionNames.SetPhoneNumber]: (state, payload: SetPhoneNumberPayload) => {
    state.phoneNumber.value = payload.phone.value;
    state.phoneNumber.type = payload.phone.type;
    return state;
  }
};
