import { useState } from "react";
import Navbar from "../navbar";
import Footer from '../footer';



const TripsUpcoming = () => {

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
              <a
                href="#"
                className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
              >
                <i className="fas fa-download fa-sm text-white-50"></i> Generate
                Report
              </a>
            </div>

            {/* <!------Content work---------->*/}
   
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
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
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
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <button type="button" className="btn btn-outline-danger">
                    Clear
                  </button>
                </div>
              </div>
              <div className="listContainbox">
                 <div className="AllTripsContainer">
                <div className="container p-0">
                       {/*  <!-- Content table Row --> */}
                        <div className="row">

                            {/*   <!-- Area Chart --> */}
                            <div className="col-xl-12 col-lg-12">
                                <div className="event-cart-container">
                                    {/* ---Start events card header--- */}
                                    <div className="card newEventListcard border-0 shadow mb-4">
                                        {/*  <!-- Card Header - Dropdown --> */}
                                        <div className="card-header py-3 d-flex flex-row align-items-center bg-primary">
                                            <div className="select-all">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""/>
                                                </div>
                                            </div>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">TRIP</h6>
                                            <h6 className="m-0 font-weight-bold text-white listEventType">VEHICLE</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">START DATE</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">END DATE</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">DURATION</h6>
                                            <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                        </div>

                                    </div>
                                    {/* ---End events card header--- */}
                                    {/* ---Start events card no of list list--- */}
                                    <div className="list-of-eventsCarts">
                                        <div className="card newEventListcard shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">TRIP</h6>
                                                <h6 className="m-0 font-weight-bold text-white listEventType">VEHICLE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">START DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">END DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DURATION</h6>
                                                <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body ">
                                                <div className="indexList py-3 d-flex flex-row align-items-center ">
                                                    <div className="select">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""/>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0"><small>#786473</small></p><p className="mb-0">SCHEDULED</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">RT 2236</h6>
                                                    <h6 className="m-0  text-primary listbdy">John Doe</h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">1d 1h 30 min</h6>
                                                    <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card newEventListcard shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">TRIP</h6>
                                                <h6 className="m-0 font-weight-bold text-white listEventType">VEHICLE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">START DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">END DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DURATION</h6>
                                                <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body ">
                                                <div className="indexList py-3 d-flex flex-row align-items-center ">
                                                    <div className="select">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""/>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0"><small>#786473</small></p><p className="mb-0">SCHEDULED</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">RT 2236</h6>
                                                    <h6 className="m-0  text-primary listbdy">John Doe</h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">1d 1h 30 min</h6>
                                                    <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card newEventListcard shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">TRIP</h6>
                                                <h6 className="m-0 font-weight-bold text-white listEventType">VEHICLE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">START DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">END DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DURATION</h6>
                                                <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body ">
                                                <div className="indexList py-3 d-flex flex-row align-items-center ">
                                                    <div className="select">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""/>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0"><small>#786473</small></p><p className="mb-0">SCHEDULED</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">RT 2236</h6>
                                                    <h6 className="m-0  text-primary listbdy">John Doe</h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">1d 1h 30 min</h6>
                                                    <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card newEventListcard shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">TRIP</h6>
                                                <h6 className="m-0 font-weight-bold text-white listEventType">VEHICLE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">START DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">END DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DURATION</h6>
                                                <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body ">
                                                <div className="indexList py-3 d-flex flex-row align-items-center ">
                                                    <div className="select">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""/>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0"><small>#786473</small></p><p className="mb-0">SCHEDULED</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">RT 2236</h6>
                                                    <h6 className="m-0  text-primary listbdy">John Doe</h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">1d 1h 30 min</h6>
                                                    <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card newEventListcard shadow mb-4">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">TRIP</h6>
                                                <h6 className="m-0 font-weight-bold text-white listEventType">VEHICLE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">START DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">END DATE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DURATION</h6>
                                                <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body ">
                                                <div className="indexList py-3 d-flex flex-row align-items-center ">
                                                    <div className="select">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""/>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0"><small>#786473</small></p><p className="mb-0">SCHEDULED</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">RT 2236</h6>
                                                    <h6 className="m-0  text-primary listbdy">John Doe</h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy"><p className="mb-0">1/1/20</p><p className="mb-0">5:00PM</p></h6>
                                                    <h6 className="m-0  text-primary listbdy">1d 1h 30 min</h6>
                                                    <div className="dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                    {/* ---end events card no of list list--- */}
                                </div>
                            </div>

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
 
export default TripsUpcoming;