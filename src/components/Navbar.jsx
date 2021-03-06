import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <Header>
      <nav className="navBar">
        <section className="navSection1">
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 12.255C16.1405 13.4112 13.0844 14.0038 10 14C6.817 14 3.78 13.38 1 12.255H19ZM14 5V3C14 2.46957 13.7893 1.96086 13.4142 1.58579C13.0391 1.21071 12.5304 1 12 1H8C7.46957 1 6.96086 1.21071 6.58579 1.58579C6.21071 1.96086 6 2.46957 6 3V5H14ZM10 11H10.01H10ZM3 19H17C17.5304 19 18.0391 18.7893 18.4142 18.4142C18.7893 18.0391 19 17.5304 19 17V7C19 6.46957 18.7893 5.96086 18.4142 5.58579C18.0391 5.21071 17.5304 5 17 5H3C2.46957 5 1.96086 5.21071 1.58579 5.58579C1.21071 5.96086 1 6.46957 1 7V17C1 17.5304 1.21071 18.0391 1.58579 18.4142C1.96086 18.7893 2.46957 19 3 19Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <div>JobHunt</div>
          </div>
          <div>
            <Link to="/"><div>Find Jobs</div></Link>
            <div className="jobsUnderline"></div>
          </div>
          <div>
            <div>Upskill Yourself</div>
          </div>
        </section>
        <section className="navSection2">
          <Link to="/post"><p>Post a job</p></Link>
          <p>Sign in</p>
        </section>
      </nav>
      <div className="heading">
        <h1>Find Your Dream Job</h1>
        <p>Browse through thousands of full-time or part-time jobs near you</p>
      </div>
      {/* <Searchbox /> */}
    </Header>
  );
};

const Header = styled.header`
  width: 100%;
  height: 364px;
  font-family: "Poppins", sans-serif;
  background: linear-gradient(274.83deg, #5db0df 0.58%, #5d7adf 74.3%);
  padding-top: 34px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 90px;
  .navBar {
    width: 70%;
    font-size: 14px;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 15px;
    height: auto;
    .navSection1 {
      width: 30%;
      min-width: 340px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .navSection2 {
      width: 10%;
      min-width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
  .heading {
    width: 70%;
    transform: translateY(-130px);
    h1 {
      font-family: Poppins;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
      line-height: 72px;
      color: #ffffff;
    }
    p {
      font-size: 20px;
      font-size: 20px;
      line-height: 30px;
      color: #ffffff;
    }
  }
`;
