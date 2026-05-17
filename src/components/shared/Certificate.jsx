"use client";

import { useState } from "react";

const CertificatePage = ({ certificates }) => {
  const [filteredCertificates, setFilteredCertificates] =
    useState(certificates);

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    const academicCertificates = certificates.filter(
      (certificate) => certificate.catagory === "Academic",
    );
    // console.log(academicCertificates);
    const competitiveProgrammingCertificates = certificates.filter(
      (certificate) => certificate.catagory === "Competitive Programming",
    );
    const othersCertificates = certificates.filter(
      (certificate) => certificate.catagory === "Others",
    );
    const temp =
      selectedFilter === "Academic"
        ? academicCertificates
        : selectedFilter === "Competitive Programming"
          ? competitiveProgrammingCertificates
          : selectedFilter === "Others"
            ? othersCertificates
            : certificates;

    setFilteredCertificates(temp);
  };
  return (
    <div>
      <div className=" flex gap-4 mt-10">
        <select
          onChange={handleFilterChange}
          defaultValue="Pick a color"
          className="select"
        >
          <option disabled={true}>Filter by Type</option>
          <option>All</option>
          <option>Academic</option>
          <option>Competitive Programming</option>
          <option>Others</option>
        </select>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div>
        {filteredCertificates.length === 0 ? (
          <p className="text-center mt-10 text-2xl font-semibold">
            No certificates found.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {filteredCertificates.map((certificate) => (
              <div
                key={certificate.id}
                className="card w-full bg-base-100 shadow-xl mt-5"
              >
                <div className="card-body">
                  <p>{certificate.session}</p>
                  <h2 className="text-2xl font-bold">{certificate.name}</h2>
                  <p className="text-gray-600">{certificate.position}</p>
                  <p className="text-gray-600">{certificate.date}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificatePage;
