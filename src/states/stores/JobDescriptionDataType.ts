export type JobDescriptionDataInterface = {
  uuid: string;
  title: string;
  employer: string;
  description: string;
  startDate: Date;
  endDate: Date;
}


export type JobDescriptionDataType = {
  [key: string]: JobDescriptionDataInterface;
}

export const JobDescriptionActionNames = {
  AddJobDescription: 'AddJobDescription'
} as const;


// Initial state
export let JobDescriptionState: JobDescriptionDataType = {};

export interface JobDescriptionActionPayloads {
  ['AddJobDescription']: JobDescriptionDataInterface;
}

export type ActionTreeType = {
  [Key in keyof JobDescriptionActionPayloads]: (state: JobDescriptionDataType, param: JobDescriptionDataInterface) => JobDescriptionDataType;
};

export const JobDescriptionStateActionTree: ActionTreeType = {
  [JobDescriptionActionNames.AddJobDescription]: (state: JobDescriptionDataType, jobDescription: JobDescriptionDataInterface) => {
    state[jobDescription.uuid] = jobDescription;
    return state;
  }
};
