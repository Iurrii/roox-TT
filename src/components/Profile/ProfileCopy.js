import "./Profile.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Profile({ getUserById, user = null }) {
  const { id } = useParams();
  // data
  const [formData, setFormData] = useState(null);

  // state
  const [isFormEditable, setIsFormEditable] = useState(false);

  useEffect(() => {
    getUserById(id);
  });

  useEffect(() => {
    user != null &&
      setFormData([
        { value: user.name, title: "Name of user", inputType: "text" },
        { value: user.id, title: "uuid", inputType: "number" },
        { value: user.username, title: "Username", inputType: "text" },
      ]);
  }, [user]);

  const inputHandler = (newValue, currentInput) => {
    let newFormData = [...formData];
    newFormData[currentInput].value = newValue;
    console.log("new", newFormData);

    setFormData(newFormData);
  };

  return (
    <>
      {user && (
        <>
          <div className="content__header">
            <h2 className="header__title">Профиль пользователя</h2>
            <button
              onClick={() => setIsFormEditable(!isFormEditable)}
              className="header__btn-edit btn"
            >
              Редактировать
            </button>
          </div>

          <div className="content__form-wrapper">
            <form action="" className="form-wrapper__form">
              {formData &&
                formData.map((singleData, index) => (
                  <label key={index} className="form__form-item">
                    <p
                      className="form-item__text"
                      style={{
                        color: singleData.value != null ? "#000" : "red",
                      }}
                    >
                      {singleData.title}
                    </p>
                    <input
                      type={singleData.inputType}
                      disabled={isFormEditable}
                      defaultValue={singleData.value}
                      value={singleData.value}
                      onChange={(e) => inputHandler(e.target.value, index)}
                      className="form-item__input"
                    />
                  </label>
                ))}
            </form>
          </div>
        </>
      )}
    </>
  );
}
