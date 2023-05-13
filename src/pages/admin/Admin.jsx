import React, {useState} from 'react';
import {Outlet} from "react-router-dom";
import './Admin.css';
import SideNav from "./component/SideNav";

function Admin() {
    const [sideOpen, setSideOpen] = useState('');
    const [activeLi, setActiveLi] = useState(0);

  return(
    <div>
      <SideNav isActive={sideOpen} setIsActive={setSideOpen}/>
        <Outlet context={sideOpen} />
    </div>
  )

}

export default Admin;
