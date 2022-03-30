const form_1_HTML = `
<div class="form-1-first">
            <div class="form-group">
            <h3 class="group-title data">Данные</h3>
            <div class="form-row" id="entityRowId">
              <span class="form-row-title">Наименование</span>
              <div class="input-row">
                <input
                  type="text"
                  id="entity-name"
                  name="entity-name"
                  placeholder="Введите название"
                  required
                />
              </div>
            </div>
            <div class="form-row" id="innRowId">
              <span class="form-row-title">ИНН</span>
              <div class="input-row">
                <input
                  type="text"
                  id="inn"
                  name="inn"
                  placeholder="Введите номер"
                  required
                />
              </div>
            </div>
            <div class="form-row" id="addressRowId">
              <span class="form-row-title">Фактический адрес отличается?</span>
              <div class="input-row">
                <input
                  type="radio"
                  id="entityChoice1"
                  name="entity-address"
                  value="different"
                />
                <label for="entityChoice1">Отличается</label>
              </div>
              <div class="input-row">
                <input
                  type="radio"
                  id="entityChoice2"
                  name="entity-address"
                  value="same"
                  checked
                />
                <label for="entityChoice2">Не отличается</label>
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title"
                >Номер свидетельства <span class="not-necessary">(не обязательно)</span></span
              >
              <div class="input-row">
                <input
                  type="text"
                  id="cert-number"
                  name="cert-number"
                  placeholder="Введите номер"
                />
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title"
                >Дата выдачи свидетельства <span class="not-necessary">(не обязательно)</span></span
              >
              <div class="input-row">
                <input
                  type="date"
                  id="cert-date"
                  name="cert-date"
                  placeholder="Введите дату"
                />
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title">БИК банка</span>
              <div class="input-row">
                <input
                  type="text"
                  id="bik"
                  name="bik"
                  placeholder="Введите БИК"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title">Расчетный счет</span>
              <div class="input-row">
                <input
                  type="text"
                  id="account"
                  name="account"
                  placeholder="Введите номер"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title">ФИО заполнителя анкеты</span>
              <div class="input-row">
                <input type="text" id="fio-filler" name="fio-filler" required />
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title">ФИО директора</span>
              <div class="input-row">
                <input
                  type="text"
                  id="fio_director"
                  name="fio_director"
                  required
                />
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title">Основания действий директора</span>
              <div class="input-row">
                <input
                  type="text"
                  id="director_reason"
                  name="director_reason"
                  required
                />
              </div>
            </div>
            <div class="form-row telephone" id="phone-row-1">
              <span class="form-row-title">Телефон</span>
              <div class="input-row">
                <input type="text" id="phone1" name="phone" required />
              </div>
              </div>
              <button type="button" id="add-phone-btn">
                Дополнительный телефон
              </button>
            <div class="form-row telephone is-hidden" id="phone-row-2">
              <div class="input-row">
                <input type="text" id="phone2" name="phone" />
                <button
                  type="button"
                  id="remove-phone-2"
                  onclick="deletePhoneRow2()"
                >
                  Удалить телефон
                </button>
              </div>
            </div>
            <div class="form-row telephone is-hidden" id="phone-row-3">
              <div class="input-row">
                <input type="text" id="phone3" name="phone" />
                <button
                  type="button"
                  id="remove-phone-3"
                  onclick="deletePhoneRow3()"
                >
                  Удалить телефон
                </button>
              </div>
            </div>
            <div class="form-row email">
              <span class="form-row-title">Email</span>
              <div class="input-row">
                <input
                  type="email"
                  id="email1"
                  name="email"
                  placeholder="Укажите email"
                  required
                />
                </div>
                </div>
                <button type="button" id="add-email-btn">
                  Дополнительный email
                </button>
            <div class="form-row email is-hidden" id="email-row-2">
              <div class="input-row">
                <input type="email" id="email2" name="email" />
                <button
                  type="button"
                  id="remove-email-2"
                  onclick="deleteEmailRow2()"
                >
                  Удалить email
                </button>
              </div>
            </div>
            <div class="form-row email is-hidden" id="email-row-3">
              <div class="input-row">
                <input type="email" id="email3" name="email" />
                <button
                  type="button"
                  id="remove-email-3"
                  onclick="deleteEmailRow3()"
                >
                  Удалить email
                </button>
              </div>
            </div>
            <div class="form-row" id="webShopRowId">
              <span class="form-row-title">Интернет магазин?</span>
              <div class="input-row">
                <input
                  type="radio"
                  id="webshopChoice1"
                  name="web-shop"
                  value="yes"
                />
                <label for="webshopChoice1">Да</label>
              </div>
              <div class="input-row">
                <input
                  type="radio"
                  id="webshopChoice2"
                  name="web-shop"
                  value="no"
                  checked
                />
                <label for="webshopChoice2">Нет</label>
              </div>
            </div>
            <div class="form-row">
              <span class="form-row-title">Комментарий <span class="not-necessary">(не обязательно)</span></span>
              <div class="input-row">
                <textarea
                  id="comment-textarea"
                  name="comment-textarea"
                ></textarea>
              </div>
            </div>
`;

