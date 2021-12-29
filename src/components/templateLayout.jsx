import Layout from "../components/layout";
import React from "react";
import useDataContext from "../lib/useDataContext";

const TemplateLayout = ({ children }) => {
  const {
    state: { templateScale },
  } = useDataContext();
  return (
    <Layout>
      {!templateScale && (
        <div className="fixed bg-white h-screen w-screen z-50"></div>
      )}
      <div className="container grid-12 py-2">{children}</div>
    </Layout>
  );
};

export default TemplateLayout;
