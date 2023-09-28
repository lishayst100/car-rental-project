import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dataObjects } from "./dataObjects";

const LogosPlan = () => {
  return (
    <div className=" container mx-auto gap-5 margin d-flex flex-lg-row flex-column">
      {dataObjects.map((obj, index) => (
        <div
          key={index}
          className="d-flex flex-column justify-content-center align-items-center gap-5 "
        >
          <FontAwesomeIcon
            icon={obj.icon}
            className="icon-benefit"
            style={{ width: 70 }}
          />
          <div className="d-flex flex-column align-items-center">
            <h2 className="subtitle">{obj.title}</h2>
            <p className="para-text text-center">{obj.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default LogosPlan