const form_2_HTML = `<div class="form-2-first"><div class="form-group">
<h3 class="group-title data">ИНН</h3>
<div class="form-row" id="innRowId">
  <span class="form-row-title">ИНН</span>
  <div class="input-row">            
  <input
    type="text"
    id="inn"
    name="inn"
    placeholder="Введите номер"
    required
  />
  </div>
</div>
</div>
<div class="form-group">
<h3 class="group-title data">Данные</h3>
<div class="form-row" id="citizenFioRowId">
  <span class="form-row-title">ФИО</span>
  <div class="input-row">
  <input type="text" id="citizenFio" name="citizenFio" required />
  </div>
</div>
<div class="form-row">
  <span class="form-row-title">Дата рождения</span>
  <div class="input-row">            
  <input
    type="date"
    id="date-of-birth"
    name="date-of-birth"
    placeholder="Дата рождения"
    required
  />
  </div>
</div>
<div class="form-row telephone" id="phone-row-1">
  <span class="form-row-title">Телефон</span>
  <div class="input-row">
  <input type="text" id="phone1" name="phone" required />
  </div>
</div>
<div class="form-row email">
  <span class="form-row-title">Email</span>
  <div class="input-row">            
  <input
    type="email"
    id="email1"
    name="email"
    placeholder="Укажите email"
    required
  />
  </div>
</div>
<div class="form-group">
  <h3 class="group-title data">Паспорт</h3>
  <div class="form-row" id="passportRowId">
    <span class="form-row-title">Серия и номер паспорта</span>
    <div class="input-row">
    <input type="text" id="passport" name="passport" required />
    </div>
  </div>
  <div class="form-row">
    <span class="form-row-title">Дата выдачи паспорта</span>
    <div class="input-row">            
    <input
      type="date"
      id="date-passport"
      name="date-passport"
      placeholder="Дата выдачи паспорта"
      required
    />
    </div>
  </div>
  <div class="form-row">
    <span class="form-row-title">Кем выдан паспорт</span>
    <div class="input-row">
    <input
      type="text"
      id="passport-by-whom"
      name="passport-by-whom"
      required
    />
    </div>
  </div>
  <div class="form-row">
    <span class="form-row-title">Адрес регистрации</span>
    <div class="input-row">            
    <input
      type="text"
      id="address-registration"
      name="address-registration"
      placeholder="Укажите индекс, город, улицу, дом"
      required
    />
    </div>
  </div>
  <div class="form-row" id="webShopRowId2">
    <span class="form-row-title">Интернет магазин?</span>
    <div class="input-row">            
    <input
      type="radio"
      id="webshopChoice1_2"
      name="web-shop"
      value="yes"
    />
    <label for="webshopChoice1_2">Да</label>
    </div>
    <div class="input-row">            
    <input
      type="radio"
      id="webshopChoice2_2"
      name="web-shop"
      value="no"
      checked
    />
    <label for="webshopChoice2_2">Нет</label>
    </div>
  </div>
  <div class="form-row">
    <span class="form-row-title">Комментарий <span class="not-necessary">(не обязательно)</span></span>
    <div class="input-row">            
    <textarea
      id="comment-textarea"
      name="comment-textarea"
    ></textarea>
    </div>
  </div>
</div>
</div>
</div>
</div>
`;

