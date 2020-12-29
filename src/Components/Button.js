import React from "react";

function Button({ type,title }) {
  return (
    <div className={type === "rounded" ? "button rounded" : "button"}>
        <p>{title}</p>
    </div>
  );
}

export default Button;
