import React from "react";

const ValidName = ({ name, focusedName }) => {
  if (name !== "" && focusedName === false && !name.match(/^[A-Za-z]+$/))
    return <h4 className={"input__valid"}>wrong name!</h4>;
  else return <></>;
};
const ValidSurname = ({ surname, focusedSurname }) => {
  if (
    surname !== "" &&
    focusedSurname === false &&
    !surname.match(/^[A-Za-z]+$/)
  )
    return <h4 className={"input__valid"}>wrong surname!</h4>;
  else return <></>;
};
const ValidMessage = ({ message, focusedMessage }) => {
  if (message.length < 100 && message !== "" && focusedMessage === false)
    return <h4 className={"input__valid"}>at least 100 characters</h4>;
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
    return <h4 className={"input__valid"}>wrong email!</h4>;
  else return <></>;
};
const ValidationGood = ({ goodValidation }) => {
  return <h4 className={"message__sent input__valid"}>{goodValidation}</h4>;
};

export { ValidName, ValidSurname, ValidMessage, ValidationGood, ValidMail };
