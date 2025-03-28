"use client";

import { Job } from "@chat/types";
import { Button, Typography } from "@mui/material";

export interface JobsListProps {
  jobs: Job[];
}

const JobsList = ({ jobs }: JobsListProps) => {
  console.log(jobs);
  return (
    <div className="flex flex-col">
      {jobs.map((job) => (
        <div
          className="flex justify-between p-2 items-center border-t first:border-t-0 border-[#f7365c]"
          key={job.jobId}
        >
          <div className="flex flex-col">
            <Typography>{job.jobName}</Typography>
            <Typography color="textSecondary">{job.companyName}</Typography>
          </div>
          <Button variant="outlined" size="small">
            Ver mais
          </Button>
        </div>
      ))}
    </div>
  );
};

export default JobsList;
