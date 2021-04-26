import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { jobActions } from "../redux/actions/job.actions";

import JobListItem from "../components/JobListItem";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

// const baseUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

const JobsList = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.job.jobs);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(jobActions.getJobs());
  }, [dispatch]);

  const handleClickDetail = (job_id) => {
    history.push(`/jobs/${job_id}`);
  };

  if (loading) {
    return <h2>Chờ em tí nha...</h2>;
  }

  return (
    <div>
      <h1 className="text-center">{jobs && jobs.length} job(s) found</h1>
      <ul>
        {jobs &&
          jobs.map((job) => (
            <JobListItem
              key={job.id}
              title={job.title}
              city={job.city}
              district={job.district}
              salary={job.salary}
              benefits={job.benefits}
              company_logo={job.img}
              tags={job.tags}
              isHotJob={job.isHotjob}
              time={job.time}
              showDetail={() => handleClickDetail(job.id)}
            />
          ))}
      </ul>
    </div>
  );
};

export default JobsList;
