import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Card from './components/Card/Card.js';
import Profile from './components/Profile/Profile.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div class="page-container">


          <div class="page-container__left-menu">
            <nav class="left-menu__navbar">
              <h3 class="navbar__title">Сортировка</h3>
              <div class="navbar__navbar-btn-panel">
                <button class="navbar-btn-panel__btn btn">по городу</button>
                <button class="navbar-btn-panel__btn btn">по компании</button>
              </div>
            </nav>
          </div>


          <div class="page-container__content">
            <div class="content__header">
              <h2 class="header__title">Список пользователей</h2>
            </div>

            <Routes>
              <Route path="/" element={<Card />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>

          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
