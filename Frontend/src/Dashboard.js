import React from 'react';
import   './Dashboard.css';

// --- Start contents
import Vicoview from './Admincomponets/Vicoview';
import RealTimedata from './Admincomponets/realTimedata';
import Events from './Admincomponets/events';
import Allevents from './Admincomponets/events/Allevents';
import Feaevents from './Admincomponets/events/Feaevents';
import AllVehicle from './Admincomponets/voverview/Allvyc';
import Driving from './Admincomponets/voverview/driving';
import Parked from './Admincomponets/voverview/parked';
// --- End Contents

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
                            {/* --start of Dashboard-- */}
                            <Route path='/' element={ <Vicoview />}>
                               <Route index   element={<AllVehicle />}  />
                               <Route path='/voverview/AllVehicle' element={<AllVehicle />} />
                               <Route path='/voverview/Driving' element={<Driving />} /> 
                               <Route path='/voverview/Parked' element={<Parked />} /> 
                            </Route>
                            <Route path='/realTimeData' element={ <RealTimedata />}/>
                            <Route path='/events' element={ <Events />}>
                               <Route index   element={<Allevents />}  />
                               <Route path='/events/allevents' element={<Allevents />} />
                               <Route path='/events/feaevents' element={<Feaevents />} /> 
                            </Route>
                            {/* --ent of Dashboard-- */}
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
