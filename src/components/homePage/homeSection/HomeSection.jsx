import React from "react";
import Layout from "../../layout/Layout"; // ✅ Remove {} if Layout is default export
import Homepage from "./Homepage"; // ✅ Remove {} for default export
import Aboutpage from "../aboutSection/Aboutpage";
import Footer from "../../footer/Footer";
import Skills from "../../skills/Skills";

export const HomeSection = () => {
  return (
    <Layout>
      <Homepage />
      <Aboutpage />

      <Skills />
    </Layout>
  );
};
