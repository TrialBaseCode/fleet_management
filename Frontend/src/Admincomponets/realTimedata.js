import { useState } from "react";
import Navbar from "./navbar";
import Footer from './footer';
import React from "react";
import {
Pie,
PieChart,
Cell,
} from "recharts";

// data get 
import data from "../DataCollection/realPie";



function TestUi() {

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

        // chart work


       
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
                        <div className="d-sm-flex align-items-center justify-content-between mb-4">
                            <h1 className="h3 mb-0 text-gray-800">Real Time Data</h1>
                            <a href="#" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                className="fas fa-download fa-sm text-white-50"></i> Generate Report</a>
                        </div>

                        {/*  <!-- Content Row --> */}
                        <div className="row mb-4">
                            {/*  <!-- Vicycle error Card Example --> */}
                            <div className="col-xl-3 col-md-6">
                                <div className="card border-left-primary shadow h-100">
                                    <div className="card-body mycard-body">
                                    <div className="row  align-items-center">
                                        <div className="col ">
                                        <div className=" my-lefttextxs text-xs font-weight-bold text-danger text-uppercase mb-1">
                                            Vehicles errors
                                        </div>
                                        <div className="my-lefttextval h5 mb-0 font-weight-bold text-gray-800">
                                            2
                                        </div>
                                        </div>
                                        <div className="col-auto p-4">
                                        <i className="fas fa-times  fa-1x text-danger"></i>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>

                            {/*  <!-- Vicycle warning Card Example --> */}
                            <div className="col-xl-3 col-md-6">
                            <div className="card border-left-success shadow h-100">
                                <div className="card-body mycard-body">
                                <div className="row  align-items-center">
                                    <div className="col">
                                    <div className="my-lefttextxs text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Vehicles warnings
                                    </div>
                                    <div className="my-lefttextval h5 mb-0 font-weight-bold text-gray-800">
                                        10
                                    </div>
                                    </div>
                                    <div className="col-auto  p-4">
                                    <i className="fas fa-exclamation-triangle  fa-1x text-warning"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            {/*  <!-- Vicycle route Card Example --> */}
                            <div className="col-xl-3 col-md-6">
                            <div className="card border-left-info shadow h-100">
                                <div className="card-body mycard-body">
                                <div className="row  align-items-center">
                                    <div className="col">
                                    <div className="my-lefttextxs text-xs font-weight-bold text-info text-uppercase mb-1">
                                        Side route
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-auto">
                                        <div className="my-lefttextval h5 mb-0 mr-3 font-weight-bold text-gray-800">
                                            20
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="col-auto  p-4">
                                    <i className="fas fa-exclamation-triangle  fa-1x text-warning"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            {/*  <!-- Being Late Card Example --> */}
                            <div className="col-xl-3 col-md-6">
                            <div className="card border-left-warning shadow h-100">
                                <div className="card-body mycard-body">
                                <div className="row  align-items-center">
                                    <div className="col ">
                                    <div className="my-lefttextxs text-xs font-weight-bold text-warning text-uppercase mb-1">
                                        Being late
                                    </div>
                                    <div className="my-lefttextval h5 mb-0 font-weight-bold text-gray-800">
                                        18
                                    </div>
                                    </div>
                                    <div className="col-auto  p-4">
                                    <i className="fas fa-exclamation-triangle  fa-1x text-warning"></i>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>

                        {/*  <!-- Content Row --> */}

                        <div className="row">

                            {/*   <!-- Area Chart Toal Vicycle --> */}
                            <div className="col-xl-5 col-lg-4 h-100">
                                <div className="card shadow mb-4">
                                    {/*  <!-- Card Header - Dropdown --> */}
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Total Vehicles</h6>
                                        <div className="dropdown no-arrow">
                                            <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                aria-labelledby="dropdownMenuLink">
                                                <div className="dropdown-header">Dropdown Header:</div>
                                                <a className="dropdown-item" href="#">Action</a>
                                                <a className="dropdown-item" href="#">Another action</a>
                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="#">Something else here</a>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  <!-- Card Body --> */}
                                    <div className="card-body p-0">
                                        <div className="chart-area">
                                            <div className="chatContainer">
                                                <div className="chatPieContain d-flex justify-content-center align-items-center">
                                                    <PieChart width={200} height={200}>
                                                        <Pie data={data} cx="50%" cy="50%" outerRadius={80}>
                                                            {
                                                            data.map((entry, index) => (
                                                                <Cell key={`cell-${index}`} fill={entry.colors}/>
                                                            ))
                                                            }
                                                        </Pie>
                                                    </PieChart>
                                                </div>
                                                <div className="chatPieContain">
                                                     {
                                                        data.map((entry , index) => (
                                                            <div className="chatvalue pl-5" key={index}>
                                                                   <span style={{color:entry.colors, fontSize:15 , fontWeight:700}}>{entry.name}</span> 
                                                                   <span style={{fontSize:15, fontWeight:700}}>: {entry.value}</span>
                                                            </div>
                                                        ))
                                                     }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*   <!-- Area Chart Vehicles Condition --> */}
                            <div className="col-xl-4 col-lg-4 h-100">
                                    {/* <!-- Project Card Example --> */}
                                    <div className="card shadow mb-2">
                                        <div className="card-header py-3">
                                            <h6 className="m-0 font-weight-bold text-primary">Vehicles Condition</h6>
                                        </div>
                                    <div className="card-body">
                                        <div className="metercheck mb-4">
                                            <h4 className="small font-weight-bold  text-success ">Good<span
                                                className="float-right">40%</span></h4>
                                            <div className="progress">
                                                <div style={{width:40 + "%"}} className="progress-bar bg-success a2" role="progressbar" ></div>
                                            </div>
                                            <h5  className="mt-3 meterchecktil">Vehicles: <span>45</span></h5>
                                        </div>
                                        <div className="metercheck mb-4">
                                            <h4 className="small font-weight-bold  text-warning ">Satisfactory<span
                                                className="float-right">30%</span></h4>
                                            <div className="progress">
                                                <div style={{width:30 + "%"}} className="progress-bar bg-warning a2" role="progressbar" ></div>
                                            </div>
                                            <h5  className="mt-3  meterchecktil">Vehicles: <span>20</span></h5>
                                        </div>
                                        <div className="metercheck mb-4">
                                            <h4 className="small font-weight-bold  text-danger">Critical<span
                                                className="float-right">10%</span></h4>
                                            <div className="progress">
                                                <div  style={{width:10 + "%"}} className="progress-bar bg-danger a2" role="progressbar" ></div>
                                            </div>
                                            <h5  className="mt-3  meterchecktil">Vehicles: <span>5</span></h5>
                                        </div>
                                    </div>
                                </div>
                            </div>   

                             {/*  <!-- Pie Chart Traffic Jam & Accidents --> */}
                             <div className="col-xl-3 col-lg-6 h-100">
                                <div className="card shadow small-card mb-4">
                                    {/*  <!-- Card Header - Dropdown --> */}
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Traffic Jam</h6>
                                    </div>
                                    {/*  <!-- Card Body --> */}
                                    <div className="card-body pt-2">
                                        <div className=" pb-2">
                                           <div className="trafficJamcontainer unitetraffic">
                                             <div className="trafficJamcontain">
                                                <h5 className="fontSizetelwork">Vehicles: <span>15</span></h5>
                                                <div className="vicinfo">
                                                   <h6 className="fontSizework bg-warning text-white p-1 rounded font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                   <h6 className="fontSizework bg-warning text-white p-1 rounded font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                   <h6 className="fontSizework bg-warning text-white p-1 rounded font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                   <h6 className="fontSizework bg-warning text-white p-1 rounded font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                   <h6 className="fontSizework bg-warning text-white p-1 rounded font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                   <h6 className="fontSizework bg-warning text-white p-1 rounded font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                   <h6 className="fontSizework bg-warning text-white p-1 rounded font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                 </div>
                                              </div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card shadow small-card mb-4">
                                    {/*  <!-- Card Header - Dropdown --> */}
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Accidents</h6>
                                        <div className="needAtention">
                                             <p className="text-danger font-weight-bold"><span className="bg-danger"></span>Evacuation Requred</p> 
                                             <p className="text-secondary font-weight-bold"><span className="bg-secondary"></span>Evacuated</p>      
                                        </div>
                                    </div>
                                    {/*  <!-- Card Body --> */}
                                    <div className="card-body pt-2">
                                        <div className=" pb-2">
                                           <div className="trafficJamcontainer unitetraffic">
                                             <div className="trafficJamcontain">
                                                <h5 className="fontSizetelwork">Vehicles: <span>5</span></h5>
                                                <div className="vicinfo">
                                                <h6 className="fontSizework bg-danger rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-danger rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-secondary rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-danger rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-secondary rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-danger rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-danger rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-danger rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                <h6 className="fontSizework bg-danger rounded text-white p-1 font-weight-bold">Vehicles No: <span>CR 1565</span></h6>
                                                </div>
                                              </div>
                                           </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                            {/*  <!-- Content Row --> */}

                         <div className="row">

                                {/*   <!-- Area Chart --> */}
                                <div className="col-xl-3 col-lg-3 h-100">
                                    <div className="card shadow mb-4">
                                        {/*  <!-- Card Header - Dropdown --> */}
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Trips</h6>
                                        </div>
                                        {/*  <!-- Card Body --> */}
                                        <div className="card-body">
                                            <div className="chart-area">
                                               <div className="tripContainer">
                                                    <h6 className="tripsTil">24 hours Trips Data</h6>
                                                    <div className="tripListcontqin">
                                                        <div className="trip_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                            <span className="livetiptxt"><i class="fas fa-wifi pr-1"></i>Live Trips</span>
                                                            <div className="d-flex align-items-md-center">
                                                                <span className="pr-1 livetipnum">156</span>
                                                                <div className="dropdown no-arrow">
                                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                        aria-labelledby="dropdownMenuLink">
                                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <hr className="trip-driver"></hr>
                                                        </div>
                                                        <div className="trip_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                            <span className="livetiptxt"><i class="fas fa-wifi pr-1"></i>Scheduled</span>
                                                            <div className="d-flex align-items-md-center">
                                                                <span className="pr-1 livetipnum">16</span>
                                                                <div className="dropdown no-arrow">
                                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                        aria-labelledby="dropdownMenuLink">
                                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <hr className="trip-driver"></hr>
                                                        </div>
                                                        <div className="trip_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                            <span className="livetiptxt"><i class="fas fa-wifi pr-1"></i>Completed</span>
                                                            <div className="d-flex align-items-md-center">
                                                                <span className="pr-1 livetipnum">36</span>
                                                                <div className="dropdown no-arrow">
                                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                        aria-labelledby="dropdownMenuLink">
                                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <hr className="trip-driver"></hr>
                                                        </div>
                                                        <div className="trip_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                            <span className="livetiptxt"><i class="fas fa-wifi pr-1"></i>Being Late</span>
                                                            <div className="d-flex align-items-md-center">
                                                                <span className="pr-1 livetipnum">89</span>
                                                                <div className="dropdown no-arrow">
                                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                        aria-labelledby="dropdownMenuLink">
                                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <hr className="trip-driver"></hr>
                                                        </div>
                                                        <div className="trip_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                            <span className="livetiptxt"><i class="fas fa-wifi pr-1"></i>Failed</span>
                                                            <div className="d-flex align-items-md-center">
                                                                <span className="pr-1 livetipnum">20</span>
                                                                <div className="dropdown no-arrow">
                                                                    <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                        <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                    </a>
                                                                    <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                        aria-labelledby="dropdownMenuLink">
                                                                        <div className="dropdown-header">Dropdown Header:</div>
                                                                        <a className="dropdown-item" href="#">Action</a>
                                                                        <a className="dropdown-item" href="#">Another action</a>
                                                                        <div className="dropdown-divider"></div>
                                                                        <a className="dropdown-item" href="#">Something else here</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <hr className="trip-driver"></hr>
                                                        </div>
                                                    </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*   <!-- Area Chart --> */}
                                <div className="col-xl-3 col-lg-3 h-100">
                                    <div className="card shadow mb-4">
                                        {/*  <!-- Card Header - Dropdown --> */}
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Out Of Service</h6>
                                        </div>
                                        {/*  <!-- Card Body --> */}
                                        <div className="card-body">
                                            <div className="chart-area">
                                            <div className="tripContainer">
                                                    <h5 className="tripsTil">Out of order vehicles</h5>
                                                    <div className="vicleTil">
                                                      <h6>Total Vehicles : <span>36</span></h6>
                                                        <div className="mantain_container">
                                                            <div className="manatance_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                                <span className="livetiptxt"><i class="fas fa-cog pr-1"></i>Maintenance</span>
                                                                <div className="d-flex align-items-md-center">
                                                                    <span className="pr-1 livetipnum">16</span>
                                                                    <div className="dropdown no-arrow">
                                                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                            aria-labelledby="dropdownMenuLink">
                                                                            <div className="dropdown-header">Dropdown Header:</div>
                                                                            <a className="dropdown-item" href="#">Action</a>
                                                                            <a className="dropdown-item" href="#">Another action</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                                <hr className="trip-driver"></hr>
                                                            </div>
                                                            <div className="manatance_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                                <span className="livetiptxt"><i class="fas fa-unlink pr-1"></i>Broken</span>
                                                                <div className="d-flex align-items-md-center">
                                                                    <span className="pr-1 livetipnum">46</span>
                                                                    <div className="dropdown no-arrow">
                                                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                            aria-labelledby="dropdownMenuLink">
                                                                            <div className="dropdown-header">Dropdown Header:</div>
                                                                            <a className="dropdown-item" href="#">Action</a>
                                                                            <a className="dropdown-item" href="#">Another action</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                                <hr className="trip-driver"></hr>
                                                            </div>
                                                            <div className="manatance_contain">
                                                            <div className="trip_work d-flex justify-content-sm-between align-items-md-center">
                                                                <span className="livetiptxt"><i class="fas fa-exclamation-circle pr-1"></i>In Accident</span>
                                                                <div className="d-flex align-items-md-center">
                                                                    <span className="pr-1 livetipnum">46</span>
                                                                    <div className="dropdown no-arrow">
                                                                        <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                                                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                            <i className="fas fa-chevron-right fa-sm fa-fw text-gray-400"></i>
                                                                        </a>
                                                                        <div className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                                                                            aria-labelledby="dropdownMenuLink">
                                                                            <div className="dropdown-header">Dropdown Header:</div>
                                                                            <a className="dropdown-item" href="#">Action</a>
                                                                            <a className="dropdown-item" href="#">Another action</a>
                                                                            <div className="dropdown-divider"></div>
                                                                            <a className="dropdown-item" href="#">Something else here</a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                                <hr className="trip-driver"></hr>
                                                            </div>
                                                        </div>
                                                    </div>
                                               </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*   <!-- Area Chart --> */}
                                <div className="col-xl-6 col-lg-6 h-100">
                                    <div className="card shadow mb-4">
                                        {/*  <!-- Card Header - Dropdown --> */}
                                        <div
                                            className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                            <h6 className="m-0 font-weight-bold text-primary">Vehicles Situations</h6>
                                    
                                        </div>
                                        {/*  <!-- Card Body --> */}
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <canvas id="myAreaChart"></canvas>
                                            </div>
                                        </div>
                                    </div>
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

export default TestUi;