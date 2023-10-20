import { IdentificationActionPayloads, IdentificationState, IdentificationStateActionTree, IdentificationStateType } from "./stores/IdentificationStore";
import { createContext, useReducer } from "react";
import { JobDescriptionDataType, JobDescriptionActionPayloads, JobDescriptionStateActionTree } from "./stores/JobDescriptionDataType";

export interface RootState {
  JobDescriptionData: JobDescriptionDataType;
  IdentificationStore: IdentificationStateType;
  documents: { [name: string]: any }
}

export const rootState: RootState = {
  JobDescriptionData:  {},
  IdentificationStore: IdentificationState,
  documents: { }
};

export const ModuleNames = {
  IdentificationState: 'IdentificationStore',
  JobDescriptionData: 'JobDescriptionData',
} as const

export type ActionPayloads = IdentificationActionPayloads | JobDescriptionActionPayloads;
export const ActionTree: {[key in keyof ActionPayloads]: any}  = { ...IdentificationStateActionTree, ...JobDescriptionStateActionTree };
function RootStoreReducer<
  ActionName extends keyof ActionPayloads,
  Payload extends ActionPayloads[ActionName]
  >(state: RootState, action: { stateId: keyof RootState, name: ActionName, payload: Payload }): RootState {
  console.log(`Handling dispatch with action ${JSON.stringify(action)}`);
  const newState = ActionTree[action.name](state[action.stateId], action.payload);
  return {...rootState, IdentificationStore: { ...newState }};
}

const RootContext = ({children}: any) => {
  const [state, dispatch] = useReducer(RootStoreReducer, rootState); 

  return (
    // @ts-ignore
   <Context.Provider value={[state, dispatch ]} >
      {children}
    </Context.Provider>
  );
}

// @ts-ignore no-unused-vars
export const Context = createContext(rootState);

export default RootContext;


