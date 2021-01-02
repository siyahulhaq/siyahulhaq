import React from "react";

function Button({ title, scrolling }) {
  return (
    <div className={scrolling ? "button rounded scrolling" : "button rounded"}>
      <p>{title}</p>
    </div>
  );
}
export default Button;