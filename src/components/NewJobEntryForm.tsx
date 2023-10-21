import { Context, ModuleNames } from "@/states/RootState";
import { JobDescriptionActionNames } from "@/states/stores/JobDescriptionDataType";
import { v4 as uuid } from 'uuid'

async function addJob(e: any, dispatch: Function, toggleVisibility: Function) {
  e.preventDefault();
  const jobData = Object.fromEntries(new FormData(e.target).entries());
  const entryUuid = uuid();
  await dispatch({
    stateId: ModuleNames.JobDescriptionData,
    name: JobDescriptionActionNames.AddJobDescription,
    payload: {
      ...jobData,
      uuid: entryUuid,
    }
  });
  toggleVisibility();
}

const NewJobEntryForm = (props: { dispatch: Function, toggleVisibility: Function}) => {
  const inputStyle = "w-3/4 p-2 border-2 border-purple-500 focus:outline-none rounded bg-white";
  return(
    <Context.Consumer>{
      () => {
        return(
          <>
            <form 
              id="job-form"
              method='post'
              onSubmit={e => addJob(e, props.dispatch, props.toggleVisibility)}
              className="bg-white z-50 relative"
            >
              <div id="form-job-title"className='bg-white md:flex md:items-center gap-3 pb-3'>
                <label className="mr-3">Job title</label>
                <input className={inputStyle} name='title' placeholder="Technical Program Manager" type='text'></input>
              </div>
              <div id="form-employer" className='bg-white md:flex md:items-center gap-3 pb-3'>
                <label className="mr-3">Employer</label>
                <input className={inputStyle} name='employer' placeholder="Super Cool Tech NA, LLC" type='text'></input>
              </div>
              <div id="form-job-description" className='flex flex-col items-start bg-white pb-5 w-full'>
                <label>Job description:</label>
                <textarea
                  className="w-full p-2 border-2 border-purple-500 focus:outline-none rounded bg-white"
                  name='description'
                  placeholder="At company X my position focused on designing and architechting automated solutions to..."
                />
              </div>
              <div id="form-dates" className="bg-white grid grid-cols-2 justify-items-start pb-5">
                <label>Start date</label>
                <input
                  type="date"
                  name="startDate"
                  className="border-1 border-purple-500"
                />
                <label>End date</label>
                <input type="date" name="endDate"></input>
              </div>
              <button className="w-1/3 border-[1.5] border-purple-500 pb-3" type="submit">Save</button>
            </form>
        </>)
      }
    }
    </Context.Consumer>
  );
}

export default NewJobEntryForm
