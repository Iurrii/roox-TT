import React from "react";
import '../MenuLeft/MenuLeft.css'

export default function MenuLeft() {
  return (
  <>
    <div className="page-container__left-menu">
      <nav className="left-menu__navbar">
        <h3 className="navbar__title">Сортировка</h3>
        <div className="navbar__navbar-btn-panel">
          <button className="navbar-btn-panel__btn btn">по городу</button>
          <button className="navbar-btn-panel__btn btn">по компании</button>
        </div>
      </nav>
    </div>
  </>
  )}
