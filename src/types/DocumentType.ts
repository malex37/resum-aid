import { IdentificationStateType } from "@/states/stores/IdentificationStore";
import { Phone } from "./PhoneType";
import { JobDescriptionDataInterface } from "@/states/stores/JobDescriptionDataType";

export interface DocumentType {
  documentName: string;
  identificationData: IdentificationStateType;
  jobs: JobDescriptionDataInterface[];
  phones: Phone[];
}
