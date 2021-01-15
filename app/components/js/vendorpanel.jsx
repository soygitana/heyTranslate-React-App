import React from "react";
import "../styles/main.scss";
import VendorBox from "./vendorbox.jsx";

const VendorPanel = () => {
  return (
    <div className="app-container col-12">
      <div className="app-vendorpanel">
        <VendorBox />
        <VendorBox />
        <VendorBox />
      </div>
    </div>
  );
};

export default VendorPanel;