// Отправитель (юр. лиц, ИП, самозанятый)
const senderChoiceRadio1 = document.querySelector("#senderChoice1");
const senderChoiceRadio2 = document.querySelector("#senderChoice2");
const senderChoiceRadio3 = document.querySelector("#senderChoice3");

senderChoiceRadio1.addEventListener("change", (e) => {
  if (e.target.value === "entity") {
    if (document.querySelector(".form-2-first")) {
      document.querySelector(".form-2-first").remove();

      document
        .querySelector(".litso")
        .insertAdjacentHTML("afterend", form_1_HTML);

      // Фактический адрес отличается?
      const entityAddressRadio1 = document.querySelector("#entityChoice1");
      const entityAddressRadio2 = document.querySelector("#entityChoice2");

      entityAddressRadio1.addEventListener("change", (e) => {
        if (e.target.value === "different") {
          document.querySelector("#addressRowId").insertAdjacentHTML(
            "afterend",
            `<div class="form-row" id="factualAddress">
          <span class="form-row-title">Фактический адрес</span>
          <div class="input-row">
          <input
            type="text"
            id="entity-real-address"
            name="entity-real-address"
            placeholder="Город, улица, дом/офис"
            required
          />
          </div>
      </div>`
          );
        }
      });

      entityAddressRadio2.addEventListener("change", (e) => {
        if (e.target.value === "same") {
          document.querySelector("#factualAddress").remove();
        }
      });

      // Интернет магазин?
      const webshopChoice1 = document.querySelector("#webshopChoice1");
      const webshopChoice2 = document.querySelector("#webshopChoice2");

      webshopChoice1.addEventListener("change", (e) => {
        if (e.target.value === "yes") {
          document.querySelector("#webShopRowId").insertAdjacentHTML(
            "afterend",
            `<div class="form-row" id="web-shop-row">
          <span class="form-row-title">Адрес сайта</span>
          <div class="input-row">            
          <input
            type="text"
            id="web-shop-address"
            name="web-shop-address"
            required
          />
          </div>
      </div>`
          );
        }
      });

      webshopChoice2.addEventListener("change", (e) => {
        if (e.target.value === "no") {
          document.querySelector("#web-shop-row").remove();
        }
      });

      // Кнопка добавить телефон
      const addPhoneButton = document.querySelector("#add-phone-btn");
      addPhoneButton.addEventListener("click", () => {
        const nodes = document.querySelectorAll(".telephone:not(.is-hidden)");

        if (nodes.length > 2) {
          return;
        } else {
          addPhoneButton.disabled = false;
          document
            .querySelector("div.form-row.telephone.is-hidden")
            .classList.remove("is-hidden");

          if (
            document.querySelectorAll(".telephone:not(.is-hidden)").length > 2
          ) {
            addPhoneButton.disabled = true;
          }
        }
      });

      // delete phone
      function deletePhoneRow2() {
        document.getElementById("phone-row-2").classList.add("is-hidden");
        addPhoneButton.disabled = false;
      }

      function deletePhoneRow3() {
        document.getElementById("phone-row-3").classList.add("is-hidden");
        addPhoneButton.disabled = false;
      }

      // Кнопка добавить email
      const addEmailButton = document.querySelector("#add-email-btn");
      addEmailButton.addEventListener("click", () => {
        const nodes = document.querySelectorAll(".email:not(.is-hidden)");

        if (nodes.length > 2) {
          return;
        } else {
          addEmailButton.disabled = false;
          document
            .querySelector("div.form-row.email.is-hidden")
            .classList.remove("is-hidden");

          if (document.querySelectorAll(".email:not(.is-hidden)").length > 2) {
            addEmailButton.disabled = true;
          }
        }
      });

      // delete email
      function deleteEmailRow2() {
        document.getElementById("email-row-2").classList.add("is-hidden");
        addEmailButton.disabled = false;
      }

      function deleteEmailRow3() {
        document.getElementById("email-row-3").classList.add("is-hidden");
        addEmailButton.disabled = false;
      }
    }

    if (!document.querySelector("#entityRowId")) {
      document.querySelector(".group-title.data").insertAdjacentHTML(
        "afterend",
        `<div class="form-row" id="entityRowId">
            <span class="form-row-title">Наименование</span>
            <div class="input-row">            
            <input
              type="text"
              id="entity-name"
              name="entity-name"
              placeholder="Введите название"
              required
            />
            </div>
        </div>`
      );
    }

    if (document.querySelector("#entrepreneurRowId")) {
      document.querySelector("#entrepreneurRowId").remove();
    }
    if (document.querySelector("#legalAddress")) {
      document.querySelector("#legalAddress").remove();
    }
  }

  if (!document.querySelector(".submit-btn")) {
    document.getElementById("form1").insertAdjacentHTML(
      "beforeend",
      `
    <div class="submit-btn">
    <p>Отправляя эту анкету вы подтверждаете ознакомление с 
    <a href="https://www.cdek.ru/ru/privacy_policy" target="_blank">политикой конфиденциальности</a>.
  </p>
  <button type="submit" class="send">Отправить</button>
  </div>`
    );
  }

  if (document.querySelector(".submit-btn-form2")) {
    document.querySelector(".submit-btn-form2").remove();
  }
});

