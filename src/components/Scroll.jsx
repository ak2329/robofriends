import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflow: "scroll",
        overflowX: "hidden",
        border: "4px solid #000",
        height: "800px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
