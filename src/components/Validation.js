import React from "react";

const ValidName = ({ name, focusedName }) => {
  if (name !== "" && focusedName === false && !name.match(/^[A-Za-z]+$/))
    return <h4 className={"input__valid"}>podany imie jest nieprawidłowe!</h4>;
  else return <></>;
};
const ValidSurname = ({ name, focusedName }) => {
  if (name !== "" && focusedName === false && !name.match(/^[A-Za-z]+$/))
    return <h4 className={"input__valid"}>podany imie jest nieprawidłowe!</h4>;
  else return <></>;
};
const ValidMessage = ({ message, focusedMessage }) => {
  if (message.length < 120 && message !== "" && focusedMessage === false)
    return (
      <h4 className={"input__valid"}>
        wiadomość musi mieć conajmniej 120 znaków!
      </h4>
    );
  else return <></>;
};
const ValidMail = ({ email, focusedMail }) => {
  if (
    email !== "" &&
    focusedMail === false &&
    !email.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    )
  )
    return <h4 className={"input__valid"}>podany email jest nieprawidłowy!</h4>;
  else return <></>;
};
const ValidationGood = ({ goodValidation }) => {
  return <h4 className={"message--sent input__valid"}>{goodValidation}</h4>;
};

export { ValidName, ValidSurname, ValidMessage, ValidationGood, ValidMail };
