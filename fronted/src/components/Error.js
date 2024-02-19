import React from "react";

function Error(props) {
  return (
    <div>
      <h2 className={props.variant}>{props.children}</h2>
    </div>
  );
}

export default Error;
