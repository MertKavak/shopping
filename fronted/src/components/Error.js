import React from "react";

function Error(props) {
  return (
    <div>
      <h4 className={props.variant}>{props.children}</h4>
    </div>
  );
}

export default Error;
