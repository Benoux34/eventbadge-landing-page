import React from "react";

function Introduction() {
  return (
    <div className="flex flex-col items-center justify-center text-white">
      <span>-- introducing -- </span>
      <h1 className="text-5xl lg:text-8xl font-bold text-center">
        Welcome to the <br />
        <span>
          Event<span className="text-blue-500">Badge</span>
        </span>{" "}
        World
      </h1>
    </div>
  );
}

export default Introduction;
