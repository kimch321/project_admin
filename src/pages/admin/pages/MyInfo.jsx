import React from 'react';
import {useOutletContext} from "react-router-dom";

export default function MyInfo() {
    const isActive = useOutletContext();

    return (
        <div className={`main ${isActive}`}>

        </div>
    );
}