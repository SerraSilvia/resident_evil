import React from "react";

const Background = () => {
  return (
    <div className="fixed top-0 inset-0 z-0">
      <video
        className="w-full object-cover"
        src="/bg.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Background;
