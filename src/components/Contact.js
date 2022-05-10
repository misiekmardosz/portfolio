import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
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
  const onFocusSurname = () => setFocusedSurname(true);
  const onBlurSurname = () => setFocusedSurname(false);
  const onFocusMail = () => setFocusedMail(true);
  const onBlurMail = () => setFocusedMail(false);
  const onFocusMessage = () => setFocusedMessage(true);
  const onBlurMessage = () => setFocusedMessage(false);

  const mailForm = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    if (
      email.match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      ) &&
      name.match(/^[A-Za-z]+$/) &&
      surname.match(/^[A-Za-z]+$/) &&
      message.length < 100
    ) {
      emailjs
        .sendForm(
          "service_lq4spgu",
          "template_jjer22l",
          mailForm.current,
          "IrYxnXdasMOkhGsJT"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      e.target.reset();
      setGoodValidation("send!");
    }
  };
  console.log(name);

  return (
    <section id="Contact" title="Contact" className="contact">
      <div className="form__container container">
        <h2 className={"section__title"}>Contact</h2>
        <div className={"form__box"}>
          {/*<ValidationGood goodValidation={goodValidation} />*/}
          <form ref={mailForm} className={"form"} onSubmit={sendEmail}>
            <div className={"inputs"}>
              <div className={"input"}>
                {/*<input className={"form--input"} placeholder={"Krzysztof"}/>*/}
                <input
                  type="text"
                  value={name}
                  name={"form_name"}
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
                  name={"form_surname"}
                  onBlur={onBlurSurname}
                  onFocus={onFocusSurname}
                  className={"form__input"}
                  placeholder="surname"
                  onChange={(e) => setSurname(e.target.value)}
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
                name={"form_email"}
                onBlur={onBlurMail}
                onFocus={onFocusMail}
                className={"form__input"}
                placeholder="abc@xyz.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <ValidMail email={email} focusedMail={focusedMail} />
            </div>
            <div className={"textarea__box"}>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                onFocus={onFocusMessage}
                onBlur={onBlurMessage}
                className="textarea"
                name={"message"}
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
            <button className={"send__button"}>SENT</button>
          </form>
          <div className={"contact__options"}>
            <h3>michal.mardosz@gmail.com</h3>
            <h3>+48 517 203 072</h3>
            <div className="social__logos">
              <a
                href="https://www.messenger.com/t/100000079468151"
                className="brand__logo"
              >
                <img src={messenger_logo} alt="messenger_logo" />
              </a>
              <a href="https://github.com/misiekmardosz">
                <img src={github_logo} alt="css_logo" className="brand__logo" />
              </a>
              <a
                href="https://www.linkedin.com/in/micha%C5%82-mardosz-298892228/"
                className="brand__logo"
              >
                <img src={linkedin_logo} alt="css_logo" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
