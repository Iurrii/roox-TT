import './Profile.css';

export default function Profile() {
  return (
    <div class="content__form-wrapper">
      <form action="" class="form-wrapper__form">

        <label for="" class="form__form-item">
          <p class="form-item__text">Name</p>
          <input type="text" value="" placeholder="Иван Иванов" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">User name</p>
          <input type="text" value="" placeholder="van" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">E-mail</p>
          <input type="text" value="" placeholder="example@mail.com" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">Street</p>
          <input type="text" value="" placeholder="ул.Пушкина-Колотушкина" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">City</p>
          <input type="text" value="" placeholder="Москва" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">Zip code</p>
          <input type="text" value="" placeholder="666666" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">Phone</p>
          <input type="text" value="" placeholder="8800533535" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">Website</p>
          <input type="text" value="" placeholder="www.example.com" class="form-item__input" />
        </label>

        <label for="" class="form__form-item">
          <p class="form-item__text">Comment</p>
          <textarea name="" id="" cols="30" rows="10" class="form__form-comment"></textarea>
        </label>
      </form>

      <div class="form-wrapper__submit-container">
        <input type="submit" value="Отправить" class="submit-container__form-submit btn" />
      </div>

    </div>
  )
}