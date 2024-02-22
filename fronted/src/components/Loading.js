import React from "react";

function Loading() {
  return (
    <span style={{justifyContent:'center',alignItems:'center',display:'flex',flex:1,height:'80vh'}}>
      <i class="fa fa-spinner fa-spin" style={{fontSize:"10rem"}}></i>
    </span>
  );
}

export default Loading;
