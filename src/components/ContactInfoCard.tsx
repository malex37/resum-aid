import { IdentificationStateType } from "@/states/stores/IdentificationStore";
import { v4 as uuid } from 'uuid';

const ContactInfoCard = (props: { contact: IdentificationStateType }) => {
  return(
    <div className="grid grid-cols-1 border border-purple-500 rounded p-4">
      <div className="flex flex-row gap-3 border-b border-b-purple-500 pb-2">
        <div className="w-1/2">Name:</div>
        <div className="w-1/2">{props.contact.name}</div>
      </div>
      <div className="flex flex-row gap-3 justify-start border-b border-b-purple-500 pb-2 pt-2">
        <div className="w-1/2 items-start">Email:</div>
        <div className="w-1/2">{props.contact.email}</div>
      </div>
      <div className="flex flex-row gap-3 justify-start border-b border-b-purple-500 pb-2 pt-2">
        <div className="w-1/2">Phone numbers:</div>
        <div className="w-1/2 grid grid-cols-1 gap-2 justify-center">
          {
            props.contact.phoneNumbers.map(phoneNumber => {
              return(
                <div key={uuid()} className="flex flex-row">
                  <div className="w-1/2 pr-2">{phoneNumber.type}:</div>
                  <div className="w-1/2">{phoneNumber.value}</div>
                </div>
              );
            })
          }
        </div>
      </div>
    </div>
  );
}

export default ContactInfoCard;

