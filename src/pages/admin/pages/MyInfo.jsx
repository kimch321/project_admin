import React from 'react';
import {useOutletContext} from "react-router-dom";
import {MdOutlineDashboard} from "react-icons/md";
import {RiUser5Line} from "react-icons/ri";

export default function MyInfo() {
    const isActive = useOutletContext();

    return (
        <div className={`adminMain ${isActive}`}>
            <div id='adminHeader' className={"mt-5 ms-5"}>
                <h1><RiUser5Line /> 나의 정보</h1>
            </div>

        </div>
    );
}