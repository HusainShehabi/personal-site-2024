import React from "react";

type Props = {};

export default function IntroductionCard({}: Props) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div className="grid grid-cols-2 gap-4">
        <div
          style={{ border: "1px solid green" }}
          className="col-span-2 row-span-3 "
        >
          fgh
        </div>
        <div style={{ border: "1px solid green" }}>01</div>
        <div
          style={{ border: "1px solid green" }}
          className="col-span-2 row-span-3 font-sans font-extrabold text-6xl text-white"
        >
          Hello, I'm Husain
        </div>
        <div style={{ border: "1px solid green" }}>01</div>S
        <div style={{ border: "1px solid green" }}>01</div>
        <div style={{ border: "1px solid green" }}>01</div>
        <div style={{ border: "1px solid green" }}>09</div>
      </div>
    </div>
  );
}
