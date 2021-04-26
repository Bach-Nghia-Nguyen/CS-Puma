import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { jobActions } from "../redux/actions/job.actions";

import JobDetailCard from "../components/JobDetailCard";

// const backEndUrl = process.env.REACT_APP_BACKEND_SERVER_URL;

const JobDetail = () => {
  const jobDetail = useSelector((state) => state.job.jobDetail);
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(jobActions.getSingleJob(id));
  }, [id, dispatch]);

  return (
    <div className="job-detail-page">
      <JobDetailCard
        title={jobDetail?.title}
        company_logo={jobDetail?.img}
        tags={jobDetail?.tags}
        city={jobDetail?.city}
        district={jobDetail?.district}
        salary={jobDetail?.salary}
        time={jobDetail?.time}
        benefits={jobDetail?.benefits}
        description={jobDetail?.description}
      />
    </div>
  );
};

export default JobDetail;
