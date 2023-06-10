import React from 'react';
import  './Dashboard.css';

// --- Start contents
import Vicoview from './Admincomponets/Vicoview';
import RealTimedata from './Admincomponets/realTimedata';
import Events from './Admincomponets/events';
// --- End Contents

// Test case Start 
import TestUi from './Admincomponets/Test';
import ApiTest from './Admincomponets/axiosTest';
// test case end

import AdminSideBar from './Admincomponets/Sidebar';
import LogoutModal from './Admincomponets/LogoutModal';
import { BrowserRouter , Route , Routes } from 'react-router-dom';




function Dashboard() {

    return (
        <div>
           
            <div id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!--Content wapper Component --> */}
                     {/* Router route the page */}
                    <BrowserRouter>
                        {/*  <!-- Sidebar --> */}
                        <AdminSideBar />
                        {/*  <!-- End of Sidebar --> */}
                        <Routes>
                            {/* --start of Dashboard-- */}
                            <Route path='/' element={ <Vicoview />}/>
                            <Route path='/realTimeData' element={ <RealTimedata />}/>
                            <Route path='/events' element={ <Events />}/>
                            {/* --ent of Dashboard-- */}
                            <Route path='/apitest' element={ <ApiTest />}/>
                            <Route path='/test' element={ <TestUi />}/>
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
