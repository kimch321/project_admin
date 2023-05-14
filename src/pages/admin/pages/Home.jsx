import React from 'react';
import { useOutletContext } from 'react-router-dom';
import "./adminPage.css"
import {RiUser5Line} from "react-icons/ri";
import {MdOutlineDashboard} from "react-icons/md";

export default function Home() {
  const isActive = useOutletContext();

  return (
    <div className={`adminMain ${isActive}`}>
        <div id='adminHeader' className={"mt-5 ms-5"}>
            <h1><MdOutlineDashboard /> HOME</h1>
        </div>
        <div className="adminBody mt-5 mx-3" >
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
            <h1>aaaaa</h1>
        </div>
    </div>
  );
}