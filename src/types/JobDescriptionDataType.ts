export interface JobDescription {
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

export interface JobDescriptionDataType {
  [key: string]: JobDescription;
}