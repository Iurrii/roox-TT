import "./Profile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile({ getUserById, user }) {
  const { id } = useParams();

  const [isImmutable, setIsImmutable] = useState(true);
  const [isEditingStatus, setIsEditingStatus] = useState(false);
  const [verificationChecklist, setVerificationChecklist] = useState(
    {
      name: true,
      username: true,
      email: true,
      street: true,
      city: true,
      zipcode: true,
      phone: true,
      website: true,
    },
    null
  );

  const [currentUser, setCurrentUser] = useState(null);

  const [name, setName] = useState(currentUser?.name, null);
  const [username, setUserName] = useState(currentUser?.username, null);
  const [email, setEmail] = useState(currentUser?.email, null);
  const [street, setStreet] = useState(currentUser?.address.street, null);
  const [city, setCity] = useState(currentUser?.address.city, null);
  const [zipcode, setZipcode] = useState(currentUser?.address.zipcode, null);
  const [phone, setPhone] = useState(currentUser?.phone);
  const [website, setWebsite] = useState(currentUser?.website);

  useEffect(() => {
    getUserById(id);
  }, []);

  useEffect(() => {
    user && setCurrentUser(user);
  }, [user]);

  useEffect(() => {
  }, [verificationChecklist]);

  useEffect(() => {
    currentUser != null &&
      (setStreet(currentUser.address.street) ||
        setEmail(currentUser.email) ||
        setName(currentUser.name) ||
        setUserName(currentUser.username) ||
        setCity(currentUser.address.city) ||
        setZipcode(currentUser.address.zipcode) ||
        setPhone(currentUser.phone) ||
        setWebsite(currentUser.website));
  }, [currentUser]);

  function editingInputs() {
    setIsEditingStatus(!isEditingStatus);
    setIsImmutable(!isImmutable);
  }

  function sendData() {
    let isVerificationPassed = !Object.values(verificationChecklist).includes(false);
    isVerificationPassed
      ? console.log(JSON.stringify(currentUser))
      : console.log("ошибка валидации формы");
  }

  function checkOfInputs(e, currentInputName) {
    e.target.value === ""
      ? setVerificationChecklist({...verificationChecklist, ...{ [currentInputName]: false }})
      : setVerificationChecklist({...verificationChecklist, ...{[currentInputName]: true }});
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
                  disabled={isImmutable}
                  onChange={(e) => setName(e.target.value)}
                  defaultValue={currentUser?.name}
                  value={name}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null && verificationChecklist?.name
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">User name</p>
                <input
                  type="text"
                  name="username"
                  disabled={isImmutable}
                  defaultValue={currentUser?.username}
                  value={username}
                  onChange={(e) => setUserName(e.target.value)}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null &&
                    verificationChecklist?.username
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">E-mail</p>
                <input
                  type="text"
                  name="email"
                  disabled={isImmutable}
                  defaultValue={currentUser?.email}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null && verificationChecklist?.email
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Street</p>
                <input
                  type="text"
                  name="street"
                  disabled={isImmutable}
                  defaultValue={currentUser?.address.street}
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null && verificationChecklist?.street
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">City</p>
                <input
                  type="text"
                  name="city"
                  disabled={isImmutable}
                  defaultValue={currentUser?.address.city}
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null && verificationChecklist?.city
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Zip code</p>
                <input
                  type="text"
                  name="zipcode"
                  disabled={isImmutable}
                  defaultValue={currentUser?.address.zipcode}
                  value={zipcode}
                  onChange={(e) => setZipcode(e.target.value)}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null &&
                    verificationChecklist?.zipcode
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Phone</p>
                <input
                  type="text"
                  name="phone"
                  disabled={isImmutable}
                  defaultValue={currentUser?.phone}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null && verificationChecklist?.phone
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Website</p>
                <input
                  type="text"
                  name="website"
                  disabled={isImmutable}
                  defaultValue={currentUser?.website}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  onBlur={(e) => checkOfInputs(e, e.target.name)}
                  className={`form-item__input ${
                    verificationChecklist != null &&
                    verificationChecklist?.website
                      ? ""
                      : "warning"
                  }`}
                />
              </label>

              <label className="form__form-item">
                <p className="form-item__text">Comment</p>
                <textarea
                  cols="30"
                  disabled={isImmutable}
                  rows="10"
                  className="form__form-comment"
                ></textarea>
              </label>
            </form>

            <div className="form-wrapper__submit-container">
              <input
                type="submit"
                value="Отправить"
                onClick={sendData}
                className={`submit-container__form-submit btn ${
                  isEditingStatus ? "editing" : ""
                }`}
              />
            </div>
          </div>
        </>
      )}
    </>
  )
};