senderChoiceRadio2.addEventListener("change", (e) => {
  if (e.target.value === "entrepreneur") {
    if (document.querySelector(".form-2-first")) {
      document.querySelector(".form-2-first").remove();

      document
        .querySelector(".litso")
        .insertAdjacentHTML("afterend", form_1_HTML);

      // Фактический адрес отличается?
      const entityAddressRadio1 = document.querySelector("#entityChoice1");
      const entityAddressRadio2 = document.querySelector("#entityChoice2");

      entityAddressRadio1.addEventListener("change", (e) => {
        if (e.target.value === "different") {
          document.querySelector("#addressRowId").insertAdjacentHTML(
            "afterend",
            `<div class="form-row" id="factualAddress">
          <span class="form-row-title">Фактический адрес</span>
          <div class="input-row">            
          <input
            type="text"
            id="entity-real-address"
            name="entity-real-address"
            placeholder="Город, улица, дом/офис"
            required
          />
          </div>
      </div>`
          );
        }
      });

      entityAddressRadio2.addEventListener("change", (e) => {
        if (e.target.value === "same") {
          document.querySelector("#factualAddress").remove();
        }
      });

      // Интернет магазин?
      const webshopChoice1 = document.querySelector("#webshopChoice1");
      const webshopChoice2 = document.querySelector("#webshopChoice2");

      webshopChoice1.addEventListener("change", (e) => {
        if (e.target.value === "yes") {
          document.querySelector("#webShopRowId").insertAdjacentHTML(
            "afterend",
            `<div class="form-row" id="web-shop-row">
          <span class="form-row-title">Адрес сайта</span>
          <div class="input-row">            
          <input
            type="text"
            id="web-shop-address"
            name="web-shop-address"
            required
          />
          </div>
      </div>`
          );
        }
      });

      webshopChoice2.addEventListener("change", (e) => {
        if (e.target.value === "no") {
          document.querySelector("#web-shop-row").remove();
        }
      });

      // Кнопка добавить телефон
      const addPhoneButton = document.querySelector("#add-phone-btn");
      addPhoneButton.addEventListener("click", () => {
        const nodes = document.querySelectorAll(".telephone:not(.is-hidden)");

        if (nodes.length > 2) {
          return;
        } else {
          addPhoneButton.disabled = false;
          document
            .querySelector("div.form-row.telephone.is-hidden")
            .classList.remove("is-hidden");

          if (
            document.querySelectorAll(".telephone:not(.is-hidden)").length > 2
          ) {
            addPhoneButton.disabled = true;
          }
        }
      });

      // delete phone
      function deletePhoneRow2() {
        document.getElementById("phone-row-2").classList.add("is-hidden");
        addPhoneButton.disabled = false;
      }

      function deletePhoneRow3() {
        document.getElementById("phone-row-3").classList.add("is-hidden");
        addPhoneButton.disabled = false;
      }

      // Кнопка добавить email
      const addEmailButton = document.querySelector("#add-email-btn");
      addEmailButton.addEventListener("click", () => {
        const nodes = document.querySelectorAll(".email:not(.is-hidden)");

        if (nodes.length > 2) {
          return;
        } else {
          addEmailButton.disabled = false;
          document
            .querySelector("div.form-row.email.is-hidden")
            .classList.remove("is-hidden");

          if (document.querySelectorAll(".email:not(.is-hidden)").length > 2) {
            addEmailButton.disabled = true;
          }
        }
      });

      // delete email
      function deleteEmailRow2() {
        document.getElementById("email-row-2").classList.add("is-hidden");
        addEmailButton.disabled = false;
      }

      function deleteEmailRow3() {
        document.getElementById("email-row-3").classList.add("is-hidden");
        addEmailButton.disabled = false;
      }
    }

    document.querySelector(".group-title.data").insertAdjacentHTML(
      "afterend",
      `<div class="form-row" id="entrepreneurRowId">
          <span class="form-row-title"
            >ФИО (индивидуального предпринимателя)</span>
            <div class="input-row">            
            <input
              type="text"
              id="entrepreneur-name"
              name="entrepreneur-name"
              placeholder="Введите ФИО"
              required
            />
            </div>
      </div>`
    );

    document.querySelector("#innRowId").insertAdjacentHTML(
      "afterend",
      `
      <div class="form-row" id="legalAddress">
          <span class="form-row-title">Юридический адрес</span>
          <div class="input-row">            
          <input
            type="text"
            id="entrepreneur-legal-address"
            name="entrepreneur-legal-address"
            placeholder="Введите адрес"
            required
          />
          </div>
      </div>
    `
    );
  }

  if (document.querySelector("#entityRowId")) {
    document.querySelector("#entityRowId").remove();
  }

  if (!document.querySelector(".submit-btn")) {
    document.getElementById("form1").insertAdjacentHTML(
      "beforeend",
      `
    <div class="submit-btn">
    <p>Отправляя эту анкету вы подтверждаете ознакомление с 
    <a href="https://www.cdek.ru/ru/privacy_policy" target="_blank">политикой конфиденциальности</a>.
  </p>
  <button type="submit" class="send">Отправить</button>
  </div>`
    );
  }

  if (document.querySelector(".submit-btn-form2")) {
    document.querySelector(".submit-btn-form2").remove();
  }
});

