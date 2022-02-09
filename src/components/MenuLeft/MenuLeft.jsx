import React from "react";
import '../MenuLeft/MenuLeft.css'

export default function MenuLeft({ sortName, sortCity }) {


  return (
  <>
    <div className="page-container__left-menu">
      <nav className="left-menu__navbar">
        <h3 className="navbar__title">Сортировка</h3>
        <div className="navbar__navbar-btn-panel">
            <button onClick={sortCity} className="navbar-btn-panel__btn btn">по городу</button>
            <button onClick={sortName} className="navbar-btn-panel__btn btn">по имени</button>
        </div>
      </nav>
    </div>
  </>
  )
};
