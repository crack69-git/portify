import CertificatePage from "@/components/shared/Certificate";
import React from "react";
const fetchData = async () => {
  const res = await fetch("http://localhost:3000/data.json");
  return res.json();
};
const CertificationPage = async () => {
  const data = await fetchData();
  const certificates = data.projects[0].certifications;
  // console.log(certificates);
  return (
    <div className="w-11/12 mx-auto">
      <div className="badge badge-soft badge-warning h-full text-[16px] font-semibold">
        <div aria-label="success" className="status status-success"></div>Status
        : <span className="text-green-500">Validated</span>
      </div>
      <h1 className="text-5xl font-bold mt-5">Certifications</h1>
      <div>
        <p className="mt-5 ml-4 border-l-4 border-green-500 pl-4">
          I have obtained various certifications in the field of Academic, web
          development, Competitive Programming and Extra Curricular Activities.
          These certifications have helped me enhance my skills and stay updated
          with the latest technologies in the industry.
        </p>
      </div>
      <CertificatePage certificates={certificates}></CertificatePage>
    </div>
  );
};

export default CertificationPage;
