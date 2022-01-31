import React from 'react';
import Card from '../Card/Card';

export default function CardList({ users }) {

  // console.log(users);
  return (
    <>
      <div className="content__header">
        <h2 className="header__title">Список пользователей</h2>
      </div>
      <div>
        {users?.length > 0 && users.map((user, index) => (
          <Card key={index} user={user}/>
        ))}
      </div>
      <div className="content__search-report">
        <p className="search-report__text">{users?.length > 0 ? `Найдено ${users?.length} пользователей` : `Пользователи не найдены`} </p>
      </div>
    </>
  )
};


