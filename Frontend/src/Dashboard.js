import React from 'react';
import   './Dashboard.css';

// --- Start dashboardcontents
import Vicoview from './Admincomponets/Vicoview';
import RealTimedata from './Admincomponets/realTimedata';
import Events from './Admincomponets/events';
import Allevents from './Admincomponets/events/Allevents';
import Feaevents from './Admincomponets/events/Feaevents';
import AllVehicle from './Admincomponets/vicoview/Allvyc';
import Driving from './Admincomponets/vicoview/driving';
import Parked from './Admincomponets/vicoview/parked';
// --- End dashboard Contents

//--start vichcles details

import FleetDel from './Admincomponets/Vehicles/fleet';
import ALlStatus from './Admincomponets/Vehicles/fleet/Allstat';
import VicAvaliable from './Admincomponets/Vehicles/fleet/Avail';
import Enroute from './Admincomponets/Vehicles/fleet/Enroute';
import OutofService from './Admincomponets/Vehicles/fleet/otofser';
import Vehiclesassign from './Admincomponets/Vehicles/vehiclesassignment';
import Vehiclesdetails from './Admincomponets/Vehicles/vehicledetails';
import Assign from './Admincomponets/Vehicles/vehiclesassign/assign';
import Noassign from './Admincomponets/Vehicles/vehiclesassign/noassign';

//--end vichcles details

// Test case Start 
import TestUi from './Admincomponets/Test';
import ApiTest from './Admincomponets/axiosTest';
// test case end

import AdminSideBar from './Admincomponets/Sidebar';
import LogoutModal from './Admincomponets/LogoutModal';
import { BrowserRouter , Route , Routes} from 'react-router-dom';



// Not found
import NotFound from './Admincomponets/NotFound';






function Dashboard() {

    return (
        <div>
           
            <div id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!--Content wapper Component --> */}
                     {/* Router route the page */}
                    <BrowserRouter  basename="/">
                        {/*  <!-- Sidebar --> */}
                        <AdminSideBar />
                        {/*  <!-- End of Sidebar --> */}
                        <Routes>
                            {/* --start of vehicles Dashboard-- */}
                            <Route path='/' element={ <Vicoview />}>
                               <Route index   element={<AllVehicle />}  />
                               <Route path='/vicoverview/AllVehicle' element={<AllVehicle />} />
                               <Route path='/vicoverview/Driving' element={<Driving />} /> 
                               <Route path='/vicoverview/Parked' element={<Parked />} /> 
                            </Route>
                            <Route path='/realTimeData' element={ <RealTimedata />}/>
                            <Route path='/events' element={ <Events />}>
                               <Route index   element={<Allevents />}  />
                               <Route path='/events/allevents' element={<Allevents />} />
                               <Route path='/events/feaevents' element={<Feaevents />} /> 
                            </Route>
                            {/* --ent of vehicles Dashboard-- */}
                            {/* --start of fleet vehicles details-- */}
                            <Route path='/vifleet' element={ <FleetDel />}>
                               <Route index   element={<ALlStatus />}  />
                               <Route path='/vifleet/allstut' element={<ALlStatus />} />
                               <Route path='/vifleet/enrout' element={<Enroute />} />
                               <Route path='/vifleet/aval' element={<VicAvaliable />} /> 
                               <Route path='/vifleet/outservice' element={<OutofService />} />
                            </Route>
                            <Route path='/vehiclesassign' element={<Vehiclesassign />} >
                            <Route index   element={<Assign />}  />
                               <Route path='/vehiclesassign/assign' element={<Assign />} />
                               <Route path='/vehiclesassign/noassign' element={<Noassign />} />
                            </Route>
                            <Route path='/Vehiclesdetails' element={<Vehiclesdetails />} />
                            
                            {/* --end of fleet vehicles details-- */}
                            <Route path='/apitest' element={ <ApiTest />}/>
                            <Route path='/test' element={ <TestUi />}/>
                            <Route path='*' element={ <NotFound />}/>
                        </Routes>
                    </BrowserRouter>
                      {/* <DashContent /> */}
                    {/*  <!-- End of Content wapper Component --> */}
                    

                </div>
                {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
                <a className="scroll-to-top rounded" href="#page-top">
                    <i className="fas fa-angle-up"></i>
                </a>
                <BrowserRouter>
                {/*  <!-- Logout Modal--> */}
                < LogoutModal />
               </BrowserRouter>
               

            </div>
        </div>
    )
}

export default Dashboard;
