import React from 'react';
import {Outlet} from "react-router-dom";

export default function Index() {
  return (
    <>
      <h1>header자리</h1>
      <Outlet />
      <p>footer자리</p>
    </>
  );
}