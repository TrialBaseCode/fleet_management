import { useState } from "react";
import Navbar from "../navbar";
import Footer from '../footer';
import { Link, NavLink , Outlet, useLocation} from "react-router-dom";



const FleetDel = () => {

  const location = useLocation();
     
  // Define Link helper function to check if the given path is active
   const isPathActive = (path) => {
   const currentPath = location.pathname;
   return currentPath === path;
   };

    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    
    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };


  return (
    <>
      {/*  <!-- Content Wrapper --> */}
      <div
        id="content-wrapper"
        className="d-flex flex-column content-wrapper-set"
      >
        {/*  <!-- Main Content --> */}
        <div id="content">
          {/*  <!-- Admin Navbar components --> */}
          <Navbar navStyle={changeStyle1} navStyleTwo={changeStyle} />
          {/*  <!-- End of Admin Navbar components --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/*  <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between ">
              <h1 className="h3 mb-0 text-basic">Vehicles Details</h1>
              <Link
                to="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </Link>
            </div>

            {/* <!------Content work---------->*/}
            <div className="events_nav_list">
              <nav className="list-group list-group-horizontal mytabtlist">
                <NavLink
                  className={` list-group-item text-decoration-none ${isPathActive('/vifleet') ? ' active' : ''}` } 
                  data-toggle="list"
                  to="/vifleet/allstut"
                >
                  <span>ALL STATUS</span>
                </NavLink>
                <NavLink
                  className={` list-group-item text-decoration-none ${isPathActive('/vifleet/enrout') ? ' active' : ''}` } 
                  data-toggle="list"
                  to="/vifleet/enrout"
                >
                  <span>EN ROUTE</span>
                </NavLink>
                <NavLink
                  className={` list-group-item text-decoration-none ${isPathActive('/vifleet/aval') ? ' active' : ''}` } 
                  data-toggle="list"
                  to="/vifleet/aval"
                >
                  <span>AVAILABLE</span>
                </NavLink>
                <NavLink
                   className={` list-group-item text-decoration-none ${isPathActive('/vifleet/outservice') ? ' active' : ''}` } 
                  data-toggle="list"
                  to="/vifleet/outservice"
                >
                  <span>OUT OF SERVICE</span>
                </NavLink>
              </nav>
            </div>
            <div className="alleventcontainer pl-3 pr-3">
              <div className="filter-work-box">
                <div className="filter d-flex justify-content-between">
                  <div className="filter-drop  d-flex">
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="pr-5">All Events</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </div>
                    </div>
                    <div className="dropdown">
                      <button
                        className="btn btn-outline-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <span className="pr-5">All Vehicles</span>
                      </button>
                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton"
                      >
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-outline-danger">
                    Clear
                  </button>
                </div>
              </div>
              <div className="listContainbox">
                <Outlet />
              </div>
            </div>
          </div>
          {/*   <!-- /.container-fluid --> */}
        </div>
        {/*   <!-- End of Main Content -->

         <!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </div>
      {/*  <!-- End of Content Wrapper --> */}
    </>
  );
};

export default FleetDel;
