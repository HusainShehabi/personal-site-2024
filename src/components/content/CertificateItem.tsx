import React from "react";
import { HiExternalLink } from "react-icons/hi";

type Props = {
  title: string;
  organization: string;
  dateIssued: string;
  credentialID?: string | undefined;
  link: string;
  image: string | undefined;
};

const containerStyle = {
  padding: "15px",
};

export default function CertificateItem({
  title,
  organization,
  dateIssued,
  credentialID,
  link,
  image,
}: Props) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer">
      <div
        style={containerStyle}
        className="flex items-center justify-between overflow-hidden rounded-lg hover:border"
      >
        {image && (
          <div className="mr-4 flex-shrink-0">
            <img
              src={image}
              alt={`${organization} logo`}
              className="w-12 h-12"
            />
          </div>
        )}

        <div className="flex-1">
          <p className="text-base font-semibold text-white">{title}</p>
          <div className="text-sm">
            <h3 className="font-medium">{organization}</h3>
            <h3 className="">{dateIssued}</h3>
            {credentialID && <p className="text-gray-300">{credentialID}</p>}
          </div>
        </div>
        <HiExternalLink color="lightgray" size={24} className="ml-4" />
      </div>
    </a>
  );
}
