import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      history.push("/dashboard");
    }
  }, [history]);
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <h1 className="text-center mt-3">ClinicWire</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 bg-image mt-3 text-center">
          <div class="text-center main-buttons">
            <Link to="/login">
              <button class="btn" id="loginBtn">
                Login
              </button>
            </Link>
            <br />
            <br />
            <Link to="/signup">
              <button class="btn" id="signUpBtn">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 mt-3">
          <div className="card">
            <div className="card-body">
              <h2 className="text-center">About Us</h2>
              <hr />
              <p className="text-center">
                Welcome to ClinicWire. We are a user-friendly medical portal
                that allows users to schedule appointments directly with their
                doctor. We make it easy to find the dates and times that work
                best for both you and your doctor.
              </p>
            </div>
            <div class="card-footer text-center">
              <Link to="/disclaimer">Link to Disclaimer Page</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HomePage;
