import { useState } from "react";
import "../Dashboard.css";
import { Link, NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const location = useLocation();

  // Define a helper function to check if the given path is active
  const isPathActive = (path) => {
    const currentPath = location.pathname;
    return currentPath === path;
  };

  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <>
      <div className={style}>
        <nav className="sidebarwork" id="accordionSidebar">
          <Link className="collapse-item" to="/test">
            Test
          </Link>
          <Link className="collapse-item" to="/apitest">
            ApiTest
          </Link>
          {/*  <!-- Sidebar - Brand --> */}
          <Link
            className="sidebar-brand d-flex align-items-center justify-content-center"
            
          >
            <div className="sidebar-brand-icon rotate-n-15">
              <i className="fas fa-truck"></i>
            </div>
            <div className="sidebar-brand-text mx-3">Admin</div>
            <div className="text-center d-none d-md-inline">
              <button
                className="rounded-circle border-0"
                id="sidebarToggle"
                onClick={changeStyle || changeStyle1}
              ></button>
            </div>
          </Link>

          {/* <!---Test Case ---> */}

          {/*   <!-- Divider --> */}
          <hr className="sidebar-divider my-0" />
          <ul className="fleetAdminDetail p-0 navbar-nav" id="fleetAdminal">
            {/*  <!-- Nav Item - Dashboard --> */}
            <li
              className={` nav-item  ${
                isPathActive("/") ||
                isPathActive("/AllVehicle") ||
                isPathActive("/Driving") ||
                isPathActive("/Parked") ||
                isPathActive("/realTimeData") ||
                isPathActive("/events") ||
                isPathActive("/events/allevents") || 
                isPathActive("/events/feaevents")
                  ? "active"
                  : ""
              }`}
            >
              <div
                className="nav-link "
                data-toggle="collapse"
                data-target="#collapsedash"
                aria-expanded="true"
                aria-controls="collapsedash"
              >
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </div>
              <div
                id="collapsedash"
                className={` collapse ${
                  isPathActive("/") ||
                  isPathActive("/AllVehicle") ||
                  isPathActive("/Driving") ||
                  isPathActive("/Parked") ||
                  isPathActive("/realTimeData") ||
                  isPathActive("/events") ||
                  isPathActive("/events/allevents") || 
                  isPathActive("/events/feaevents")
                    ? "show"
                    : "collapse"
                }`}
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className={` collapse-item
                   ${isPathActive("/AllVehicle") ||
                   isPathActive("/Driving") ||
                   isPathActive("/Parked") 
                  ? "active": ""}`} to="/">
                    Vehicles Overview
                  </NavLink>
                  <NavLink className=" collapse-item " to="/realTimeData">
                    Real Time Data
                  </NavLink>
                  <NavLink className=" collapse-item " to="/events">
                    Events
                  </NavLink>
                </div>
              </div>
            </li>



            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li
              className={` nav-item  ${
                isPathActive("/vifleet") ||
                isPathActive("/vehiclesassign") ||
                isPathActive("/Vehiclesdetails") ||
                isPathActive("/vifleet/allstut") ||
                isPathActive("/vifleet/enrout") ||
                isPathActive("/vifleet/aval") ||
                isPathActive("/vifleet/outservice") ||
                isPathActive("/vehiclesassign/assign") ||
                isPathActive("/vehiclesassign/noassign") 
                  ? "active"
                  : ""
              }`}
            >
              <div
                className="nav-link collapsed "
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-car"></i>
                <span>Vehicles</span>
              </div>
              <div
                id="collapseTwo"
                className={` collapse ${
                  isPathActive("/vifleet") ||
                  isPathActive("/vehiclesassign") ||
                  isPathActive("/Vehiclesdetails") ||
                  isPathActive("/vifleet/allstut") ||
                  isPathActive("/vifleet/enrout") ||
                  isPathActive("/vifleet/aval") ||
                  isPathActive("/vifleet/outservice") ||
                  isPathActive("/vehiclesassign/assign") ||
                  isPathActive("/vehiclesassign/noassign") 
                    ? "show"
                    : "collapse"
                }`}
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className="collapse-item" to="/vifleet">
                    Fleet
                  </NavLink>
                  <NavLink className="collapse-item" to="/vehiclesassign">
                    Vehicles Assignment
                  </NavLink>
                  <NavLink className="collapse-item" to="/Vehiclesdetails">
                    Vehicle Details
                  </NavLink>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li
              className={` nav-item  ${
                isPathActive("/Tripoverview") ||
                isPathActive("/Tripupcoming") ||
                isPathActive("/Tripsschedule")
                  ? "active"
                  : ""
              }`}
            >
              <div
                className="nav-link collapsed"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-suitcase-rolling"></i>
                <span>Trips</span>
              </div>
              <div
                id="collapseUtilities"
                className={` collapse ${
                  isPathActive("/Tripoverview") ||
                  isPathActive("/Tripupcoming") ||
                  isPathActive("/Tripsschedule")
                    ? "show"
                    : "collapse"
                }`}
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className="collapse-item" to="/Tripoverview">
                    Overview
                  </NavLink>
                  <NavLink className="collapse-item" to="/Tripupcoming">
                    Upcoming Trip
                  </NavLink>
                  <NavLink className="collapse-item" to="/Tripsschedule">
                    Schedule Trip
                  </NavLink>
                </div>
              </div>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li
              className={` nav-item  ${
                isPathActive("/maintainplan") ? "active" : ""
              }`}
            >
              <div
                className="nav-link collapsed"
                data-toggle="collapse"
                data-target="#collapseMainten"
                aria-expanded="true"
                aria-controls="collapseMainten"
              >
                <i className="fas fa-tools"></i>
                <span>Maintenance</span>
              </div>
              <div
                id="collapseMainten"
                className={` collapse ${
                  isPathActive("/maintainplan") ? "show" : "collapse"
                }`}
                aria-labelledby="headingMainten"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className="collapse-item" to="/maintainplan">
                    Maintenance Planner
                  </NavLink>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - history --> */}
            <li
              className={` nav-item  ${
                isPathActive("/vechicleHistory") ||
                isPathActive("/vechicleHistory/History") ||
                isPathActive("/vechicleHistory/Planned")
                 ? "active" : ""
              }`}
            >
              <NavLink className="nav-link" to="/vechicleHistory">
                <i className="fas fa-history"></i>
                <span>Hisory</span>
              </NavLink>
            </li>
            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Nav Item - history --> */}
            <li className="nav-item">
              <div className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Analytics</span>
              </div>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <div
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
              </div>
              {/* <div
                id="collapsePages"
                className="collapse"
                aria-labelledby="headingPages"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">Login Screens:</h6>
                  <a className="collapse-item" href="login.html">
                    Login
                  </a>
                  <a className="collapse-item" href="register.html">
                    Register
                  </a>
                  <a className="collapse-item" href="forgot-password.html">
                    Forgot Password
                  </a>
                  <div className="collapse-divider"></div>
                  <h6 className="collapse-header">Other Pages:</h6>
                  <a className="collapse-item" href="404.html">
                    404 Page
                  </a>
                  <a className="collapse-item" href="blank.html">
                    Blank Page
                  </a>
                </div>
              </div> */}
            </li>

            {/* <!-- Nav Item - Charts --> */}
            <li className="nav-item">
              <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
              </a>
            </li>

            {/*  <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <a className="nav-link" href="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span>
              </a>
            </li>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider d-none d-md-block" />
          </ul>
          {/*   <!-- Sidebar Toggler (Sidebar) --> */}
          {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

          {/*  <!-- Sidebar Message --> */}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
