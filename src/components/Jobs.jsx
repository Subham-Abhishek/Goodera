import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Searchbox } from "./Searchbox";

export const Jobs = () => {
  const [title, setTitle] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState("");
  const [jobs, setJobs] = React.useState([]);

  const getJobs = React.useCallback(() => {
    axios
      .get(`http://localhost:8000/job?limit=${limit}&page=${page}`)
      .then(({ data }) => {
        setJobs(data);
      });
  }, [limit, page]);

  React.useEffect(() => {
    getJobs();
  }, [getJobs]);

  console.log(jobs);

  return (
    <Grid>
      <Searchbox />
      {jobs.map((job) => {
        return (
          <Div key={job.id}>
            <img src={job.image} alt="" />
            <div className="details">
              <h4>{job.title} - {job.company}</h4>
              <p>{job.description.substring(0, 175)}</p>
              <button>View Details</button>
            </div>
          </Div>
        );
      })}
    </Grid>
  );
};

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const Div = styled.div`
  width: 500px;
  display: flex;
  gap: 15px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.05);
  border-radius: 24px;
  margin: 10px 0;
  padding: 20px;
  img {
    width: 150px;
    height: 150px;
    border-radius: 16px;
  }
  .details {
    text-align: justify;
    h4{
        margin-bottom: 20px;
    }
    button {
      float: right;
      border: 2px solid #f07987;
      width: fit-content;
      font-family: Poppins;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #f07987;
      border-radius: 18px;
      padding: 10px 15px;
      cursor: pointer;
      margin-top: 20px;
    }
  }
`;
