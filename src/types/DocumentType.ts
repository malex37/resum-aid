import { IdentificationDataType } from "./IdentificationDataType";
import { JobDescriptionDataType } from "./JobDescriptionDataType";
import { Phone } from "./PhoneType";

export class DocumentType {
  documentName?: string;
  identificationData: IdentificationDataType;
  jobs: JobDescriptionDataType[];
  phones: Phone[];
  constructor(){
    this.documentName = undefined;
    this.identificationData = {};
    this.jobs = [];
    this.phones = [];
  }
  setDocumentName = (newName: string) => { this.documentName = newName};
  setIdentificationData = (newData: IdentificationDataType) => { this.identificationData = newData};
  setJobs = (newJob: JobDescriptionDataType) => { this.jobs?.push(newJob)};
  setPhones = (newPhone: Phone) => {this.phones?.push(newPhone)};
}