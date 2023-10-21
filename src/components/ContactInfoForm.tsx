import { ModuleNames } from "@/states/RootState";
import { IdentificationActionNames } from "@/states/stores/IdentificationStore";
import { PhoneIds } from "@/types/PhoneType";

async function handleSubmit(dispatch: any, e: any) {
  console.log('H U H');
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());
  const actionObj = {
    stateId: 'IdentificationStore',
    name: IdentificationActionNames.SetName,
    payload: {
      name: data['docName'],
    }
  };
  // Set name
  await dispatch(actionObj);
  await dispatch({ ...actionObj, name: IdentificationActionNames.SetEmail, payload: { email: data['docEmail'] } })
  await dispatch({
    stateId: ModuleNames.IdentificationState,
    name: IdentificationActionNames.SetPhoneNumber,
    payload: {
      phone: {
        type: data['docPhoneType'],
        value: data['docPhone']
      }
    }
  });
}

const ContactInfoForm = (props: { dispatch: Function } ) => {
  const phonetypeOptions = Object.values(PhoneIds).map(id => { return <option value={id} key={id}>{id}</option> });

  const inputStyle = "p-2 border-2 border-purple-500 focus:outline-none rounded";
  return(
    <div>
        <form method="post" className="border border-purple-500 w-6/12 p-4" onSubmit={e => handleSubmit(props.dispatch, e)}>
          <div className="md:flex md:items-center mb-3 p-sm">
            <div className="pr-4">
              <label form="docName">
                Full name:
              </label>
            </div>
            <div>
              <input
                className={inputStyle}
                name="docName"
                min={1}
                placeholder="John Doe"
                required={true}
                type="text">
              </input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-3 p-sm">
            <div>
              <label className="pr-4">
                Email:
              </label>
            </div>
            <div>
              <input
                className={inputStyle}
                name="docEmail"
                placeholder="johndoe@email.com"
                required={true}
                type="email"
              ></input>
            </div>
          </div>
          <div className="md:flex md:items-center mb-3 p-sm">
            <div>
              <label className="pr-4">
                Phone number:
              </label>
            </div>
            <div className="pr-4">
              <input
                className={inputStyle}
                name="docPhone"
                min={10}
                placeholder="123-456-7890"
                required={true}
                type="tel"
              />
            </div>
            <div className="mr-4">
              <select
                className="p-2 rounded"
                name="docPhoneType"
              >
                {phonetypeOptions}
              </select>
            </div>
          </div>
          <div className="pt-5">
            <button type="submit"> Submit </button>
          </div>
        </form>
    </div>
  );
}

export default ContactInfoForm;
