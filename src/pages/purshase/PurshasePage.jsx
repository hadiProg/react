import React from "react";
import "./PurshasePage.css";
import Header from "../../../components/header/Header";
import PurshaseProcess from "../../../components/purshaseProcess/PurshaseProcess";

export default function PurshasePage() {
  return (
    <div className="pushaseMain">
      <Header />
      <div className="container bg-dark w-100 purshaseContainer">
        <PurshaseProcess />
        <PurshaseProcess />
        <PurshaseProcess />
        <PurshaseProcess />
        <PurshaseProcess />
        <PurshaseProcess />
      </div>
    </div>
  );
}
