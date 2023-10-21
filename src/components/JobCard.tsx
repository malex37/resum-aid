import { JobDescriptionDataInterface } from "@/states/stores/JobDescriptionDataType";

const JobCard = (props: {job: JobDescriptionDataInterface }) => {
  return (
    <div id={props.job.uuid} key={props.job.uuid} className="flex-col border-2 border-black rounded w-full justify-evenly p-4"> 
      <div
        key={props.job.uuid+'title'}
        className="text-2xl border-b border-b-gray-900 mb-4"
      >{props.job.title}</div>
      <div key={props.job.uuid+'employer'} className="flex flex-row gap-3 p-2">
        <div className="font-bold">
          Employer
        </div>
        <div>
          {props.job.employer}
        </div>
      </div>
      <div key={props.job.uuid+'uuid'} className="flex gap-3 content-stretch items-stretch p-2"> 
        <div className="font-bold">Employment period</div>
        <div key={props.job.uuid+'startDate'}>{props.job.startDate.toString()}</div>
        <div>|</div>
        <div key={props.job.uuid+'endDate'}>{props.job.endDate.toString()}</div>
      </div>
      <div key={props.job.uuid+'description'} className="flex flex-col items-start p-2">
        <div className="items-start">
          <div className="font-bold">Job description:</div>
        </div>
        <div className="w-full text-justify">
        {props.job.description}
        </div>
      </div>
    </div>
  );
}

export default JobCard;
