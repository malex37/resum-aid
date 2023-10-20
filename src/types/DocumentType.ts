import { IdentificationStateType } from "@/states/stores/IdentificationStore";
import { Phone } from "./PhoneType";
import { JobDescriptionDataType } from "@/states/stores/JobDescriptionDataType";

export interface DocumentType {
  documentName: string;
  identificationData: IdentificationStateType;
  jobs: JobDescriptionDataType[];
  phones: Phone[];
}
