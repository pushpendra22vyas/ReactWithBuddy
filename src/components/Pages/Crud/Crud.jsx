import React from "react";
import PageHeader from "../../CommonUtils/PageHeader";
import { Outlet } from "react-router-dom";

function Crud() {
  return (
    <>
      <PageHeader />
      <Outlet/>
    </>
  );
}

export default Crud;
