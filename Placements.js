import React from "react";

export default function Placements() {
  return (
    <>
      <div className="container">
        <h1 className="my-4 text-white bg-info text-center ">
          IIIT Lucknow Placement Cell
        </h1>
        <hr />
        <h3 className="text-center">Placement Statistics (B.Tech) 2022</h3>
        <hr />
        <div className="row my-4 container">
          <div className="col-sm-6">
            <img src={process.env.PUBLIC_URL + "gearbtech.png"} width="400px" />
          </div>
          <div className="col-sm-6">
            <img
              src={process.env.PUBLIC_URL + "statsbtech.png"}
              width="400px"
            />
          </div>
        </div>
        <hr />
        <h3 className="text-center">Placement Statistics (M.Tech) 2022</h3>
        <hr />
        <div className="row my-4 container">
          <div className="col-sm-6">
            <img src={process.env.PUBLIC_URL + "gearmtec.png"} width="250px" />
          </div>
          <div className="col-sm-6">
            <img
              src={process.env.PUBLIC_URL + "statsmtech.png"}
              width="400px"
            />
          </div>
        </div>
        <hr />
        <h2 className="text-center">Older Placements</h2>

        <div className="accordion my-4 shadow p-3 mb-5 bg-body rounded" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingOne">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseOne"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseOne"
              >
                  <h5>2021</h5>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingOne"
            >
              <div className="accordion-body  bg-secondary bg-opacity-10">
                <div className="container">
                  <div className="box-h my-4">
                    <p className="cp-clg-h text-danger text-opacity-75">
                      <h4>AVERAGE PACKAGE OFFERED</h4>
                    </p>
                    <hr />
                  </div>
                  <h5>Rs. 19.00 Lakhs per Annum.</h5>
                  <div className="box-h my-4">
                    <p className="cp-clg-h text-danger text-opacity-75">
                      <h4>HIGHEST PACKAGE OFFERED</h4>
                    </p>
                    <hr />
                  </div>
                  <h5>Rs. 48.00 Lakhs per Annum.</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item  bg-secondary bg-opacity-10">
            <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseTwo"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <center>
                  <h5>2020</h5>
                </center>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <div className="container">
                  <div className="box-h my-4">
                    <p className="cp-clg-h text-danger text-opacity-75">
                      <h4>AVERAGE PACKAGE OFFERED</h4>
                    </p>
                    <hr />
                  </div>
                  <h5>Rs. 18.42 Lakhs per Annum.</h5>
                  <div className="box-h my-4">
                    <p className="cp-clg-h text-danger text-opacity-75">
                      <h4>HIGHEST PACKAGE OFFERED</h4>
                    </p>
                    <hr />
                  </div>
                  <h5>Rs. 43.00 Lakhs per Annum.</h5>
                </div>
                <div className="accordion-body">
                  <div className="box-card crs-box">
                    <div className="box-h">
                      <h4 className="cp-clg-h my-4 text-danger text-opacity-75">
                        RECRUITERS DISTRIBUTION
                      </h4>
                      <hr />
                    </div>
                    <div className="box-p">
                      <table className="table table-striped">
                        <tbody>
                          <tr>
                            <td>
                              <h5>Category</h5>
                            </td>
                            <td>
                              <h5>Distribution (%)</h5>
                            </td>
                          </tr>
                          <tr>
                            <td>Core IT</td>
                            <td>26.40%</td>
                          </tr>
                          <tr>
                            <td>Consultancy</td>
                            <td>25.90%</td>
                          </tr>
                          <tr>
                            <td>Travel Network</td>
                            <td>11.10%</td>
                          </tr>
                          <tr>
                            <td>Finance</td>
                            <td>11.00%</td>
                          </tr>
                          <tr>
                            <td>Others</td>
                            <td>10.80%</td>
                          </tr>
                          <tr>
                            <td>Analytics</td>
                            <td>7.40%</td>
                          </tr>
                          <tr>
                            <td>Engineering & Technology</td>
                            <td>7.40%</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item  bg-secondary bg-opacity-10">
            <h2 className="accordion-header" id="panelsStayOpen-headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseThree"
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseThree"
              >
                <center>
                  <h5>2019</h5>
                </center>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingThree"
            >
              <div className="accordion-body">
                <div className="container">
                  <div className="box-h my-4">
                    <p className="cp-clg-h text-danger text-opacity-75">
                      <h4>AVERAGE PACKAGE OFFERED</h4>
                    </p>
                    <hr />
                  </div>
                  <h5>Rs. 11.37 Lakhs per Annum.</h5>
                  <div className="box-h my-4">
                    <p className="cp-clg-h text-danger text-opacity-75">
                      <h4>HIGHEST PACKAGE OFFERED</h4>
                    </p>
                    <hr />
                  </div>
                  <h5>Rs. 28.00 Lakhs per Annum.</h5>
                  <div className="box-h my-4">
                    <p className="cp-clg-h text-danger text-opacity-75">
                      <h4>PLACEMENT STATISTICS</h4>
                    </p>
                    <hr />
                  </div>
                  <h5>Placement Percentage -- 96.80%</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item  bg-secondary bg-opacity-10">
            <h2 className="accordion-header" id="panelsStayOpen-headingFour">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFour"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseFour"
              >
                <center>
                  <h5>2018</h5>
                </center>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFour"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingFour"
            >
              <div className="accordion-body">
                <h5>First batch passed out in 2019.</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="accordion shadow p-3 mb-5 bg-body rounded" id="accordionPanelsStayOpenExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="panelsStayOpen-headingFive">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseFive"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseFive"
              >
                <center>
                  <h5>Our Recruiters</h5>
                </center>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseFive"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingFive"
            >
              <div className="accordion-body">
                <div className="container">
                  <img
                    src={process.env.PUBLIC_URL + "Recruiters.jpg"}
                    width="1200px"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item text-center">
            <h2 className="accordion-header" id="panelsStayOpen-headingSix">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#panelsStayOpen-collapseSix"
                aria-expanded="true"
                aria-controls="panelsStayOpen-collapseSix"
              >
                  <h5>Our Past Recruiters</h5>
              </button>
            </h2>
            <div
              id="panelsStayOpen-collapseSix"
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingSix"
            >
              <div className="accordion-body">
                <div className="container">
                  <img
                    src={process.env.PUBLIC_URL + "Recruiters2020.webp"}
                    width="1200px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div><hr />

        <div className="row my-4 text-center">
        <h3>THE INSTITUTE SPEAKS</h3>
          <div className="col-sm-6">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
              <div className="card-header bg-primary bg-opacity-25">
                <h3> A vision to follow</h3>
                <br />
                <h5>EVOLVING A BRAND-NAME TAKES YEARS OF NURTURING</h5>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    Evolving a brand-name takes years of nurturing, hard work
                    and passion. IIIT Lucknow, which started its journey in
                    2015, has brought in the culture of innovation among its
                    students.
                  </p>
                  <footer className="blockquote-footer text-primary">
                    <cite title="Source Title">Dr. Arun Mohan Sherry</cite>
                    <br />
                    Director IIITLucknow
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card shadow-lg p-3 mb-5 bg-body rounded">
              <div className="card-header bg-primary bg-opacity-25">
                <h3>Exploring the skies</h3>
                <br />
                <h5>THE TRAINING AND PLACEMENT CELL</h5>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <p>
                    The Training and Placement cell of Indian Institute of
                    Information Technology, Lucknow is an integral part of the
                    academics It helps in shaping the careers of our students in
                    the field of Information Technology.
                  </p>
                  <footer className="blockquote-footer text-primary">
                    <cite title="Source Title">Dr. Vishal Krishna Singh</cite>
                    <br />
                    Training and Placement Officer IIITLucknow
                  </footer>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
