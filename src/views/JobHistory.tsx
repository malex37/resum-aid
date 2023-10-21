import JobCard from "@/components/JobCard";
import NavMenu from "@/components/NavMenu";
import NewJobEntryForm from "@/components/NewJobEntryForm";
import { Context, RootState } from "@/states/RootState"
import { useContext, useState } from "react";

const JobHistory = () => {
  const [localState, setState] = useState({formVisibility: 'hidden'});
  const toggleVisibility = () => {
    let vis = localState.formVisibility;
    if (localState.formVisibility === 'hidden') {
      vis = 'visible'
      console.log('I AM VISIBLE');
    } else {
      vis = 'hidden';
    }
    setState({...localState, formVisibility: vis });
  }
  // @ts-ignore
  const [state, dispatch] = useContext(Context);
  return (
    <Context.Consumer>{() => {
      return <div>
        <NavMenu />
        <div id="interactive-container" className="flex w-full h-full">
          <button onClick={toggleVisibility} className="max-h-16 w-fit whitespace-nowrap">+ Add job</button>
          <div id="form-container" className={`${localState.formVisibility} relative border-2 p-4 grid grid-cols-1 gap-3 z-10 bg-white w-full`}>
            <NewJobEntryForm dispatch={dispatch} toggleVisibility={toggleVisibility}/>
            <button type="submit" onClick={toggleVisibility}>Close</button>
          </div>
          </div>
          <div>
            {
              Object.values((state as RootState).JobDescriptionData).map((job) => { return <JobCard key={job.uuid} job={job} /> })
            }
          </div>
      </div>
    }}
    </Context.Consumer>
  );
}

export default JobHistory
