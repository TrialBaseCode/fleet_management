import { useState } from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import { Link, Outlet } from "react-router-dom";



const TripsOverview = () => {

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

            {/*  <!-- Content Row --> */}

            <div className="row">
              {/*  <!-- Pie Chart --> */}
              <div className="col-xl-4 col-lg-6">
                <div className="card shadow mb-4 h-100">
                  {/*  <!-- Card Header - Dropdown --> */}
                  <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 className="m-0 font-weight-bold text-primary">
                      Trips
                    </h6>
                    <div className="dropdown no-arrow">
                      <Link
                        className="dropdown-toggle"
                        to="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                      </Link>
                      <div
                        className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <Link className="dropdown-item" to="#">
                          Action
                        </Link>
                        <Link className="dropdown-item" to="#">
                          Another action
                        </Link>
                        <div className="dropdown-divider"></div>
                        <Link className="dropdown-item" to="#">
                          Something else here
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/*  <!-- Card Body --> */}
                  <div className="card-body mybodytripsscrollbarcontian p-2">
                    <div className="filter mb-2">
                 
                    </div>
                    <div className="chart-pie chart-work-do chart-work-trips-do pt-1 pb-2 overflow-auto ">
                      <div className="listoftripsContainer">
                         <div className="card cardTripContain mb-3 active">
                              <div className="card-body">
                                 <div className="card-title d-flex justify-content-between">
                                     <div className="card-title-head d-flex">
                                       <div className="trps_icons pr-2">
                                          <div className="tr-icons">
                                             <i className="fas fa-truck "></i>
                                          </div>
                                       </div>
                                       <h4 className="font-weight-bold mb-0 mt-1 text-basic">AT 5863</h4>
                                     </div>
                                     <div className="trips_live_txt">
                                        <small className="mb-0 text-right d-block">LIVE</small>
                                        <small className=" d-block">#786473</small>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-start mb-2">
                                     <div className="card-Address-start-contain d-flex">
                                           <div className="card-Address-map-icon">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-end">
                                    <div className="card-Address-end-contain d-flex">
                                           <div className="card-Address-map-icon ">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                  <Link to="#" className="card-link float-right font-weight-bold">See more</Link>
                              </div>
                         </div>
                         <div className="card cardTripContain mb-3">
                              <div className="card-body">
                                 <div className="card-title d-flex justify-content-between">
                                     <div className="card-title-head d-flex">
                                       <div className="trps_icons pr-2">
                                          <div className="tr-icons">
                                             <i className="fas fa-truck "></i>
                                          </div>
                                       </div>
                                       <h4 className="font-weight-bold mb-0 mt-1 text-basic">AT 5863</h4>
                                     </div>
                                     <div className="trips_live_txt">
                                        <small className="mb-0 text-right d-block">LIVE</small>
                                        <small className=" d-block">#786473</small>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-start mb-2">
                                     <div className="card-Address-start-contain d-flex">
                                           <div className="card-Address-map-icon">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-end">
                                    <div className="card-Address-end-contain d-flex">
                                           <div className="card-Address-map-icon ">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                  <Link to="#" className="card-link float-right font-weight-bold">See more</Link>
                              </div>
                         </div>
                         <div className="card cardTripContain mb-3">
                              <div className="card-body">
                                 <div className="card-title d-flex justify-content-between">
                                     <div className="card-title-head d-flex">
                                       <div className="trps_icons pr-2">
                                          <div className="tr-icons">
                                             <i className="fas fa-truck "></i>
                                          </div>
                                       </div>
                                       <h4 className="font-weight-bold mb-0 mt-1 text-basic">AT 5863</h4>
                                     </div>
                                     <div className="trips_live_txt">
                                        <small className="mb-0 text-right d-block">LIVE</small>
                                        <small className=" d-block">#786473</small>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-start mb-2">
                                     <div className="card-Address-start-contain d-flex">
                                           <div className="card-Address-map-icon">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-end">
                                    <div className="card-Address-end-contain d-flex">
                                           <div className="card-Address-map-icon ">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                  <Link to="#" className="card-link float-right font-weight-bold">See more</Link>
                              </div>
                         </div>
                         <div className="card cardTripContain mb-3">
                              <div className="card-body">
                                 <div className="card-title d-flex justify-content-between">
                                     <div className="card-title-head d-flex">
                                       <div className="trps_icons pr-2">
                                          <div className="tr-icons">
                                             <i className="fas fa-truck "></i>
                                          </div>
                                       </div>
                                       <h4 className="font-weight-bold mb-0 mt-1 text-basic">AT 5863</h4>
                                     </div>
                                     <div className="trips_live_txt">
                                        <small className="mb-0 text-right d-block">LIVE</small>
                                        <small className=" d-block">#786473</small>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-start mb-2">
                                     <div className="card-Address-start-contain d-flex">
                                           <div className="card-Address-map-icon">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-end">
                                    <div className="card-Address-end-contain d-flex">
                                           <div className="card-Address-map-icon ">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                  <Link to="#" className="card-link float-right font-weight-bold">See more</Link>
                              </div>
                         </div>
                         <div className="card cardTripContain mb-3">
                              <div className="card-body">
                                 <div className="card-title d-flex justify-content-between">
                                     <div className="card-title-head d-flex">
                                       <div className="trps_icons pr-2">
                                          <div className="tr-icons">
                                             <i className="fas fa-truck "></i>
                                          </div>
                                       </div>
                                       <h4 className="font-weight-bold mb-0 mt-1 text-basic">AT 5863</h4>
                                     </div>
                                     <div className="trips_live_txt">
                                        <small className="mb-0 text-right d-block">LIVE</small>
                                        <small className=" d-block">#786473</small>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-start mb-2">
                                     <div className="card-Address-start-contain d-flex">
                                           <div className="card-Address-map-icon">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                 <div className="card-text card-text-end">
                                    <div className="card-Address-end-contain d-flex">
                                           <div className="card-Address-map-icon ">
                                                <div className="card-Address-icon">
                                                    <i className="fas fa-map-marker-alt"></i>
                                                </div>
                                           </div>
                                           <div className="card-address-cover pl-2">
                                                <div className="card-address-title">
                                                   <p className="mb-0 text-basic font-weight-bolder">1961 Chain Bridge Rd, Tysons, VA</p>
                                                </div>
                                                <div className="card-address-time">
                                                   <p className="mb-0 text-basic"><small>6/17/20 2:00PM</small></p>
                                                </div>
                                           </div>
                                     </div>
                                 </div>
                                  <Link to="#" className="card-link float-right font-weight-bold">See more</Link>
                              </div>
                         </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*   <!-- Area Chart --> */}
              <div className="col-xl-8 col-lg-6">
                <div className="card shadow mb-4">
                  <div className="card">
                     <div className="card-header pb-3 px-0 pt-0">
                      <div className="events_nav_list">
                          <nav className="list-group list-group-horizontal mytabtlist mt-0">
                            <Link
                              className="list-group-item active text-decoration-none"
                              data-toggle="list"
                              to="/Tripoverview/Tripsmapoverview"
                            >
                              <span>MAPS</span>
                            </Link>
                            <Link
                              className="list-group-item text-decoration-none"
                              data-toggle="list"
                              to="/Tripoverview/Tripsdetailsoverview"
                            >
                              <span>DETAILS</span>
                            </Link>
                          </nav>
                      </div>
                     </div>
                  </div>
                  {/*  <!-- Card Body --> */}
                  <div className="card-body myhiddenmapbody">
                    <div className="chart-area">
                       <Outlet />
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
 
export default TripsOverview;