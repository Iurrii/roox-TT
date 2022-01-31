import './Card.css';
import { Link, } from 'react-router-dom';



export default function Card({user}) {



  return (
    <>
      {user && <>
        <div div className="content__list" >
          <div className="list__item">

            <p className="item__name text">ФИО: <span>{user?.name}</span></p>
            <p className="item__city text">город: <span>{user?.address?.city}</span></p>
            <div className="item__company-link">

              <p className="company-link__item text">компания: <span>{user?.company?.name}</span></p>
              <Link to={`/profile/${user.id}`} className="company-link__item link" >Подробнее</Link>

            </div>
          </div>
        </div >

      </>
      }
    </>


  )
}