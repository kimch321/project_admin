import React from 'react';
import { useOutletContext } from 'react-router-dom';
import "./adminPage.css"

export default function Home() {
  const isActive = useOutletContext();

  return (
    <div className={`main ${isActive}`}>

    </div>
  );
}