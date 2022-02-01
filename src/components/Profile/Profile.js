import "./Profile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile({ getUserById, user }) {
  const { id } = useParams();
  const [isNotEditable, setIsNotEditable] = useState(true);

  const [currentUser, setCurrentUser] = useState(null);

  const [name, setName] = useState(user?.name, null);
  const [username, setUserName] = useState(user?.username, null);
  const [email, setEmail] = useState(currentUser?.email, null);




  useEffect(() => {
    getUserById(id);
  }, [id]);

  useEffect(() => {
    user && setName(user?.name);
    setUserName(user?.username);
    setCurrentUser(user);
  }, [user]);

  useEffect(() => {
    currentUser &&
    setEmail(currentUser.email)
  },[currentUser]);






  function editingInputs() {
    let btnEditing = document.querySelector(".submit-container__form-submit");
    btnEditing.classList.contains("editing")
      ? btnEditing.classList.remove("editing")
      : btnEditing.classList.add("editing");

    if (isNotEditable === false) {
      setIsNotEditable(true);
    } else {
      setIsNotEditable(false);
    }
  }

  return (
    <>
      {user && (
        <>
          <div className="content__header">
            <h2 className="header__title">Профиль пользователя</h2>
            <button onClick={editingInputs} className="header__btn-edit btn">
              Редактировать
            </button>
          </div>

          <div className="content__form-wrapper">
            <form action="" className="form-wrapper__form">
              <label className="form__form-item">
                <p className="form-item__text">Name</p>

                <input
                  type="text"
                  name="name"
                  disabled={isNotEditable}
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={user?.name}
                  value={name}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">User name</p>
                <input
                  type="text"
                  name="username"
                  disabled={isNotEditable}
                  defaultValue={user.username}
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">E-mail</p>
                <input
                  type="text"
                  disabled={isNotEditable}
                  defaultValue={currentUser?.email}
                  value={email}
                  // defaultValue={user.email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Street</p>
                <input
                  type="text"
                  disabled={isNotEditable}
                  defaultValue={user.address.street}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">City</p>
                <input
                  type="text"
                  disabled={isNotEditable}
                  defaultValue={user.address.city}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Zip code</p>
                <input
                  type="text"
                  disabled={isNotEditable}
                  defaultValue={user.address.zipcode}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Phone</p>
                <input
                  type="text"
                  disabled={isNotEditable}
                  defaultValue={user.phone}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Website</p>
                <input
                  type="text"
                  disabled={isNotEditable}
                  defaultValue={user.website}
                  className="form-item__input"
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Comment</p>
                <textarea
                  cols="30"
                  disabled={isNotEditable}
                  rows="10"
                  className="form__form-comment"
                ></textarea>
              </label>
            </form>

            <div className="form-wrapper__submit-container">
              <input
                type="submit"
                value="Отправить"
                className="submit-container__form-submit btn"
              />
            </div>
          </div>
        </>
      )}
      {!user && <p>User из пропсов пустой</p>}
    </>
  );
}
