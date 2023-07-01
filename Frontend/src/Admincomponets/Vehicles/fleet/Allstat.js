import { Link } from "react-router-dom";

const ALlStatus = () => {
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
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">VEHICLE</h6>
                                            <h6 className="m-0 font-weight-bold text-white listEventType">TYPE</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">STATUS</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">VEHICLE CONDITION</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">DATE&TIME</h6>
                                            <div className="dropdown no-arrow"><Link className="dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></Link><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><Link className="dropdown-item" to="#">Action</Link><Link className="dropdown-item" to="#">Another action</Link><div className="dropdown-divider"></div><Link className="dropdown-item" to="#">Something else here</Link></div></div>
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
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">VEHICLE</h6>
                                                <h6 className="m-0 font-weight-bold text-white listEventType">TYPE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">STATUS</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">VEHICLE CONDITION</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DATE&TIME</h6>
                                                <div className="dropdown no-arrow"><Link className="dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></Link><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><Link className="dropdown-item" to="#">Action</Link><Link className="dropdown-item" to="#">Another action</Link><div className="dropdown-divider"></div><Link className="dropdown-item" to="#">Something else here</Link></div></div>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body ">
                                                <div className="indexList py-3 d-flex flex-row align-items-center ">
                                                    <div className="select">
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="checkbox" value=""/>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-0  text-primary listbdy">AB 2515</h6>
                                                    <h6 className="m-0  text-primary listbdy">Truck</h6>
                                                    <h6 className="m-0  text-primary listbdy">En Route</h6>
                                                    <h6 className="m-0  text-primary listbdy">Alert</h6>
                                                    <h6 className="m-0  text-primary listbdy">5/13/2023 2:54PM</h6>
                                                    <div className="dropdown no-arrow"><Link className="dropdown-toggle" to="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i></Link><div className="dropdown-menu dropdown-menu-right shadow animated--fade-in" aria-labelledby="dropdownMenuLink"><div className="dropdown-header">Dropdown Header:</div><Link className="dropdown-item" to="#">Action</Link><Link className="dropdown-item" to="#">Another action</Link><div className="dropdown-divider"></div><Link className="dropdown-item" to="#">Something else here</Link></div></div>
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
 
export default ALlStatus;