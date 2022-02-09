import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import Profile from "./components/Profile/Profile.jsx";
import CardList from "./components/CardList/CardList.jsx";
import MenuLeft from "./components/MenuLeft/MenuLeft.jsx";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function App() {
  //основной массив данных
  const [users, setUsers] = useState(null);
  //выбранный id пользователя
  const [selectedUserId, setSelectedUserId] = useState(null);
  //анимация-заглушка для fetch запроса
  const [isFetching, setIsFetching] = useState(true);
  //выбранный пользователь
  const [selectedUser, setSelectedUser] = useState(null);
  //переключатели сортировки
  const [sortNameSwitch, setSortNameSwitch] = useState(false);
  const [sortCitySwitch, setSortCitySwitch] = useState(false);



  useEffect(() => {
    getDateFromAPI();
  }, []);

  useEffect(() => {
    (users && selectedUserId) !== null
      ? searchProfile(users, selectedUserId)
      : console.log();;
  }, [selectedUserId]);

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
  }

  function searchUserById(id) {
    setSelectedUserId(id);
  }

  function searchProfile(arr, userId) {
    let x = Number(userId);
    let foundArray = arr.filter((item) => item.id === x);
    setSelectedUser(foundArray[0]);
  }
  
  function sortByName() {
    if (sortNameSwitch) {
      setUsers([...users].reverse())
      setSortNameSwitch(false)
    }
    if(!sortNameSwitch) {
      setUsers([...users]?.sort(sortingName))
      setSortNameSwitch(true)
    }
    function sortingName(x, y) {
      return x.name.localeCompare(y.name);
    }
  }

  function sortByCity() {
    if (sortCitySwitch) {
      setUsers([...users].reverse());
      setSortCitySwitch(false)
      
    }
    if (!sortCitySwitch) {
      setUsers([...users]?.sort(sortingCity));
      setSortCitySwitch(true)
    }
    function sortingCity(x, y) {
      return x.address.city.localeCompare(y.address.city);
    }
  }




  return (
    <BrowserRouter>
      <div className="App">
        <div className="page-container">
          <MenuLeft sortName={sortByName} sortCity={sortByCity} />
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
                  <Route
                    path="/"
                    element={<CardList users={users} id={selectedUserId} />}
                  />
                )}

                <Route
                  path="/profile/:id"
                  element={
                    <Profile
                      getUserById={searchUserById}
                      user={selectedUser}
                    />
                  }
                />
              </Routes>
            )}
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};
