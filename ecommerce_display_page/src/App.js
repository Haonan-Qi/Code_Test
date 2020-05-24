import React from "react";
import "./App.css";
import Layout from "./hoc/Layout/Layout";
import WineStore from "./containers/WineStore/WineStore";

function App() {
  return (
    <Layout>
      <WineStore />
    </Layout>
  );
}

export default App;
