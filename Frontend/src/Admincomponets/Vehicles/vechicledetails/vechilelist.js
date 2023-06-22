import { Link } from "react-router-dom";

const vechileList = () => {
    return ( 
        <>
            <div className="AllVicleContainer">
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
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                            <h6 className="m-0 font-weight-bold text-white listEventType">TYPE</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">MESSAGE</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType">DATE&TIME</h6>
                                            <h6 className="m-0 font-weight-bold text-white  listEventType"></h6>
                                        </div>

                                    </div>
                                    {/* ---End events card header--- */}
                                    {/* ---Start events card no of list list--- */}
                                    <div className="list-of-vicleaddscards">
                                        <div className="card newEventListcard shadow mb-4 rounded-0">
                                            {/*  <!-- Card Header - Dropdown --> */}
                                            <div className="card-header card-responsive py-3  flex-row align-items-center bg-primary">
                                                <div className="select-all">
                                                    <div className="form-check pb-1">
                                                        <input className="form-check-input" type="checkbox" value=""/>
                                                    </div>
                                                </div>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">VEHICLE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DRIVER</h6>
                                                <h6 className="m-0 font-weight-bold text-white listEventType">TYPE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">MESSAGE</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType">DATE&TIME</h6>
                                                <h6 className="m-0 font-weight-bold text-white  listEventType"></h6>
                                            </div>
                                            {/*  <!-- Card Body --> */}
                                            <div className="card-body ">
                                                <div className="indexList py-2 d-flex flex-row align-items-center ">
                                                    <div className="select">
                                                        <div className="form-check pb-1">
                                                            <input className="form-check-input" type="checkbox" value=""/>
                                                        </div>
                                                    </div>
                                                    <h6 className="m-0  text-primary listbdy">AB 2515</h6>
                                                    <h6 className="m-0  text-primary listbdy">Joe badan</h6>
                                                    <h6 className="m-0  text-primary listbdy">Truck</h6>
                                                    <h6 className="m-0  text-primary listbdy">Maintenance passed</h6>
                                                    <h6 className="m-0  text-primary listbdy">5/13/2023 2:54PM</h6>
                                                    <div className="m-0  text-primary listbdy">
                                                    <Link className="text-decoration-none text-white" to="/Vehiclesdetails/VechileInfo"><button className="d-block float-right btn btn-sm btn-primary shadow-sm">See Info</button></Link>
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
 
export default vechileList;