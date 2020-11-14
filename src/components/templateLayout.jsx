import Layout from "../components/layout";
import { Link } from "gatsby";
import React from "react";

export default ({ children }) => (
  <Layout>
    <div className="container grid-12 py-2">
      {children}
    </div>
  </Layout>
);
