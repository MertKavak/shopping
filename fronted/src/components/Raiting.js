import React from "react";

function Raiting({puan}) {
  return (
    <div className="raiting">
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      <span>
        <i className="fa fa-star"></i>
      </span>
      ({puan} Oy)
    </div>
  );
}

export default Raiting;
