const Assign = () => {
    return ( 
        <>
            <div className="AllEventsContainer">
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
                                                <h6 className="m-0 pl-2 font-weight-bold text-white  listEventType">VEHICLE</h6>
                                                <h6 className="m-0 pl-2 font-weight-bold text-white listEventType">TYPE</h6>
                                                <h6 className="m-0 pl-2  font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="m-0 pl-2  font-weight-bold text-white  listEventType">DATE&TIME</h6>
                                                <h6 className="m-0 pl-2  font-weight-bold text-white  listEventType"></h6>
                                                <div className="pl-2  dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                        </div>

                                    </div>
                                    {/* ---End events card header--- */}
                                    {/* ---Start events card no of list list--- */}
                                    <div className="list-of-eventsCarts">
                                        <div className="card newEventListcard shadow mb-4 ">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType">VEHICLE</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white listEventType">TYPE</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType">DATE&TIME</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType"></h6>
                                                <div className="pl-2  dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body p-0 border-0">
                                                <div id="accordion">
                                                   <div className="card ">
                                                    <div className="card-header d-flex align-items-center pb-0 pt-0" id="headingOne">
                                                      <div className="select">
                                                          <div className="form-check pb-2">
                                                              <input className="form-check-input" type="checkbox" value=""/>
                                                          </div>
                                                      </div>
                                                      <h6 className="m-0  text-primary listbdy">AB 2515</h6>
                                                      <h6 className="m-0  text-primary listbdy">En Route</h6>
                                                      <h6 className="m-0  text-primary listbdy">John Doe</h6>
                                                      <h6 className="m-0  text-primary listbdy">5/13/2023 2:54PM</h6>
                                                      <div className="m-0  text-primary listbdy">
                                                         <button className="btn btn-danger">REMOVE</button>
                                                      </div>
                                                       <div className="drop-container sidebar"> 
                                                         <div className="nav-item">
                                                             <a className="nav-link p-0" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne"></a>
                                                         </div>
                                                       </div>
                                                    </div>

                                                    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
                                                      <div className="card-body p-4 border-0">
                                                         <div className="drive-container">
                                                         <div className="drivename-titile">
                                                            <h6>ALL DRIVERS</h6>
                                                         </div>
                                                         <div className="drive-info">
                                                              <div className="multidriver-container">
                                                                  <ul className="list-group list-group-flush">
                                                                    <li className="list-group-item p-0 ">
                                                                        <div className="card">
                                                                          <div className="card-header  bg-dark text-white">
                                                                             <div className="list-container d-flex align-items-center">
                                                                                  <div className="driver-name w-100">
                                                                                    <h6 className="mb-0 font-weight-bold">Driver</h6>
                                                                                  </div>
                                                                                  <div className="driver-date w-100">
                                                                                     <h6 className="mb-0 font-weight-bold pl-1">Date</h6>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                          <div className="card-body">
                                                                              <ul className="list-group list-group-flush">
                                                                                   <li className="list-group-item pl-0 br-0 pb-2 pt-2">
                                                                                     <div className="list-container d-flex align-items-center">
                                                                                    <div className="driver-name w-100">
                                                                                      <h6 className="mb-0">John Doe</h6>
                                                                                    </div>
                                                                                    <div className="driver-date w-100">
                                                                                      <span>05/25/2023</span> - <span>05/28/2023</span>
                                                                                    </div>
                                                                                     </div>
                                                                                   </li>
                                                                                   <li className="list-group-item pl-0 br-0 pb-2 pt-2">
                                                                                     <div className="list-container d-flex align-items-center">
                                                                                    <div className="driver-name w-100">
                                                                                      <h6 className="mb-0">George Williams</h6>
                                                                                    </div>
                                                                                    <div className="driver-date w-100">
                                                                                      <span>05/25/2023</span> - <span>05/28/2023</span>
                                                                                    </div>
                                                                                     </div>
                                                                                   </li>
                                                                              </ul>
                                                                          </div>
                                                                        </div>
                                                                       
                                                                    </li>
                                                                  </ul>
                                                              </div>
                                                         </div>
                                                         </div>
                                                      </div>
                                                    </div>
                                                   </div>
                                                </div>
                                            </div>

                                        </div>
                                        <div className="card newEventListcard shadow mb-4 ">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType">VEHICLE</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white listEventType">TYPE</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType">DATE&TIME</h6>
                                                <h6 className="pl-2  m-0 font-weight-bold text-white  listEventType"></h6>
                                                <div className="pl-2  dropdown no-arrow"><a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></a><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><a className="dropdown-item" href="#">Action</a><a className="dropdown-item" href="#">Another action</a><div className="dropdown-divider"></div><a className="dropdown-item" href="#">Something else here</a></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body p-0 border-0">
                                                <div id="accordion">
                                                   <div className="card ">
                                                    <div className="card-header d-flex align-items-center pb-0 pt-0" id="headingOne">
                                                      <div className="select">
                                                          <div className="form-check pb-2">
                                                              <input className="form-check-input" type="checkbox" value=""/>
                                                          </div>
                                                      </div>
                                                      <h6 className="m-0  text-primary listbdy">AB 2515</h6>
                                                      <h6 className="m-0  text-primary listbdy">En Route</h6>
                                                      <h6 className="m-0  text-primary listbdy">John Doe</h6>
                                                      <h6 className="m-0  text-primary listbdy">5/13/2023 2:54PM</h6>
                                                      <div className="m-0  text-primary listbdy">
                                                         <button className="btn btn-danger">REMOVE</button>
                                                      </div>
                                                       <div className="drop-container sidebar"> 
                                                         <div className="nav-item">
                                                             <a className="nav-link p-0 collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo"></a>
                                                         </div>
                                                       </div>
                                                    </div>

                                                    <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                                                      <div className="card-body p-4 border-0">
                                                         <div className="drive-container">
                                                         <div className="drivename-titile">
                                                            <h6>ALL DRIVERS</h6>
                                                         </div>
                                                         <div className="drive-info">
                                                              <div className="multidriver-container">
                                                                  <ul className="list-group list-group-flush">
                                                                    <li className="list-group-item p-0 ">
                                                                        <div className="card">
                                                                          <div className="card-header  bg-dark text-white">
                                                                             <div className="list-container d-flex align-items-center">
                                                                                  <div className="driver-name w-100">
                                                                                    <h6 className="mb-0 font-weight-bold">Driver</h6>
                                                                                  </div>
                                                                                  <div className="driver-date w-100">
                                                                                     <h6 className="mb-0 font-weight-bold pl-1">Date</h6>
                                                                                  </div>
                                                                              </div>
                                                                          </div>
                                                                          <div className="card-body">
                                                                              <ul className="list-group list-group-flush">
                                                                                   <li className="list-group-item pl-0 br-0 pb-2 pt-2">
                                                                                     <div className="list-container d-flex align-items-center">
                                                                                    <div className="driver-name w-100">
                                                                                      <h6 className="mb-0">John Doe</h6>
                                                                                    </div>
                                                                                    <div className="driver-date w-100">
                                                                                      <span>05/25/2023</span> - <span>05/28/2023</span>
                                                                                    </div>
                                                                                     </div>
                                                                                   </li>
                                                                                   <li className="list-group-item pl-0 br-0 pb-2 pt-2">
                                                                                     <div className="list-container d-flex align-items-center">
                                                                                    <div className="driver-name w-100">
                                                                                      <h6 className="mb-0">George Williams</h6>
                                                                                    </div>
                                                                                    <div className="driver-date w-100">
                                                                                      <span>05/25/2023</span> - <span>05/28/2023</span>
                                                                                    </div>
                                                                                     </div>
                                                                                   </li>
                                                                              </ul>
                                                                          </div>
                                                                        </div>
                                                                       
                                                                    </li>
                                                                  </ul>
                                                              </div>
                                                         </div>
                                                         </div>
                                                      </div>
                                                    </div>
                                                   </div>
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

        </>
     );
}
 
export default Assign;