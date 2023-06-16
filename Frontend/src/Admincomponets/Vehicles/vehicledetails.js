import Navbar from "../navbar";
import Footer from "../footer";
import { useState } from "react";

const Vehiclesdetails = () => {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  return (
    <>
      {/*  <!-- Content Wrapper --> */}
      <div
        id="content-wrapper"
        className="d-flex flex-column content-wrapper-set"
      >
        {/*  <!-- Main Content --> */}
        <div id="content">
          {/*  <!-- Admin Navbar components --> */}
          <Navbar navStyle={changeStyle1} navStyleTwo={changeStyle} />
          {/*  <!-- End of Admin Navbar components --> */}
        </div>
        

        {/*<!-- Footer --> */}
        <Footer />
        {/* <!-- End of Footer --> */}
      </div>
      {/*  <!-- End of Content Wrapper --> */}
    </>
  );
};

export default Vehiclesdetails;
