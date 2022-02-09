import './Card.css';
import { Link } from 'react-router-dom';
import { useEffect} from "react";



export default function Card({ user }) {
  
  let { id, name, address: {city}, company: {name: nameCompany}} = user;


  useEffect(() => {}, [user]);
  
  return (
    <>
      {user && (
        <>
          <div className="list__item" id={id}>
            <p className="item__name text">
              ФИО: <span>{name}</span>
            </p>
            <p className="item__city text">
              город: <span>{city}</span>
            </p>
            <div className="item__company-link">
              <p className="company-link__item text">
                компания: <span>{nameCompany}</span>
              </p>
              <Link to={`/profile/${id}`} className="company-link__item link">
                Подробнее
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  )
};