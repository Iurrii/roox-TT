import './Card.css';
import { Link, } from 'react-router-dom';



export default function Card() {
  return (
    <>
      <div class="content__list">
        <div class="list__item">

          <p class="item__name text">ФИО: <span>Иван Иванов</span></p>
          <p class="item__city text">город: <span>Москва</span></p>
          <div class="item__company-link">

            <p class="company-link__item text">компания: <span>ООО "Рога и копыта"</span></p>
            <Link to="/profile" class="company-link__item link" >Подробнее</Link>

          </div>
        </div>
      </div>
      <div class="content__search-report">
        <p class="search-report__text">Найдено 10 пользователей</p>
      </div>
    </>

  )
}