import React from 'react';
import  './Dashboard.css';

// --- Start contents
import Vicoview from './Admincomponets/Vicoview';
import RealTimedata from './Admincomponets/realTimedata';
import TestUi from './Admincomponets/Test';
import ApiTest from './Admincomponets/axiosTest';

// --- End Contents


import AdminSideBar from './Admincomponets/Sidebar';
import LogoutModal from './Admincomponets/LogoutModal';
import { BrowserRouter , Route , Routes } from 'react-router-dom';

function Dashboard() {

    return (
        <div>
           
            <div id="page-top">

                {/*  <!-- Page Wrapper --> */}
                <div id="wrapper">

                    {/*  <!-- Sidebar --> */}
                      <AdminSideBar />
                    {/*  <!-- End of Sidebar --> */}

                    {/*  <!--Content wapper Component --> */}
                     {/* Router route the page */}
                    <BrowserRouter>
                        <Routes>
                            <Route path='/' element={ <Vicoview />}/>
                            <Route path='/realTimeData' element={ <RealTimedata />}/>
                            <Route path='/test' element={ <TestUi />}/>
                            <Route path='/apitest' element={ <ApiTest />}/>
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

                {/*  <!-- Logout Modal--> */}
                < LogoutModal />
               

            </div>
        </div>
    )
}

export default Dashboard;
