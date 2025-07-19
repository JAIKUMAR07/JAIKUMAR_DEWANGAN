import React from "react";

import Layout from "../layout/Layout";
import CertificatesSection from "./CertificatesSection";
import BadgesSection from "./BadgesSection";

const CredentialsPage = () => {
  return (
    <>
      <Layout>
        <div className="pt-[90px]">
          {" "}
          {/* Adjust this value based on your navbar height */}
          <CertificatesSection />
          <BadgesSection />
        </div>
      </Layout>
    </>
  );
};

export default CredentialsPage;
