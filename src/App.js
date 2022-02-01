import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Profile from './components/Profile/Profile.js';
import CardList from './components/CardList/CardList.js';

function App() {

  const [users, setUsers] = useState(null);
  const [id, setId] = useState(null);


  useEffect(() => {

    getDateFromAPI();

  }, []);

  useEffect(() => {

  },[id])



  function getDateFromAPI() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {


        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  }


  function serchUserById(id) {
    setId(id);
  }

  // console.log(users);
  
  // users && console.log(users[serchUserById(id)]);


  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-container">


          <div className="page-container__left-menu">
            <nav className="left-menu__navbar">
              <h3 className="navbar__title">Сортировка</h3>
              <div className="navbar__navbar-btn-panel">
                <button className="navbar-btn-panel__btn btn">по городу</button>
                <button className="navbar-btn-panel__btn btn">по компании</button>
              </div>
            </nav>
          </div>


          <div className="page-container__content">


            {users &&
              <Routes>
                <Route path="/" element={<CardList users={users} />} />
                <Route path="/profile/:id" element={<Profile getUserById={serchUserById} user={users[id - 1]} />} />
              </Routes>
            }


          </div>
        </div>
      </div>
    </BrowserRouter >
  );
}

export default App;
