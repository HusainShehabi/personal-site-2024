import React from "react";
import TempPP from "../../assets/tempPP.jpeg";

type Props = {};

export default function ProfilePictureCard({}: Props) {
  return (
    <div className="flex justify-center items-center h-full">
      <img src={TempPP} alt="Profile" />
    </div>
  );
}
