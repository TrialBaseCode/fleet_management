import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import GeStartEndomap from "./maps/startEndmap";


const VechileInfo = () => {
  //   const percentage = 30;
  const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setPercentage(80);
    }, 1000);
  });
  return (
    <>
      {/* <!-- Begin Page Content --> */}
      <div className="container-fluid">
        {/*  <!-- Page Heading --> */}
        <div className="d-sm-flex align-items-center justify-content-between ">
          <Link
            className="h4 mb-0 text-primary text-decoration-underline"
            to="/Vehiclesdetails/VechileList"
          >
            <u>Back to all Vehicles</u>
          </Link>
          <a
            href="#"
            className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            <i className="fas fa-download fa-sm text-white-50"></i> Generate
            Report
          </a>
        </div>
        <div className="info-vechicle-container my-4">
          <div className="info-vechicle-container mb-4">
            <div className="row">
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-header py-3">
                    <div className="card-container d-flex align-items-center">
                      <div className="logowork pr-2">
                        <div className="logo">
                          <i className="fas fa-truck fa-2x"></i>
                        </div>
                      </div>
                      <div className="vicle-dit">
                        <div className="vicle-til">
                          <h3 className="text-basic font-weight-bold mb-0">
                            Vehicle Name
                          </h3>
                        </div>
                        <div className="vicle-det d-flex">
                          <h6 className="mb-0">
                            <span>Vehicle no:</span>OD2356
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <ul className="list-group">
                      <li className="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Chassis no:
                          </span>
                          0002255566655
                        </h6>
                      </li>
                      <li class="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Type:
                          </span>
                          Truck
                        </h6>
                      </li>
                      <li class="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Vechicle Rc:
                          </span>
                          Download
                        </h6>
                      </li>
                      <li class="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Model:
                          </span>
                          AC123F
                        </h6>
                      </li>
                      <li class="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Status:
                          </span>
                          En Route
                        </h6>
                      </li>
                      <li class="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Domain:
                          </span>
                          Retail
                        </h6>
                      </li>
                      <li class="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Fuel Consumption:
                          </span>
                          5.99 MPG
                        </h6>
                      </li>
                      <li class="list-group-item d-flex">
                        <h6 className="mb-0">
                          <span className="font-weight-bold pr-1 text-basic">
                            Average Speed:
                          </span>
                          62.5 MPH
                        </h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card shadow">
                  <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Key Indicators
                    </h6>
                  </div>
                  <div className="card-body">
                    <div className="key-indicator0container">
                      <div className="row">
                        <div className="col-md-6">
                          <div class="card mb-3 allvinfocartkeyindex">
                            <div class="row no-gutters">
                              <div class="col-md-4">
                                <div className="logIcon h-100">
                                  <div className="Iconso h-100 d-flex align-items-center justify-content-center">
                                    <i class="fab fa-steam-square fa-3x pl-2 text-primary"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-8">
                                <div class="card-body p-2">
                                  <h5 class="card-title mb-0 text-basic font-weight-bold">
                                    Ok
                                  </h5>
                                  <p class="card-text">Engine</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="card mb-3 allvinfocartkeyindex">
                            <div class="row no-gutters">
                              <div class="col-md-4">
                                <div className="logIcon h-100">
                                  <div className="Iconso h-100 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-car-battery  fa-3x pl-2 text-primary"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-8">
                                <div class="card-body p-2">
                                  <h5 class="card-title mb-0 text-basic font-weight-bold">
                                    Ok
                                  </h5>
                                  <p class="card-text">Battery</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6">
                          <div class="card mb-3 allvinfocartkeyindex">
                            <div class="row no-gutters">
                              <div class="col-md-4">
                                <div className="logIcon h-100">
                                  <div className="Iconso h-100 d-flex align-items-center justify-content-center">
                                    <i class="fas fa-oil-can  fa-3x pl-2 text-primary"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-8">
                                <div class="card-body p-2">
                                  <h5 class="card-title mb-0 text-basic font-weight-bold">
                                    35%
                                  </h5>
                                  <p class="card-text">Oil</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div class="card mb-3 allvinfocartkeyindex">
                            <div class="row no-gutters">
                              <div class="col-md-4">
                                <div className="logIcon h-100">
                                  <div className="Iconso h-100 d-flex align-items-center justify-content-center">
                                    <i class="fab fa-steam-square fa-3x pl-2 text-primary"></i>
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-8">
                                <div class="card-body p-2">
                                  <h5 class="card-title mb-0 text-basic font-weight-bold">
                                    1G
                                  </h5>
                                  <p class="card-text">Gas</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progrebar-card-contain">
                    <div className="card-header py-2">
                      <h6 className="m-0 font-weight-bold text-primary">
                        Vehicle Condition
                      </h6>
                    </div>
                    <div class="card-body p-5">
                      <div className="readial-work-contaainer ">
                        {/* <!------Circular progress bar start--------> */}
                        <div
                          style={{ width: 100, height: 100, margin: "0 auto" }}
                        >
                          <CircularProgressbar
                            value={percentage}
                            text={`${percentage}%`}
                            styles={buildStyles({
                              pathTransitionDuration: 0.5,
                              // Customize the root svg element
                              root: {},
                              // Customize the path, i.e. the "completed progress"
                              path: {
                                // Path color
                                stroke: `rgba(62, 152, 199, ${
                                  percentage / 20
                                })`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: "butt",
                                // Customize transition animation
                                transition: "stroke-dashoffset 0.5s ease 0s",
                                // Rotate the path
                                transform: "rotate(0.25turn)",
                                transformOrigin: "center center",
                              },
                              // Customize the circle behind the path, i.e. the "total progress"
                              trail: {
                                // Trail color
                                stroke: "#d6d6d6",
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: "butt",
                                // Rotate the trail
                                transform: "rotate(0.25turn)",
                                transformOrigin: "center center",
                              },
                              textColor: "#414d6a",

                              pathColor: "#4e73df",
                            })}
                          />
                        </div>

                        {/* <!------Circular progress bar end--------> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="maintainTripContainer">
               {/*  <!-- Content Row --> */}
               <div className="row">
               {/*   <!-- Area Chart --> */}
               <div className="col-xl-5 col-lg-5">
                  <div className="card shadow">
                     {/*  <!-- Card Header - Dropdown --> */}
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                      <h6 className="m-0 font-weight-bold text-primary">
                            Maintenance
                      </h6>
                     <div className="dropdown no-arrow">
                        <a
                           className="dropdown-toggle"
                           href="#"
                           role="button"
                           id="dropdownMenuLink"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false"
                        >
                           <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                           className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                           aria-labelledby="dropdownMenuLink"
                        >
                           <div className="dropdown-header">Dropdown Header:</div>
                           <a className="dropdown-item" href="#">
                           Action
                           </a>
                           <a className="dropdown-item" href="#">
                           Another action
                           </a>
                           <div className="dropdown-divider"></div>
                           <a className="dropdown-item" href="#">
                           Something else here
                           </a>
                        </div>
                     </div>
                     </div>
                     {/*  <!-- Card Body --> */}
                     <div className="card-body">
                      <div className="list-of-maintainece">
                        <ul class="list-group">
                            <li class="list-group-item d-flex justify-content-between">
                              <div class="card text-white  bg-primary mb-3 w-100" >
                                <div class="card-header text-basic text-center font-weight-bold">1</div>
                                <div class="card-list">
                                  <p class="card-text text-center">Overdue</p>
                                </div>
                              </div>
                              <div class="card text-white bg-primary mb-3 w-100">
                                <div class="card-header text-basic text-center font-weight-bold">20</div>
                                <div class="card-list">
                                  <p class="card-text text-center">Due Soon</p>
                                </div>
                              </div>
                            </li>
                            <li class="list-group-item d-flex">
                               <div className="maint-container d-flex align-items-center">
                                   <div className="main-icon-contian pr-2">
                                      <div className="main-icon">
                                         <img src="../img/breaks.png" width={40} height={40}></img>
                                      </div>
                                   </div>
                                   <div className="maint-til-container">
                                      <div className="maint-til">
                                        <h6 className="mb-0 text-basic font-weight-bold">Brakes Repair</h6>
                                      </div>
                                      <div className="maint-due">
                                         <p className="mb-0">2 month overdue</p>
                                      </div>
                                   </div>
                               </div>
                            </li>
                            <li class="list-group-item d-flex">
                               <div className="maint-container d-flex align-items-center">
                                   <div className="main-icon-contian pr-2">
                                      <div className="main-icon">
                                         <img src="../img/filter.png" width={40} height={40}></img>
                                      </div>
                                   </div>
                                   <div className="maint-til-container">
                                      <div className="maint-til">
                                        <h6 className="mb-0 text-basic font-weight-bold">Filter Replacement</h6>
                                      </div>
                                      <div className="maint-due">
                                         <p className="mb-0">1 month overdue</p>
                                      </div>
                                   </div>
                               </div>
                            </li>
                            <li class="list-group-item d-flex">
                               <div className="maint-container d-flex align-items-center">
                                   <div className="main-icon-contian pr-2">
                                      <div className="main-icon">
                                         <img src="../img/plan.png" width={40} height={40}></img>
                                      </div>
                                   </div>
                                   <div className="maint-til-container">
                                      <div className="maint-til">
                                        <h6 className="mb-0 text-basic font-weight-bold">Planned Inspection</h6>
                                      </div>
                                      <div className="maint-due">
                                         <p className="mb-0">4 month overdue</p>
                                      </div>
                                   </div>
                               </div>
                            </li>
                            <li class="list-group-item d-flex">
                               <div className="maint-container d-flex align-items-center">
                                   <div className="main-icon-contian pr-2">
                                      <div className="main-icon">
                                         <img src="../img/rotate_tiers.png" width={40} height={40}></img>
                                      </div>
                                   </div>
                                   <div className="maint-til-container">
                                      <div className="maint-til">
                                        <h6 className="mb-0 text-basic font-weight-bold">Rotate Tires</h6>
                                      </div>
                                      <div className="maint-due">
                                         <p className="mb-0">3 month overdue</p>
                                      </div>
                                   </div>
                               </div>
                            </li>
                        </ul> 
                      </div>
                     </div>
                  </div>
               </div>

               {/*  <!-- Pie Chart --> */}
               <div className="col-xl-7 col-lg-7">
                  <div className="card shadow">
                     {/*  <!-- Card Header - Dropdown --> */}
                     <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                     <h6 className="m-0 font-weight-bold text-primary">
                        TRIP  <small class="text-success mb-3">LIVE</small>
                     </h6>
                     <div className="dropdown no-arrow">
                        <a
                           className="dropdown-toggle"
                           href="#"
                           role="button"
                           id="dropdownMenuLink"
                           data-toggle="dropdown"
                           aria-haspopup="true"
                           aria-expanded="false"
                        >
                           <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                        </a>
                        <div
                           className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                           aria-labelledby="dropdownMenuLink"
                        >
                           <div className="dropdown-header">Dropdown Header:</div>
                           <a className="dropdown-item" href="#">
                           Action
                           </a>
                           <a className="dropdown-item" href="#">
                           Another action
                           </a>
                           <div className="dropdown-divider"></div>
                           <a className="dropdown-item" href="#">
                           Something else here
                           </a>
                        </div>
                     </div>
                     </div>
                     {/*  <!-- Card Body --> */}
                     <div className="card-body">
                       <div className="card-trp-map-contain">
                           <div className="row">
                              <div className="col-md-6">
                                  <div class="listoftrip card text-white  mb-3 w-100">
                                       <div class="card-header text-basic font-weight-light p-1 h6">Start Date</div>
                                       <div class="card-list p-1">
                                           <p class="card-text text-primary font-weight-bold">May 14 / 2:35 AM</p>
                                       </div>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                  <div class="listoftrip card text-white  mb-3 w-100">
                                       <div class="card-header text-basic font-weight-light p-1 h6">End Date</div>
                                       <div class="card-list p-1">
                                           <p class="card-text text-primary  font-weight-bold">May 14 / 2:35 AM</p>
                                       </div>
                                  </div>
                              </div>
                           </div>
                           <div className="row">
                              <div className="col-md-6">
                                 <div class="listoftrip card text-white  mb-3 w-100">
                                       <div class="card-header text-basic font-weight-light p-1 h6">Distance Covered</div>
                                       <div class="card-list p-1">
                                           <p class="card-text text-primary  font-weight-bold">501.4 mi</p>
                                       </div>
                                  </div>
                              </div>
                              <div className="col-md-6">
                                 <div class="listoftrip card text-white  mb-3 w-100">
                                       <div class="card-header text-basic font-weight-light p-1 h6">Duration</div>
                                       <div class="card-list p-1">
                                           <p class="card-text text-primary  font-weight-bold">10h 5min</p>
                                       </div>
                                  </div>
                              </div>
                           </div>
                       </div>
                       <div className="card-trip-map-show-of trip">
                           <GeStartEndomap />
                       </div>
                     </div>
                  </div>
               </div>
               </div>
          </div>
        </div>
      </div>
      {/*   <!-- /.container-fluid --> */}
    </>
  );
};

export default VechileInfo;
