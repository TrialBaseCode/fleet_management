import { useState } from 'react';


import '../Dashboard.css';

function Sidebar() {
    const [style, setStyle] = useState("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");

    const changeStyle = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };
    const changeStyle1 = () => {
        if (style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        {
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1");
        }
        else{
            setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion")
        }
    };

    return ( 
          <>
                <div className='SidebarWork'>
                    <ul className={style} id="accordionSidebar">
                        <a className="collapse-item" href="/test">Test</a>
                        <a className="collapse-item" href="/apitest">ApiTest</a>
                        {/*  <!-- Sidebar - Brand --> */}
                        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="#">
                            <div className="sidebar-brand-icon rotate-n-15">
                            <i className="fas fa-truck"></i>
                            </div>
                            <div className="sidebar-brand-text mx-3">Admin</div>
                            <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle || changeStyle1}></button>
                        </div>
                        </a>
                        
                        {/* <!---Test Case ---> */}
                
                        {/*   <!-- Divider --> */}
                        <hr className="sidebar-divider my-0" />
                        
                        {/*  <!-- Nav Item - Dashboard --> */}
                        <li className="nav-item active">
                            <div className="nav-link"  data-toggle="collapse" data-target="#collapsedash"
                                aria-expanded="true" aria-controls="collapsedash">
                                <i className="fas fa-fw fa-tachometer-alt"></i>
                                <span>Dashboard</span>
                            </div>
                            <div id="collapsedash" className="collapse show" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="/">Vehicles Overview</a>
                                    <a className="collapse-item" href="/realTimeData">Real Time Data</a>
                                    <a className="collapse-item" href="cards.html">Events</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />


                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseTwo"
                                aria-expanded="true" aria-controls="collapseTwo">
                                <i className="fas fa-car"></i>
                                <span>Vehicles</span>
                            </div>
                            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="buttons.html">Fleet</a>
                                    <a className="collapse-item" href="cards.html">Vehicles Assignment</a>
                                    <a className="collapse-item" href="cards.html">Vehicle Details</a>
                                </div>
                            </div>
                        </li>



                        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                        <li className="nav-item">
                            <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseUtilities"
                                aria-expanded="true" aria-controls="collapseUtilities">
                            <i className="fas fa-suitcase-rolling"></i>
                                <span>Trips</span>
                            </div>
                            <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="utilities-color.html">Overview</a>
                                    <a className="collapse-item" href="utilities-border.html">Upcoming Trip</a>
                                    <a className="collapse-item" href="utilities-animation.html">Schedule Trip</a>
                                </div>
                            </div>
                        </li>

                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
                            <li className="nav-item">
                            <div className="nav-link collapsed"  data-toggle="collapse" data-target="#collapseMainten"
                                aria-expanded="true" aria-controls="collapseMainten">
                            <i className="fas fa-tools"></i>
                                <span>Maintenance</span>
                            </div>
                            <div id="collapseMainten" className="collapse" aria-labelledby="headingMainten"
                                data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <a className="collapse-item" href="utilities-color.html">Maintenance Planner</a>
                                </div>
                            </div>
                        </li>


                        {/* <!-- Nav Item - history --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-history"></i>
                                <span>Hisory</span></a>
                        </li>
                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />

                        {/* <!-- Nav Item - history --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Analytics</span></a>
                        </li>

                                    
                        {/*  <!-- Divider --> */}
                        <hr className="sidebar-divider" />


                        {/*  <!-- Nav Item - Pages Collapse Menu --> */}
                        <li className="nav-item">
                            <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages"
                                aria-expanded="true" aria-controls="collapsePages">
                                <i className="fas fa-fw fa-folder"></i>
                                <span>Pages</span>
                            </a>
                            <div id="collapsePages" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                                <div className="bg-white py-2 collapse-inner rounded">
                                    <h6 className="collapse-header">Login Screens:</h6>
                                    <a className="collapse-item" href="login.html">Login</a>
                                    <a className="collapse-item" href="register.html">Register</a>
                                    <a className="collapse-item" href="forgot-password.html">Forgot Password</a>
                                    <div className="collapse-divider"></div>
                                    <h6 className="collapse-header">Other Pages:</h6>
                                    <a className="collapse-item" href="404.html">404 Page</a>
                                    <a className="collapse-item" href="blank.html">Blank Page</a>
                                </div>
                            </div>
                        </li>

                        {/* <!-- Nav Item - Charts --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="charts.html">
                                <i className="fas fa-fw fa-chart-area"></i>
                                <span>Charts</span></a>
                        </li>

                        {/*  <!-- Nav Item - Tables --> */}
                        <li className="nav-item">
                            <a className="nav-link" href="tables.html">
                                <i className="fas fa-fw fa-table"></i>
                                <span>Tables</span></a>
                        </li>

                        {/* <!-- Divider --> */}
                        <hr className="sidebar-divider d-none d-md-block" />

                        {/*   <!-- Sidebar Toggler (Sidebar) --> */}
                        {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

                        {/*  <!-- Sidebar Message --> */}


                    </ul>
                </div>
          </>
   
     );
}

export default Sidebar;