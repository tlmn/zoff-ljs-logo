import Layout from "../components/layout";
import React from "react";

const TemplateLayout = ({ children }) => (
  <Layout>
    <div className="container grid-12 py-2">{children}</div>
  </Layout>
);

export default TemplateLayout;
