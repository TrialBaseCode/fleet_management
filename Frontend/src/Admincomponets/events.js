import { useState } from "react";
import Navbar from "./navbar";
import Footer from './footer';
import { NavLink, Outlet, useLocation} from "react-router-dom";


const Events = () => {

    const location = useLocation();
     
    // Define a helper function to check if the given path is active
     const isPathActive = (path) => {
     const currentPath = location.pathname;
     return currentPath === path;
   };

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
            {/*  <!-- Content Wrapper --> */}
            <div id="content-wrapper" className="d-flex flex-column content-wrapper-set">

                {/*  <!-- Main Content --> */}
                <div id="content">

                    {/*  <!-- Admin Navbar components --> */}
                        <Navbar navStyle={changeStyle1}  navStyleTwo={changeStyle}/>
                    {/*  <!-- End of Admin Navbar components --> */}

                    {/* <!-- Begin Page Content --> */}
                    <div className="container-fluid">

                        {/*  <!-- Page Heading --> */}
                        <div className="d-sm-flex align-items-center justify-content-between ">
                            <h1 className="h3 mb-0 text-basic">Events</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
                      
                        {/* <!------Content work---------->*/}
                         <div className="events_nav_list">
                            <nav className="list-group list-group-horizontal mytabtlist" >
                                <NavLink className={` list-group-item text-decoration-none ${isPathActive('/events') ? ' active' : ''}` }  data-toggle="list"  to="/events/allevents" ><span>ALL EVENTS</span></NavLink>
                                <NavLink className={` list-group-item text-decoration-none ${isPathActive('/events/feaevents') ? ' active' : ''}` }  data-toggle="list"   to="/events/feaevents"><span>FEATURE EVENTS</span></NavLink>
                            </nav>
                        </div> 
                         <div className="alleventcontainer pl-3 pr-3">
                            <div className="filter-work-box">
                                <div className="filter d-flex justify-content-between">
                                    <div className="filter-drop  d-flex">
                                        <div className="dropdown">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="pr-5">All Events</span>   
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                        </div>
                                        <div className="dropdown">
                                        <button className="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <span className="pr-5">All Vehicles</span>   
                                        </button>
                                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another action</a>
                                            <a className="dropdown-item" href="#">Something else here</a>
                                        </div>
                                        </div>
                                    </div>
                                    <button type="button" className="btn btn-outline-danger">Clear</button>
                                </div>
                            </div>
                            <div className="listContainbox">
                              <Outlet />
                            </div>
                         </div>


                    </div>
                    {/*   <!-- /.container-fluid --> */}

                </div>
                {/*   <!-- End of Main Content -->

                <!-- Footer --> */}
                <Footer />
                {/* <!-- End of Footer --> */}

            </div>
            {/*  <!-- End of Content Wrapper --> */}
        </>
        );
 }

export default Events;