import { Link } from "react-router-dom";



const vechileInfo = () => {



    return ( 
        <>
             {/* <!-- Begin Page Content --> */}
             <div className="container-fluid">
             {/*  <!-- Page Heading --> */}
               <div className="d-sm-flex align-items-center justify-content-between ">
               <Link className="h4 mb-0 text-primary text-decoration-underline" to="/Vehiclesdetails/VechileList"><u>Back to all Vehicles</u></Link>
               <a
                  href="#"
                  className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
               >
                  <i className="fas fa-download fa-sm text-white-50"></i> Generate
                  Report
               </a>
               </div>
               <div className="info-vechicle-container my-4">
                  <div className="info-vechicle-container">
                     <div className="row">
                        <div className="col-md-5">
                           <div className="card shadow mb-5">
                                 <div className="card-header py-3">
                                     <div className="card-container d-flex align-items-center">
                                         <div className="logowork pr-2"> 
                                              <div className="logo">
                                                  <i className="fas fa-truck fa-2x"></i>
                                              </div>
                                         </div>
                                         <div className="vicle-dit">
                                             <div className="vicle-til">
                                                <h3 className="text-basic font-weight-bold mb-0">Vehicle Name</h3>
                                             </div>
                                             <div className="vicle-det d-flex">
                                                 <h6 className="mb-0"><span>Vehicle no:</span>OD2356</h6>
                                             </div>
                                         </div>
                                     </div>
                                 </div>
                                 <div className="card-body">
                                    <ul className="list-group">
                                       <li className="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Chassis no:</span>0002255566655</h6>
                                       </li>
                                       <li class="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Type:</span>Truck</h6>
                                       </li>
                                       <li class="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Vechicle Rc:</span>Download</h6>
                                       </li>
                                       <li class="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Model:</span>AC123F</h6>
                                       </li>
                                       <li class="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Status:</span>En Route</h6>
                                       </li>
                                       <li class="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Domain:</span>Retail</h6>
                                       </li>
                                       <li class="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Fuel Consumption:</span>5.99 MPG</h6>
                                       </li>
                                       <li class="list-group-item d-flex">
                                         <h6  className="mb-0"><span className="font-weight-bold pr-1 text-basic">Average Speed:</span>62.5 MPH</h6>
                                       </li>
                                    </ul>
                                 </div>
                           </div>
                        </div>
                        <div className="col-md-2 p-0">
                           <div className="card shadow mb-5">
                                 <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Vehicle Condition</h6>
                                 </div>
                                 <div class="card-body">
                                     <div className="readial-work-contaainer d-flex justify-content-center  align-items-center">
                                         
                                     </div> 
                                 </div>
                           </div>
                        </div>
                        <div className="col-md-5">
                           <div className="card shadow mb-5">
                                 <div className="card-header py-3">
                                    <h6 className="m-0 font-weight-bold text-primary">Development Approach</h6>
                                 </div>
                              <div className="card-body">
                                    <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classNamees in order to reduce CSS bloat and poor page performance. Custom CSS classNamees are used to create custom components and custom utility classNamees.</p><p class="mb-0">Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classNamees.</p>
                                 </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
             </div>
             {/*   <!-- /.container-fluid --> */}
        </>
     );
}
 
export default vechileInfo;