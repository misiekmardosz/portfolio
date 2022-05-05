import React, { useState } from "react";
import linkedin_logo from "../logos/linkedin-brands.svg";
import messenger_logo from "../logos/facebook-messenger-brands.svg";
import github_logo from "../logos/git-alt-brands.svg";

import { ValidMail, ValidMessage, ValidName, ValidSurname } from "./Validation";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [message, setMessage] = useState("");
  const [focusedMail, setFocusedMail] = useState(false);
  const [focusedName, setFocusedName] = useState(false);
  const [focusedSurname, setFocusedSurname] = useState(false);
  const [focusedMessage, setFocusedMessage] = useState(false);
  const [goodValidation, setGoodValidation] = useState("");
  const onFocusName = () => setFocusedName(true);
  const onBlurName = () => setFocusedName(false);
  const onFocusSurname = () => setFocusedName(true);
  const onBlurSurname = () => setFocusedName(false);
  const onFocusMail = () => setFocusedMail(true);
  const onBlurMail = () => setFocusedMail(false);
  const onFocusMessage = () => setFocusedMessage(true);
  const onBlurMessage = () => setFocusedMessage(false);

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch(
        "https://fer-api.coderslab.pl/v1/portfolio/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: name,
            email: email,
            message: message,
          }),
        }
      );
      let resJson = await res.json();
      if (res.status === 200) {
        setName("");
        setSurname("");
        setEmail("");
        setMessage("");
        setGoodValidation("SEND!");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section id="Contact" title="Contact" className="contact">
      <div className="form__container container">
        <h2 className={"section__title"}>Contact</h2>
        <div className={"form__box"}>
          {/*<ValidationGood goodValidation={goodValidation} />*/}
          <form className={"form"} onSubmit={handleSubmit}>
            <div className={"inputs"}>
              <div className={"input"}>
                {/*<input className={"form--input"} placeholder={"Krzysztof"}/>*/}
                <input
                  type="text"
                  value={name}
                  onBlur={onBlurName}
                  onFocus={onFocusName}
                  className={"form__input"}
                  placeholder="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <ValidName name={name} focusedName={focusedName} />
              </div>
              <div className={"input"}>
                {/*<input className={"form--input"} placeholder={"abc@xyz.com"}/>*/}
                <input
                  type="text"
                  value={surname}
                  onBlur={onBlurSurname}
                  onFocus={onFocusSurname}
                  className={"form__input"}
                  placeholder="surname"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <ValidSurname
                  surname={surname}
                  focusedSurname={focusedSurname}
                />
              </div>
            </div>
            <div className={"input"}>
              {/*<input className={"form--input"} placeholder={"abc@xyz.com"}/>*/}
              <input
                type="text"
                value={email}
                onBlur={onBlurMail}
                onFocus={onFocusMail}
                className={"form__input"}
                placeholder="abc@xyz.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidMail email={email} focusedMail={focusedMail} />
            </div>
            <div className={"textarea"}>
              <h3>Wpisz swoja wiadomość</h3>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                onFocus={onFocusMessage}
                onBlur={onBlurMessage}
                value={message}
                placeholder={
                  "Lorem ipsum dolor sit amet," +
                  " consectetur adipiscing elit," +
                  " sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. " +
                  "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip " +
                  "ex ea commodo consequat."
                }
              />
              <ValidMessage message={message} focusedMessage={focusedMessage} />
            </div>
            <button className={"send__button"} onClick={"submit"}>
              SENT
            </button>
          </form>
          <div className={"informations"}>
            <h3>michal.mardosz@gmail.com</h3>
            <div className="social__logos">
              <a href="https://www.messenger.com/t/100000079468151">
                {" "}
                <img
                  className="brand_logo"
                  src={messenger_logo}
                  alt="messenger_logo"
                />
              </a>
              <img className="brand_logo" src={linkedin_logo} alt="css_logo" />
              <img className="brand_logo" src={github_logo} alt="css_logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
