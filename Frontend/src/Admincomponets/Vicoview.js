import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import Geomap from "./map";



function Vicoview() {
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
      
      {/*  <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column content-wrapper-set">
        {/*  <!-- Main Content --> */}
        <div id="content">
          {/*  <!-- Admin Navbar components --> */}
          <Navbar navStyle={changeStyle1} navStyleTwo={changeStyle}/>
          {/*  <!-- End of Admin Navbar components --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/*  <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
              <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
            </div>

            {/*  <!-- Content Row --> */}

            <div className="row">
              {/*  <!-- Pie Chart --> */}
              <div className="col-xl-5 col-lg-6">
                <div className="card shadow mb-4 h-100">
                  {/*  <!-- Card Header - Dropdown --> */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Active Vehicles
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
                  <div className="card-body mybodyscrollbarcontian ">
                    <div className="filter mb-2">
                      <ul className="list-group list-group-horizontal-md justify-content-center">
                        <li className="list-group-item active">ALL</li>
                        <li className="list-group-item">DRIVING</li>
                        <li className="list-group-item">PARKED</li>
                      </ul>
                    </div>
                    <div className="chart-pie chart-work-do pt-1 pb-2 overflow-auto ">
                      <div className="cardContainer">
                        <div className="list-group mylist-container">
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                          <a
                            href="#"
                            className="list-group-item list-group-item-action list-group-item-light"
                          >
                            <div className="d-flex ">
                              <div className="icon truck-border rounded-circle  position-relative">
                                <i className="fas fa-truck"></i>
                                <span className="position-absolute mycircle-thumb bg-danger border border-light rounded-circle">
                                  <span className="visually-hidden">
                                    New alerts
                                  </span>
                                </span>
                              </div>
                              <div className="txt-container pl-2">
                                <h4 className="font-weight-bold m-0 list-title">
                                  CR 1565
                                </h4>
                                <p className="m-0 list-para">
                                  17 May,20/1h 15min
                                </p>
                              </div>
                              <div className="txt-container newSignright">
                                <div className="sign">
                                  <i className="fas fa-exclamation-triangle float-end"></i>
                                </div>
                                <div className="badge btn  bg-secondary">
                                  <span className="text-white">Trip</span>
                                  <i className="fas fa-location-arrow p-1 text-white"></i>
                                </div>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*   <!-- Area Chart --> */}
              <div className="col-xl-7 col-lg-6">
                <div className="card shadow mb-4">
                  {/* <! All Streets pass data > */}
                  <div className="route-container">
                      {/*  <!-- Content Row --> */}
                      <div className="row">
                        {/*  <!-- Vicycle error Card Example --> */}
                        <div className="col-xl-3 col-md-6 viclyeallsee">
                          <div className="card border-left-primary shadow">
                            <div className="card-body mycard-body">
                              <div className="row  align-items-center">
                                <div className="col ">
                                  <div className=" my-lefttextxs text-xs font-weight-bold text-danger text-uppercase mb-1">
                                    Vehicles errors
                                  </div>
                                  <div className="my-lefttextval h5 mb-0 font-weight-bold text-gray-800">
                                    2
                                  </div>
                                </div>
                                <div className="col-auto pb-3 pt-3 mr-2">
                                  <i className="fas fa-times  fa-2x text-danger"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*  <!-- Vicycle warning Card Example --> */}
                        <div className="col-xl-3 col-md-6 viclyeallsee">
                          <div className="card border-left-info shadow">
                            <div className="card-body mycard-body">
                              <div className="row  align-items-center">
                                <div className="col">
                                  <div className="my-lefttextxs text-xs font-weight-bold text-info text-uppercase mb-1">
                                  Vehicles warnings
                                  </div>
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="my-lefttextval h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                        20
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-auto pb-3 pt-3 mr-2">
                                  <i className="fas fa-exclamation-triangle  fa-2x text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                         {/*  <!-- Vicycle route Card Example --> */}
                        <div className="col-xl-3 col-md-6 viclyeallsee">
                          <div className="card border-left-info shadow">
                            <div className="card-body mycard-body">
                              <div className="row  align-items-center">
                                <div className="col">
                                  <div className="my-lefttextxs text-xs font-weight-bold text-info text-uppercase mb-1">
                                    Side route
                                  </div>
                                  <div className="row align-items-center">
                                    <div className="col-auto">
                                      <div className="my-lefttextval h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                        20
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="col-auto pb-3 pt-3 mr-2">
                                  <i className="fas fa-exclamation-triangle  fa-2x text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/*  <!-- Being Late Card Example --> */}
                        <div className="col-xl-3 col-md-6 viclyeallsee">
                          <div className="card border-left-warning shadow">
                            <div className="card-body mycard-body">
                              <div className="row  align-items-center">
                                <div className="col ">
                                  <div className="my-lefttextxs text-xs font-weight-bold text-warning text-uppercase mb-1">
                                    Being late
                                  </div>
                                  <div className="my-lefttextval h5 mb-0 font-weight-bold text-gray-800">
                                    18
                                  </div>
                                </div>
                                <div className="col-auto pb-3 pt-3 mr-2">
                                  <i className="fas fa-exclamation-triangle  fa-2x text-warning"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  </div>
                  {/*  <!-- Card Body --> */}
                  <div className="card-body myhiddenmapbody">
                    <div className="chart-area">
                        <Geomap />
                    </div>
                  </div>
                </div>
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
}

export default Vicoview;
