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
                isPathActive("/admin") ||
                isPathActive("/admin/AllVehicle") ||
                isPathActive("/admin/Driving") ||
                isPathActive("/admin/Parked") ||
                isPathActive("/admin/realTimeData") ||
                isPathActive("/admin/events") ||
                isPathActive("/admin/events/allevents") || 
                isPathActive("/admin/events/feaevents")
                  ? "active"
                  : ""
              } `}
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
                  isPathActive("/admin") ||
                  isPathActive("/admin/AllVehicle") ||
                  isPathActive("/admin/Driving") ||
                  isPathActive("/admin/Parked") ||
                  isPathActive("/admin/realTimeData") ||
                  isPathActive("/admin/events") ||
                  isPathActive("/admin/events/allevents") || 
                  isPathActive("/admin/events/feaevents")
                    ? "show"
                    : "collapse"
                }`}
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className={`collapse-item 
                   ${
                    isPathActive("/admin") ||
       
                    isPathActive("/admin/AllVehicle") ||
                    isPathActive("/admin/Driving") ||
                    isPathActive("/admin/Parked") 
                      ? "active"
                      : ""
                  } 
                  `} to="/admin">
                    Vehicles Overview
                  </NavLink>
                  <NavLink className=" collapse-item " to="/admin/realTimeData">
                    Real Time Data
                  </NavLink>
                  <NavLink className=" collapse-item " to="/admin/events">
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
                isPathActive("/admin/vifleet") ||
                isPathActive("/admin/vehiclesassign") ||
                isPathActive("/admin/Vehiclesdetails") ||
                isPathActive("/admin/vifleet/allstut") ||
                isPathActive("/admin/vifleet/enrout") ||
                isPathActive("/admin/vifleet/aval") ||
                isPathActive("/admin/vifleet/outservice") ||
                isPathActive("/admin/vehiclesassign/assign") ||
                isPathActive("/admin/vehiclesassign/noassign") 
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
                  isPathActive("/admin/vifleet") ||
                  isPathActive("/admin/vehiclesassign") ||
                  isPathActive("/admin/Vehiclesdetails") ||
                  isPathActive("/admin/vifleet/allstut") ||
                  isPathActive("/admin/vifleet/enrout") ||
                  isPathActive("/admin/vifleet/aval") ||
                  isPathActive("/admin/vifleet/outservice") ||
                  isPathActive("/admin/vehiclesassign/assign") ||
                  isPathActive("/admin/vehiclesassign/noassign") 
                    ? "show"
                    : "collapse"
                }`}
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className="collapse-item" to="/admin/vifleet">
                    Fleet
                  </NavLink>
                  <NavLink className="collapse-item" to="/admin/vehiclesassign">
                    Vehicles Assignment
                  </NavLink>
                  <NavLink className="collapse-item" to="/admin/Vehiclesdetails">
                    Vehicle Details
                  </NavLink>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li
              className={` nav-item  ${
                isPathActive("/admin/Tripoverview") ||
                isPathActive("/admin/Tripupcoming") ||
                isPathActive("/admin/Tripsschedule")
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
                  isPathActive("/admin/Tripoverview") ||
                  isPathActive("/admin/Tripupcoming") ||
                  isPathActive("/admin/Tripsschedule")
                    ? "show"
                    : "collapse"
                }`}
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className="collapse-item" to="/admin/Tripoverview">
                    Overview
                  </NavLink>
                  <NavLink className="collapse-item" to="/admin/Tripupcoming">
                    Upcoming Trip
                  </NavLink>
                  <NavLink className="collapse-item" to="/admin/Tripsschedule">
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
                isPathActive("/admin/maintainplan") ? "active" : ""
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
                  isPathActive("/admin/maintainplan") ? "show" : "collapse"
                }`}
                aria-labelledby="headingMainten"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <NavLink className="collapse-item" to="/admin/maintainplan">
                    Maintenance Planner
                  </NavLink>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - history --> */}
            <li
              className={` nav-item  ${
                isPathActive("/admin/vechicleHistory") ||
                isPathActive("/admin/vechicleHistory/History") ||
                isPathActive("/admin/vechicleHistory/Planned")
                 ? "active" : ""
              }`}
            >
              <NavLink className="nav-link" to="/admin/vechicleHistory">
                <i className="fas fa-history"></i>
                <span>Hisory</span>
              </NavLink>
            </li>
            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/* <!-- Nav Item - history --> */}
            <li className="nav-item">
              <Link className="nav-link" to="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Analytics</span>
              </Link >
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <Link 
                className="nav-link collapsed"
                to="#"
                data-toggle="collapse"
                data-target="#collapsePages"
                aria-expanded="true"
                aria-controls="collapsePages"
              >
                <i className="fas fa-fw fa-folder"></i>
                <span>Pages</span>
              </Link >
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
              <Link  className="nav-link" to="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Charts</span>
              </Link >
            </li>

            {/*  <!-- Nav Item - Tables --> */}
            <li className="nav-item">
              <Link  className="nav-link" to="tables.html">
                <i className="fas fa-fw fa-table"></i>
                <span>Tables</span>
              </Link >
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
