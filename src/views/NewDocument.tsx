import { NewDocumentContext } from "@/states/NewDocumentContext"
import { DocumentType } from "@/types/DocumentType";
import { IdentificationDataType } from "@/types/IdentificationDataType";
import { useContext, useState } from "react"

enum FormStep {
  DocName = 'docName',
  DocContents = 'docContents',
}

type IdentityField = keyof IdentificationDataType;

export default function NewDocument() {
  let { documentName, setDocumentName } = useContext(NewDocumentContext);
  const [formStep, setFormStep] = useState({ formStep: FormStep.DocName })
  return(
    <div className="flex-gr columns-2">
      <div>Name: </div>
      <input
        name="docName"
        min={1}
        placeholder="Type a name for the document"
        required={true}
        type="text"
        onChange={ (e) => { setDocumentName(e.target.value)} }
      ></input>
      docname: { documentName }
    </div>
  )
}