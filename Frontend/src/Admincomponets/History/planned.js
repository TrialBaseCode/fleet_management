const Planned = () => {
    return ( 
        <>
          <div className="AllPlannedContainer">
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
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                        />
                      </div>
                    </div>
                    <h6 className="m-0  font-weight-bold text-white  listEventType">
                      VEHICLE
                    </h6>
                    <h6 className="m-0  font-weight-bold text-white listEventType">
                      DATE
                    </h6>
                    <h6 className="m-0   font-weight-bold text-white  listEventType">
                     TASKS PLANNED
                    </h6>
                    <h6 className="m-0   font-weight-bold text-white  listEventType">
                     COST PLANNED
                    </h6>
                    <h6 className="m-0   font-weight-bold text-white  listEventType"></h6>
                    <div className=" dropdown no-arrow">
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
                </div>
                {/* ---End events card header--- */}
                {/* ---Start events card no of list list--- */}
                <div className="list-of-PlannedCarts">
                  <div className="card newEventListcard shadow mb-4 ">
                    {/*  <!-- Card Header - Dropdown --> */}
                    <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                      <div className="select-all">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                        </div>
                      </div>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType">
                        VEHICLE
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white listEventType">
                        DATE
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType">
                        TASKS PLANNED
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType">
                        COST PLANNED
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType"></h6>
                      <div className="  dropdown no-arrow">
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
                          <div className="dropdown-header">
                            Dropdown Header:
                          </div>
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
                    <div className="card-body p-0 border-0">
                      <div id="accordion">
                        <div className="card ">
                          <div
                            className="card-header d-flex align-items-center pb-0 pt-0"
                            id="headingOne"
                          >
                            <div className="select">
                              <div className="form-check pb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="m-0  text-primary listbdy">
                              <div className="list-title">
                                <h6 className="mb-0 font-weight-bold">
                                  CR 1565
                                </h6>
                              </div>
                              <div className="list-subwork">
                                <small className="mb-0 text-danger">
                                  OUT OF SERVICE 
                                  <span className="pl-1 text-secondary">VAN</span>
                                </small>
                              </div>
                            </div>
                            <div className="m-0  text-primary listbdy">
                              <div className="list-title">
                                <h6 className="mb-0">11/17/20</h6>
                              </div>
                              <div className="list-subwork">
                                <small className="mb-0 text-secondary">
                                  6:00 PM - 9:00 PM
                                </small>
                              </div>
                            </div>
                            <h6 className="m-0  text-primary listbdy">
                              Oil Change, Engine Examination
                            </h6>
                            <h6 className="m-0  text-primary listbdy">
                              $<span>600</span>
                            </h6>

                            <div className="drop-history-container sidebar">
                              <div className="nav-item">
                                <a
                                  className="nav-link p-0"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Details
                                </a>
                              </div>
                            </div>
                            <div className=" dropdown no-arrow">
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
                                <div className="dropdown-header">
                                  Dropdown Header:
                                </div>
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

                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body p-4 border-0">
                              <div className="drive-container">
                                <div className="drivename-titile">
                                  <h6>COSTS</h6>
                                </div>
                                <div className="drive-info">
                                  <div className="multidriver-container">
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item p-0 ">
                                        <div class="card">
                                          <div class="card-header  bg-dark text-white">
                                            <div className="list-container d-flex align-items-center justify-content-between">
                                              <div className="driver-name ">
                                                <h6 className="mb-0 font-weight-bold">
                                                  Repair
                                                </h6>
                                              </div>
                                              <div className="driver-date ">
                                                <h6 className="mb-0 font-weight-bold pr-3 ">
                                                  Price
                                                </h6>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                              <li class="list-group-item pl-0 br-0 pb-2 pt-2">
                                                <div className="list-container d-flex align-items-center justify-content-between">
                                                  <div className="repair-name ">
                                                    <h6 className="mb-0">
                                                      Oil Change
                                                    </h6>
                                                  </div>
                                                  <div className="repair-price ">
                                                    <h6>
                                                      $<span>56</span>
                                                    </h6>
                                                  </div>
                                                </div>
                                              </li>
                                              <li class="list-group-item pl-0 br-0 pb-2 pt-2">
                                                <div className="list-container d-flex align-items-center justify-content-between">
                                                  <div className="repair-name ">
                                                    <h6 className="mb-0">
                                                      Engine Examination
                                                    </h6>
                                                  </div>
                                                  <div className="repair-price ">
                                                    <h6>
                                                      $<span>105</span>
                                                    </h6>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="card-footer  bg-dark text-white">
                                            <div class="list-container d-flex align-items-center justify-content-between">
                                              <div class="driver-name ">
                                                <h6 class="mb-0 font-weight-bold">
                                                  Total
                                                </h6>
                                              </div>
                                              <div class="driver-date pr-3 ">
                                                <h6 class="mb-0 font-weight-bold">
                                                  $<span>600</span>
                                                </h6>
                                              </div>
                                            </div>
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
                          <input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                          />
                        </div>
                      </div>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType">
                        VEHICLE
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white listEventType">
                        DATE
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType">
                        TASKS PLANNED
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType">
                        COST PLANNED
                      </h6>
                      <h6 className="  m-0 font-weight-bold text-white  listEventType"></h6>
                      <div className="  dropdown no-arrow">
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
                          <div className="dropdown-header">
                            Dropdown Header:
                          </div>
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
                    <div className="card-body p-0 border-0">
                      <div id="accordion">
                        <div className="card ">
                          <div
                            className="card-header d-flex align-items-center pb-0 pt-0"
                            id="headingOne"
                          >
                            <div className="select">
                              <div className="form-check pb-2">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  value=""
                                />
                              </div>
                            </div>
                            <div className="m-0  text-primary listbdy">
                              <div className="list-title">
                                <h6 className="mb-0 font-weight-bold">
                                  CR 1565
                                </h6>
                              </div>
                              <div className="list-subwork">
                                <small className="mb-0 text-danger">
                                  OUT OF SERVICE 
                                  <span className="pl-1 text-secondary">VAN</span>
                                </small>
                              </div>
                            </div>
                            <div className="m-0  text-primary listbdy">
                              <div className="list-title">
                                <h6 className="mb-0">11/17/20</h6>
                              </div>
                              <div className="list-subwork">
                                <small className="mb-0 text-secondary">
                                  6:00 PM - 9:00 PM
                                </small>
                              </div>
                            </div>
                            <h6 className="m-0  text-primary listbdy">
                              Oil Change, Engine Examination
                            </h6>
                            <h6 className="m-0  text-primary listbdy">
                              $<span>600</span>
                            </h6>

                            <div className="drop-history-container sidebar">
                              <div className="nav-item">
                                <a
                                  className="nav-link p-0"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Details
                                </a>
                              </div>
                            </div>
                            <div className=" dropdown no-arrow">
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
                                <div className="dropdown-header">
                                  Dropdown Header:
                                </div>
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

                          <div
                            id="collapseOne"
                            className="collapse show"
                            aria-labelledby="headingOne"
                            data-parent="#accordion"
                          >
                            <div className="card-body p-4 border-0">
                              <div className="drive-container">
                                <div className="drivename-titile">
                                  <h6>COSTS</h6>
                                </div>
                                <div className="drive-info">
                                  <div className="multidriver-container">
                                    <ul class="list-group list-group-flush">
                                      <li class="list-group-item p-0 ">
                                        <div class="card">
                                          <div class="card-header  bg-dark text-white">
                                            <div className="list-container d-flex align-items-center justify-content-between">
                                              <div className="driver-name ">
                                                <h6 className="mb-0 font-weight-bold">
                                                  Repair
                                                </h6>
                                              </div>
                                              <div className="driver-date ">
                                                <h6 className="mb-0 font-weight-bold pr-3 ">
                                                  Price
                                                </h6>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="card-body">
                                            <ul class="list-group list-group-flush">
                                              <li class="list-group-item pl-0 br-0 pb-2 pt-2">
                                                <div className="list-container d-flex align-items-center justify-content-between">
                                                  <div className="repair-name ">
                                                    <h6 className="mb-0">
                                                      Oil Change
                                                    </h6>
                                                  </div>
                                                  <div className="repair-price ">
                                                    <h6>
                                                      $<span>56</span>
                                                    </h6>
                                                  </div>
                                                </div>
                                              </li>
                                              <li class="list-group-item pl-0 br-0 pb-2 pt-2">
                                                <div className="list-container d-flex align-items-center justify-content-between">
                                                  <div className="repair-name ">
                                                    <h6 className="mb-0">
                                                      Engine Examination
                                                    </h6>
                                                  </div>
                                                  <div className="repair-price ">
                                                    <h6>
                                                      $<span>105</span>
                                                    </h6>
                                                  </div>
                                                </div>
                                              </li>
                                            </ul>
                                          </div>
                                          <div class="card-footer  bg-dark text-white">
                                            <div class="list-container d-flex align-items-center justify-content-between">
                                              <div class="driver-name ">
                                                <h6 class="mb-0 font-weight-bold">
                                                  Total
                                                </h6>
                                              </div>
                                              <div class="driver-date pr-3 ">
                                                <h6 class="mb-0 font-weight-bold">
                                                  $<span>600</span>
                                                </h6>
                                              </div>
                                            </div>
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
 
export default Planned;