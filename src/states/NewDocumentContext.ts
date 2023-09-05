import { DocumentType } from "@/types/DocumentType";
import { IdentificationDataType } from "@/types/IdentificationDataType";
import { JobDescriptionDataType } from "@/types/JobDescriptionDataType";
import { Phone } from "@/types/PhoneType";
import { createContext } from "react";

export const NewDocumentContext = createContext(new DocumentType());