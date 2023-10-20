import { Context } from "@/states/RootState"
import { JobDescriptionDataInterface } from "@/states/stores/JobDescriptionDataType";
import { useState } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from 'uuid';

// TODO: move to component and stylize to card layout
function renderJob(job: JobDescriptionDataInterface) {
  return(
    <div id={job.uuid} key={job.uuid} className="grid grid-cols-1">
      <div>{job.title}</div>
      <div>{job.employer}</div>
      <div>{job.startDate.toString()}</div>
      <div>{job.endDate.toString()}</div>
      <div>{job.description}</div>
  </div>
  );
}

function addJob(e: any, state:any, setState: any) {
  e.preventDefault();
  const formData = Object.fromEntries(new FormData(e.target).entries());
  const newJob = {
    uuid: uuid(),
    title: formData['jobTitle'],
    employer: formData['jobEmployer'],
    startDate: formData['jobStart'],
    endDate: formData['jobEnd'],
    description: formData['jobDescription']
  };
  const newstate = toggleVisible(state);
  setState({...newstate, jobs: [...state.jobs, newJob]});
  
}

function toggleVisible(state: any) {
  let vis = 'invisible';
  if (state.visible === 'invisible') vis ='visible';
  return {...state, visible: vis};
}

const NewDocument = () => {
  const [state, setState] = useState({visible:'invisible', jobs: []});
  const inputStyle = "p-2 border-2 border-purple-500 focus:outline-none rounded";

  return (
    <Context.Consumer>{() => {
      return <div>
        <div className="text-xl">
          New Document
        </div>
        <div>
          <label>Friendly name: </label>
          <input className="bg-gray border-2 border-purple-500 focus:outline-none outline-none rounded"></input>
        </div>
        <button onClick={() => { setState(toggleVisible(state)) }}>+ Add job</button>
        <div className={`${state.visible} border-2 p-4 grid grid-cols-1 gap-3`}>
          <form method='post'onSubmit={e => addJob(e, state, setState)}>
            <div className='md:flex md:items-center gap-3 pb-3'>
              <label className="mr-3">Job title</label>
              <input className={inputStyle} name='jobTitle' placeholder="Technical Program Manager" type='text'></input>
            </div>
            <div className='md:flex md:items-center gap-3 pb-3'>
              <label className="mr-3">Employer</label>
              <input className={inputStyle} name='jobEmployer' placeholder="Super Cool Tech NA, LLC" type='text'></input>
            </div>
            <div className='grid grid-cols-1 pb-5'>
              <label>Job description:</label>
              <textarea
                className={inputStyle}
                name='jobDescription'
                placeholder="Att company X my position focused on designing and architechting automated solutions to..."
              ></textarea>
            </div>
            <div className="grid grid-cols-2">
              <label>Start date</label>
              <input type="date" name="jobStart"></input>
              <label>End date</label>
              <input type="date" name="jobEnd"></input>
            </div>
            <button type="submit">Save</button>
          </form>
        </div>
        <div>
          {state.jobs.map((job: JobDescriptionDataInterface) => renderJob(job))}
        </div>
        <Link to='/'> Back</Link>
      </div>
    }}
    </Context.Consumer>
  );
}

export default NewDocument
