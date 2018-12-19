import React from "react";

export default () => (
  <div className="boat">
    <video loop playsInline muted autoPlay preload="true">
      <source src="/boat.mp4" />
    </video>
  </div>
);
