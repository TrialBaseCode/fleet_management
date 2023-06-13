import { useState } from "react";
import Navbar from "./navbar";
import Footer from './footer';
import { Link , Outlet} from "react-router-dom";


const Events = () => {

    const [activeLink, setActiveLink] = useState('');
    const handleNavLinkClick = (link) => {
        setActiveLink(link);
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
                            <h1 className="h3 mb-0 text-gray-800">Events</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>
                        {/* ---Line Divider-- */}
                        <hr className="divider"></hr>
                        {/* <!------Content work---------->*/}
                         <div className="events_nav_list">
                            <nav class="list-group list-group-horizontal  mytabtlist" >
                                <Link class="list-group-item  active text-decoration-none"  data-toggle="list"  to="/events/allevents"  >ALL EVENTS</Link>
                                <Link class="list-group-item text-decoration-none" data-toggle="list"   to="/events/feaevents">FEATURE EVENTS</Link>
                            </nav>
                      
                        </div> 
                          {/* ---Line Divider-- */}
                        <hr className="divider"></hr>

                         <div className="allcontainer">
                            <Outlet />
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