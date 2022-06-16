import React from "react";
import "../styles/getdataLoc.css";
import "../styles/getdataLoc.css";
import { ChangePageFunction } from "../types";

export const InfoPage = ({ ChangePage }: ChangePageFunction) => {
  return (
    <div className="container">
      <div style={{ cursor: "pointer" }} onClick={ChangePage}>
        <h3 style={{ fontWeight: "bold" }}>
          Particulate Matter (PM2.5) Trends
        </h3>
        <i className="material-icons">arrow_back</i>
      </div>
      <p className="flow-text" style={{ textAlign: "justify" }}>
        Using a nationwide network of monitoring sites, EPA has developed
        ambient air quality trends for particle pollution, also called
        Particulate Matter (PM). PM2.5 describes fine inhalable particles, with
        diameters that are generally 2.5 micrometers and smaller. Under the
        Clean Air Act, EPA sets and reviews national air quality standards for
        PM. Air quality monitors measure concentrations of PM throughout the
        country. EPA, state, tribal and local agencies use that data to ensure
        that PM in the air is at levels that protect public health and the
        environment. Nationally, average PM2.5 concentrations have decreased
        over the years. For information on PM standards, sources, health
        effects, and programs to reduce PM, please see our Particulate Matter
        Pollution page.
      </p>

      <div className="flexBox space-top">
        <div className="item">
          <a
            href="https://github.com/JATIN2111999"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./socialicon/github.svg"
              alt="github"
              className="infoIcon"
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.linkedin.com/in/jatinhabibkar/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./socialicon/linkedin.svg"
              alt="linkedin"
              className="infoIcon"
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://twitter.com/jatinhabibkar"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./socialicon/twitter.svg"
              alt="twitter"
              className="infoIcon"
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://www.airveda.com/blog/what-is-pm2-5-and-why-is-it-important#:~:text=are%20some%20examples.-,PM2.,take%20place%20in%20the%20atmosphere."
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./socialicon/info.svg"
              alt="moreinfo"
              className="infoIcon"
            />
          </a>
        </div>

        <div className="item">
          <a
            href="https://aqicn.org/here/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="./socialicon/json.svg"
              alt="moreinfo"
              className="infoIcon"
            />
          </a>
        </div>


      </div>
    </div>
  );
};