senderChoiceRadio3.addEventListener("change", (e) => {
  if (e.target.value === "citizen") {
    if (document.querySelector(".form-1-first")) {
      document.querySelector(".form-1-first").remove();

      document
        .querySelector(".litso")
        .insertAdjacentHTML("afterend", form_2_HTML);
    }

    const webshopChoice1 = document.querySelector("#webshopChoice1_2");
    const webshopChoice2 = document.querySelector("#webshopChoice2_2");

    webshopChoice1.addEventListener("change", (e) => {
      if (e.target.value === "yes") {
        document.querySelector("#webShopRowId2").insertAdjacentHTML(
          "afterend",
          `<div class="form-row" id="web-shop-row">
          <span class="form-row-title">Адрес сайта</span>
          <div class="input-row">            
          <input
            type="text"
            id="web-shop-address"
            name="web-shop-address"
            required
          />
          </div>
      </div>`
        );
      }
    });

    webshopChoice2.addEventListener("change", (e) => {
      if (e.target.value === "no") {
        document.querySelector("#web-shop-row").remove();
      }
    });
  }

  if (document.querySelector(".submit-btn")) {
    document.querySelector(".submit-btn").remove();
  }

  if (!document.querySelector(".submit-btn-form2")) {
    document.getElementById("form1").insertAdjacentHTML(
      "beforeend",
      `
      <div class="submit-btn-form2">
      <p>Отправляя эту анкету вы подтверждаете ознакомление с 
      <a href="https://www.cdek.ru/ru/privacy_policy" target="_blank">политикой конфиденциальности</a>.
    </p>
      <button type="button" class="send">Отправить</button>
    </div>
    `
    );
  }

  const form = document.getElementById("form1");
  const button = document.querySelector(".submit-btn-form2");
  button.addEventListener("click", (e) => {
    // <backend>
    const USER_ID = "1"; // сюда нужно вставить ID

    const data = {
      type: "Самозанятый гражданин",
      inn: form.querySelector("#inn").value,
      name: form.querySelector("#citizenFio").value,
      birthDate: form.querySelector("#date-of-birth").value,
      phone: form.querySelector("#phone1").value,
      email: form.querySelector("#email1").value,
      passportMain: form.querySelector("#passport").value,
      passportDate: form.querySelector("#date-passport").value,
      passportByWhom: form.querySelector("#passport-by-whom").value,
      registrationAddress: form.querySelector("#address-registration").value,
      webShopAddress: form.querySelector("#web-shop-address")
        ? form.querySelector("#web-shop-address").value
        : "",
      comment: form.querySelector("#comment-textarea").value,
    };

    // <backend>
    fetch(`https://test.com/%эндпоинт%/${USER_ID}`, {
      // указать эндпоинт
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data), // отправляю на бэкенд JSON (объект data)
    })
      .then((response) => response.json())
      .then((result) => {
        // ожидаю получить в ответе JSON: { success: true/false }
        if (result.success) {
          alert("Анкета отправлена");
          form.reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});

// Фактический адрес отличается?
const entityAddressRadio1 = document.querySelector("#entityChoice1");
const entityAddressRadio2 = document.querySelector("#entityChoice2");

entityAddressRadio1.addEventListener("change", (e) => {
  if (e.target.value === "different") {
    document.querySelector("#addressRowId").insertAdjacentHTML(
      "afterend",
      `<div class="form-row" id="factualAddress">
        <span class="form-row-title">Фактический адрес</span>
        <input
          type="text"
          id="entity-real-address"
          name="entity-real-address"
          placeholder="Город, улица, дом/офис"
          required
        />
    </div>`
    );
  }
});

entityAddressRadio2.addEventListener("change", (e) => {
  if (e.target.value === "same") {
    document.querySelector("#factualAddress").remove();
  }
});

// Интернет магазин?
const webshopChoice1 = document.querySelector("#webshopChoice1");
const webshopChoice2 = document.querySelector("#webshopChoice2");

webshopChoice1.addEventListener("change", (e) => {
  if (e.target.value === "yes") {
    document.querySelector("#webShopRowId").insertAdjacentHTML(
      "afterend",
      `<div class="form-row" id="web-shop-row">
        <span class="form-row-title">Адрес сайта</span>
        <input
          type="text"
          id="web-shop-address"
          name="web-shop-address"
          required
        />
    </div>`
    );
  }
});

webshopChoice2.addEventListener("change", (e) => {
  if (e.target.value === "no") {
    document.querySelector("#web-shop-row").remove();
  }
});

// Кнопка добавить телефон
const addPhoneButton = document.querySelector("#add-phone-btn");
addPhoneButton.addEventListener("click", () => {
  const nodes = document.querySelectorAll(".telephone:not(.is-hidden)");

  if (nodes.length > 2) {
    return;
  } else {
    addPhoneButton.disabled = false;
    document
      .querySelector("div.form-row.telephone.is-hidden")
      .classList.remove("is-hidden");

    if (document.querySelectorAll(".telephone:not(.is-hidden)").length > 2) {
      addPhoneButton.disabled = true;
    }
  }
});

// delete phone
function deletePhoneRow2() {
  document.getElementById("phone-row-2").classList.add("is-hidden");
  addPhoneButton.disabled = false;
}

function deletePhoneRow3() {
  document.getElementById("phone-row-3").classList.add("is-hidden");
  addPhoneButton.disabled = false;
}

// Кнопка добавить email
const addEmailButton = document.querySelector("#add-email-btn");
addEmailButton.addEventListener("click", () => {
  const nodes = document.querySelectorAll(".email:not(.is-hidden)");

  if (nodes.length > 2) {
    return;
  } else {
    addEmailButton.disabled = false;
    document
      .querySelector("div.form-row.email.is-hidden")
      .classList.remove("is-hidden");

    if (document.querySelectorAll(".email:not(.is-hidden)").length > 2) {
      addEmailButton.disabled = true;
    }
  }
});

// delete email
function deleteEmailRow2() {
  document.getElementById("email-row-2").classList.add("is-hidden");
  addEmailButton.disabled = false;
}

function deleteEmailRow3() {
  document.getElementById("email-row-3").classList.add("is-hidden");
  addEmailButton.disabled = false;
}

// form
const form = document.getElementById("form1");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // <backend>
  const USER_ID = "1"; // сюда нужно вставить ID

  const data = {
    type: form.querySelector("#entity-name") ? "Юр. лицо" : "ИП",
    entityName: form.querySelector("#entity-name")
      ? form.querySelector("#entity-name").value
      : "",
    entrepreneurName: form.querySelector("#entrepreneur-name")
      ? form.querySelector("#entrepreneur-name").value
      : "",
    entrepreneurLegalAddress: form.querySelector("#entrepreneur-legal-address")
      ? form.querySelector("#entrepreneur-legal-address").value
      : "",
    inn: form.querySelector("#inn").value,
    entityRealAddress: form.querySelector("#entity-real-address")
      ? form.querySelector("#entity-real-address").value
      : "",
    certNumber: form.querySelector("#cert-number").value,
    certDate: form.querySelector("#cert-date").value,
    bik: form.querySelector("#bik").value,
    account: form.querySelector("#account").value,
    fioFiller: form.querySelector("#fio-filler").value,
    fioDirector: form.querySelector("#fio_director").value,
    directorReason: form.querySelector("#director_reason").value,
    phone1: form.querySelector("#phone1").value,
    phone2: form.querySelector("#phone2").value,
    phone3: form.querySelector("#phone3").value,
    email1: form.querySelector("#email1").value,
    email2: form.querySelector("#email2").value,
    email3: form.querySelector("#email3").value,
    webShopAddress: form.querySelector("#web-shop-address")
      ? form.querySelector("#web-shop-address").value
      : "",
    comment: form.querySelector("#comment-textarea").value,
  };

  fetch(`https://test.com/%эндпоинт%/${USER_ID}`, {
    // указать эндпоинт
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data), // отправляю на бэкенд JSON (объект data)
  })
    .then((response) => response.json())
    .then((result) => {
      // ожидаю получить в ответе JSON: { success: true/false }
      if (result.success) {
        alert("Анкета отправлена");
        form.reset();
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});
