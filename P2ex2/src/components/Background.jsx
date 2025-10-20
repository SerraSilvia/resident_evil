import React from "react";

const Background = () => {
  return (
    <div className="fixed top-0 inset-0 z-0">
      <video
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        src="/bg.mp4"
        autoPlay
        loop
        muted
      />
    </div>
  );
};

export default Background;
