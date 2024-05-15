import { certificates } from "../libs/certificates";
import CertificateItem from "./CertificateItem";

type Props = {};

export default function CertificatesCard({}: Props) {
  return (
    <div className="w-full font-sans text-2xl text-gray-300">
      <div className="flex flex-col">
        <div className="font-semibold text-4xl text-gray-300 pb-2">
          Certificates
        </div>
        {certificates.map((certificate) => (
          <CertificateItem
            title={certificate.title}
            organization={certificate.organization}
            dateIssued={certificate.dateIssued}
            credentialID={certificate.credentialID}
            link={certificate.link}
            image={certificate.image}
          />
        ))}
      </div>
    </div>
  );
}
