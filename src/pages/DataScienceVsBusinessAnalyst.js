import React, { useEffect } from "react";

export default function DataScienceVsBusinessAnalyst() {
  useEffect(() => {
    document.querySelector("body").className = "rec";
  }, []);
  return (
    <React.Fragment>
      <div className="row">
        <div className="image">
          <img
            className="responsive-image"
            src="/static/images/rec/1.webp"
            alt="rec_1"
          />
        </div>
        <div className="image">
          <img
            className="responsive-image"
            src="/static/images/rec/2.jpg"
            alt="rec_2"
          />
        </div>
      </div>
      <div className="row">
        <div className="grid-container flex-container">
          <div className="flex-item-50">
            <div className="grid-item-header">Data Scientist</div>
            <div className="grid-item">
              <h4>Skills</h4>
              <ul>
                <li>
                  Python, R, SAS, and SQL (or some form of data wrangling)
                </li>
                <li>Jupyter Notebook</li>
                <li>Object-oriented programming (OOP)</li>
                <li>Machine Learning algorithms</li>
                <li>Problem-solving</li>
                <li>Understanding the business</li>
                <li>Making sense of data</li>
                <li>Communication of business problem to stakeholders</li>
                <li>Communication of possible solution</li>
                <li>Communication of results and impact</li>
              </ul>
              <h4>Goals</h4>
              <ul>
                <li>Make the business more efficient</li>
                <li>Make a solution more accurate</li>
                <li>Make a solution cheaper</li>
              </ul>
            </div>
          </div>
          <div className="flex-item-50">
            <div className="grid-item-header">Business Analyst</div>
            <div className="grid-item">
              <h4>Skills</h4>
              <ul>
                <li>Excel</li>
                <li>SQL (sometimes)</li>
                <li>MS Office (as well)</li>
                <li>
                  Familiarity with visualization tools (Tableau, Looker, Google
                  Data Studio, etc.)
                </li>
                <li>Quality assurance</li>
                <li>Problem-solving</li>
                <li>Analytic thinking</li>
                <li>Information technology</li>
                <li>Forecasting</li>
                <li>Meeting with stakeholders</li>
                <li>Meeting with Data Scientist and Product Managers</li>
              </ul>
              <h4>Goals</h4>
              <ul>
                <li>Determining KPI’s (Key Performance Indicators)</li>
                <li>Surfacing insights</li>
                <li>Solving a problem within the company using data</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
