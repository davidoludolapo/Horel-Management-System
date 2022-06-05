import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { runFireWorks } from "../../lib/utils";
import './success.css'
import PrimaryButton from "../../components/PrimaryButton";

function Success() {
  useEffect(() => {
    runFireWorks();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon"></p>
        <h2>YOUR ROOM IS SET!</h2>
        <h2>ENJOY YOUR STAY!</h2>
        
        <p className="description">
          If you have any questions please email
          <a href="imperial@gmail.com" className="email">
            imperial@gmail.com
          </a>
        </p>
        <Link to="/">
        <PrimaryButton name={"Go to Homepage"}/>
    
        </Link>
      </div>
    </div>
  );
}

export default Success;
