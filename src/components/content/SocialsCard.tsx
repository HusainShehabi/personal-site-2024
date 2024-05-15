import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function SocialCards() {
  return (
    <div className="flex gap-6">
      <div>
        <a
          href="https://github.com/HusainShehabi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub color="lightgray" size={30} />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/husain-shehabi-32033a13a/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin color="lightgray" size={30} />
        </a>
      </div>
    </div>
  );
}
