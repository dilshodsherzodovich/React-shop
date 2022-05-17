import React from "react";

function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default Loader;
