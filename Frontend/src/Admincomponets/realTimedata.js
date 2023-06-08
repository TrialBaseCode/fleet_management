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
               <div id="content-wrapper" className="d-flex flex-column">

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
                                                                   <span style={{color:entry.colors, fontSize:18}}>{entry.name}</span> 
                                                                   <span style={{fontSize:18}}>: {entry.value}</span>
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
                                <div className="card shadow mb-4">
                                    {/*  <!-- Card Header - Dropdown --> */}
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Vehicles Condition</h6>
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
                                    <div className="card-body">
                                        <div className="chart-area">
                                            <canvas id="myAreaChart"></canvas>
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
                                    <div className="card-body">
                                        <div className="chart-pie pt-4 pb-2">
                                            <canvas id="myPieChart"></canvas>
                                        </div>
                                       
                                    </div>
                                </div>
                                <div className="card shadow small-card mb-4">
                                    {/*  <!-- Card Header - Dropdown --> */}
                                    <div
                                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                                        <h6 className="m-0 font-weight-bold text-primary">Accidents</h6>
                                    </div>
                                    {/*  <!-- Card Body --> */}
                                    <div className="card-body">
                                        <div className="chart-pie pt-4 pb-2">
                                            <canvas id="myPieChart"></canvas>
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
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <canvas id="myAreaChart"></canvas>
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
                                        <div className="card-body">
                                            <div className="chart-area">
                                                <canvas id="myAreaChart"></canvas>
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