import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Profile from './components/Profile/Profile.js';
import CardList from './components/CardList/CardList.js';
import MenuLeft from './components/MenuLeft/MenuLeft.jsx';
import { faCircleNotch} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {

  const [users, setUsers] = useState(null);
  const [id, setId] = useState(null);
  const [isFetching, setIsFetching] = useState(true);


  useEffect(() => {
    getDateFromAPI();
  }, []);

  useEffect(() => {
  }, [id]);



  function getDateFromAPI() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setIsFetching(false);
      })
      .catch((err) => {
        console.log(err);
        alert(err.message);
      });
  };

  function searchUserById(id) {
    setId(id);
  };



  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-container">
          <MenuLeft />
          <div className="page-container__content">
            {isFetching && (
              <FontAwesomeIcon
                icon={faCircleNotch}
                size="5x"
                spin
                className="icon"
              />
            )}
            {users && (
              <Routes>     
                {!isFetching && (
                  <Route path="/" element={<CardList users={users} />} />
                )}
                <Route
                  path="/profile/:id"
                  element={
                    <Profile
                      getUserById={searchUserById}
                      user={users[id - 1]}
                    />
                  }
                />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

